import 'dotenv/config'; // Automatically loads the .env file
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import { Server } from 'socket.io';
import upload from 'express-fileupload';
import fetch from 'node-fetch';
import fs from 'fs';
import cors from 'cors';
import { spawn } from "child_process";
import dns from 'dns';
import { MongoClient } from 'mongodb';
import express from 'express';
import { Readable, PassThrough } from "node:stream";
import zlib from "node:zlib";
import getDimensions from 'get-video-dimensions';

// Static ES Module Imports for dynamic imports to prevent unhandled promises
import bodyparser from 'body-parser';
import mv from 'mv';
import { moveFile } from 'move-file';

const uri = "mongodb://localhost:27017";
const currentDir = path.dirname(fileURLToPath(import.meta.url));

// Traverse upward until package.json is found
export function getProjectRoot(startDir = currentDir) {
  let dir = startDir;
  while (dir !== path.parse(dir).root) {
    if (fs.existsSync(path.join(dir, 'package.json'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return startDir; // Fallback to current directory if not found
}

const __dirname = getProjectRoot();

const mongoClient = new MongoClient(uri, { monitorCommands: true });
mongoClient.connect(); // Enable command monitoring for debugging

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;
const io = new Server(server);

const tempDir = path.join(__dirname, "TempHls");

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(upload());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'Images')));
app.use(express.static(path.join(__dirname, 'Assets')));

//////////////////////////////////////////////Tools///////////////////////////////////////////////////

const checkIfSocketActive = async (userId) => {
  let output = false;
  try {
    let getSockets = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-sockets" });
    let sockets = getSockets.body;
    let search = sockets.find((s) => s.userId === userId);
    if (search) {
      output = search.active;
    }
  } catch (error) {
    console.log(error);
  }
  return output;
};

const addUserSocket = async (userId) => {
  let output = false;
  try {
    let getSockets = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-sockets" });
    let sockets = getSockets.body;
    let newSocketData = {
      "userId": userId,
      "active": true,
      "mediaId": null,
      "format": null
    };
    sockets.push(newSocketData);
    await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "user-sockets" }, { $set: { "body": sockets } });
    output = true;
  } catch (error) {
    console.log(error);
  }
  return output;
};

/////////////////////////////////////////////////*SOCKET CALLS*/////////////////////////////////////////////

io.on("connection", (socket) => {
  setInterval(async () => {
    // render all sockets inactive
    let getSockets = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-sockets" });
    let sockets = getSockets.body;
    for (var i = 0; i < sockets.length; i++) {
      let s = sockets[i];
      s.active = false;
    }
    await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "user-sockets" }, { $set: { "body": sockets } });
    socket.emit("ping");
  }, 15000);

  socket.on("ping-back", async (data) => {
    try {
      let userId = data.userId;
      let getSockets = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-sockets" });
      let sockets = getSockets.body;
      let targetSocket = sockets.find((s) => s.userId === userId);
      if (targetSocket) {
        targetSocket.active = true;
        await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "user-sockets" }, { $set: { "body": sockets } });
      }
    } catch (error) {
      console.log(error);
    }
  });
});

/////////////////////////////////////////////////*ROUTES*/////////////////////////////////////////////

app.get("/", async (request, response) => {
  try {
    let page = fs.createReadStream(path.join(__dirname, "index.html"));
    page.pipe(response);
  } catch (error) {
    console.log(error);
    response.sendStatus(404);
  }
});

app.post("/sign-up-user", async (request, response) => {
  try {
    let data = request.body;
    let getProfiles = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-profiles" });
    let profiles = getProfiles.body;

    let searchEmail = profiles.find((p) => p.emailAddress === data.emailAddress);
    let searchNumber = profiles.find((p) => p.mobileNumber === data.mobileNumber);

    if (!searchEmail && !searchNumber) {
      // Assuming generateUserId() is defined globally elsewhere in your application environment
      data.userId = generateUserId();
      let processResult = await addUserSocket(data.userId);

      if (processResult === true) {
        profiles.push(data);
        await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "user-profiles" }, { $set: { "body": profiles } });
        response.send(JSON.stringify({ "status": "success", "data": data }));
      } else {
        response.send(JSON.stringify({ "status": "server-error" }));
      }
    } else {
      if (searchEmail) {
        response.send(JSON.stringify({ "status": "email-exists" }));
      } else {
        response.send(JSON.stringify({ "status": "phoneNumber" }));
      }
    }
  } catch (error) {
    console.log(error);
    response.send(JSON.stringify({ "status": "server-error" }));
  }
});

app.post("/login-user", async (request, response) => {
  try {
    let data = request.body;
    let getProfiles = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-profiles" });
    let getSockets = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "user-sockets" });
    let profiles = getProfiles.body;
    let sockets = getSockets.body; // Changed from getSockets.sockets to getSockets.body to match standard architecture
    let identifier = data.id;
    let password = data.password;

    let searchEmail = profiles.find((p) => p.emailAddress === identifier);
    let searchNum = profiles.find((p) => p.mobileNumber === identifier);

    if (searchEmail) {
      if (searchEmail.password === password) {
        let targetSocket = sockets.find((s) => s.userId === searchEmail.userId);
        if (targetSocket) targetSocket.active = true;
        await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "user-sockets" }, { $set: { "body": sockets } });
        response.send(JSON.stringify({ "status": "success", "data": searchEmail }));
      } else {
        response.send(JSON.stringify({ "status": "wrong-password" }));
      }
    } else if (searchNum) {
      if (searchNum.password === password) {
        let targetSocket = sockets.find((s) => s.userId === searchNum.userId);
        if (targetSocket) targetSocket.active = true;
        await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "user-sockets" }, { $set: { "body": sockets } });
        response.send(JSON.stringify({ "status": "success", "data": searchNum }));
      } else {
        response.send(JSON.stringify({ "status": "wrong-password" }));
      }
    } else {
      response.send(JSON.stringify({ "status": "user-not-found" }));
    }
  } catch (error) {
    console.log(error);
    response.send(JSON.stringify({ "status": "server-error" }));
  }
});

app.post("/add-track-data", async (request, response) => {
  try {
    let data = request.body;
    let userId = data.userId;
    let check = await checkIfSocketActive(userId);

    if (check === true) {
      let getTracks = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "track-data" });
      let tracks = getTracks.body;
      tracks.push(data.track);
      await mongoClient.db("RewiredBeats").collection("MainData").updateOne({ "name": "track-data" }, { $set: { "body": tracks } });
      response.send(JSON.stringify({ "status": "success" }));
    } else {
      response.send(JSON.stringify({ "status": "server-error" }));
    }
  } catch (error) {
    console.log(error);
    response.send(JSON.stringify({ "status": "server-error" }));
  }
});

app.post("/get-all-tracks", async (request, response) => {
  try {
    let getTracks = await mongoClient.db("RewiredBeats").collection("MainData").findOne({ "name": "track-data" });
    let tracks = getTracks.body;
    response.send(JSON.stringify({ "status": "success", "data": tracks }));
  } catch (error) {
    console.log(error);
    response.send(JSON.stringify({ "status": "server-error" }));
  }
});

function searchVibes(vibes, pattern) {
  let output = false;
  for (var i = 0; i < vibes.length; i++) {
    let vibe = vibes[i];
    if (pattern.test(vibe) === true) {
      output = true;
    }
  }
  return output;
}

function searchInstruments(instruments, pattern) {
  let output = false;
  for (var i = 0; i < instruments.length; i++) {
    let instrument = instruments[i];
    if (pattern.test(instrument) === true) {
      output = true;
    }
  }
  return output;
}

function searchTracks(tracks, searchInput) {
  let output = [];
  let pattern = new RegExp(searchInput, 'i'); // Added case-insensitive flag for safety
  for (var i = 0; i < tracks.length; i++) {
    let track = tracks[i];
    let instruments = track.instruments;
    let vibes = track.vibes;
    if (pattern.test(track.title) === true) {
      output.push(track);
    } else {
      if (searchInstruments(instruments, pattern) === true) {
        output.push(track);
      } else if (searchVibes(vibes, pattern) === true) {
