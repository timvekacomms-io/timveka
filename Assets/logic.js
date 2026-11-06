
document.body.style.width = window.innerWidth + 'px';
document.body.style.height = window.innerHeight + 'px';

const socket = io

const shoppingCartHolder = document.getElementById("shoppingCartHolder")
const shoppingCartBtn = document.getElementById("shoppingCartBtn")
const previousPage = document.getElementById("previousPage")

const beatListSection = document.getElementById("beatListSection")
const resultIndicator = document.getElementById("resultIndicator")
const menuBtn = document.getElementById("menuBtn")
const prodMenuBtn = document.getElementById("prod-menuBtn")
const clientMenuBtn = document.getElementById("client-menu-btn")

const closeAlert = document.getElementById("closeAlert")
const loadingWindow = document.getElementById("loadingWindow")
const promptWindow = document.getElementById("promptWindow")
const promptMessage = document.getElementById("promptMessage")
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const alertMessage = document.getElementById("alertMessage")
const alertWindow = document.getElementById("alertWindow")
const dialogBackground = document.getElementById("dialogBackground")
const loadingMessage = document.getElementById("loadingMessage")
//Page Sections
const mainPage = document.getElementById("mainPage")
const customBeatStore = document.getElementById("customBeatStore")
const customOrdersInput = document.getElementById("customOrdersInput")
const customOrdersCollect = document.getElementById("customOrdersCollect")
const clientHistory = document.getElementById("clientHistory")
const zambianOffer = document.getElementById("zambianOffer")
const intlOffer = document.getElementById("intlOffer")
const specificBeatWindow = document.getElementById("specificBeatWindow")

//Menu Holders 
const nonUserMenu = document.getElementById("nonUserMenu")
const userPresentMenu = document.getElementById("userPresentMenu")
const producerMenu = document.getElementById("producerMenu")
const profileMenu = document.getElementById("profileMenu")
const mainMenu = document.getElementById("mainMenu")
const customMenu = document.getElementById("customMenus")
const cartMenu = document.getElementById("cartMenu")
const producerTrackMenu = document.getElementById("producerTrackMenu")


const paymentWindow = document.getElementById("paymentWindow")
const paymentSelectorSection = document.getElementById("paymentSelectorSection")
const paymentDetailsSection = document.getElementById("paymentDetailsSection")
const mtnBtn = document.getElementById("mtnBtn")
const mtnHolder = document.getElementById("mtnHolder")
const airtelBtn = document.getElementById("airtelBtn")
const airtelHolder = document.getElementById("airtelHolder")
const atmBtn = document.getElementById("atmBtn")
const atmHolder = document.getElementById("atmHolder")

const currencySelectorWindow = document.getElementById("currencySelectorWindow")
const currencyList = document.getElementById("currencyList")

const beatUploadWindow = document.getElementById("beatUploadWindow")



const processCompleteWindow  = document.getElementById("processCompleteWindow")
const messagex  = document.getElementById("message")
const specialCode  = document.getElementById("specialCode")
const processDoneBtn  = document.getElementById("processDoneBtn")

const pIndicator = document.getElementById("pIndicator")
const pSect = document.getElementById("pSect")
const pSwitch = document.getElementById("pSwitch")
const pActuator = document.getElementById("pActuator")

const freeBeatSwitch = document.getElementById("freeBeatSwitch")
const freeBeatIndicator = document.getElementById("freeBeatIndicator")
const freeBeatActuator = document.getElementById("freeBeatActuator")

const addStemsSection = document.getElementById("addStemsSection")
const addStemsSect = document.getElementById("addStemsSect")
const addStemsIndicator = document.getElementById("addStemsIndicator")
const addStemsSwitch = document.getElementById("addStemsSwitch")
const addStemsActuator = document.getElementById("addStemsActuator")

const loginWndow = document.getElementById("loginWndow")
const idInput = document.getElementById("idInput")
const passwordInput = document.getElementById("passwordInput")
const loginInit = document.getElementById("loginInit")
const forgotBtn = document.getElementById("forgotBtn")

const changeCredentialsWindow = document.getElementById("changeCredentialsWindow")
const credIns = document.getElementById("credIns")
const firstField = document.getElementById("firstField")
const secondField = document.getElementById("secondField")
const credentialsProceed = document.getElementById("credentialsProceed")

const shopCartSection = document.getElementById("shopCartSection")
const shopCartTotalHeader = document.getElementById("shopCartTotalHeader")
const shopCartTotalValue = document.getElementById("shopCartTotalValue")
const shopCartList = document.getElementById("shopCartList")
const shopCartProceed = document.getElementById("shopCartProceed")

//About Us Elements 
const aboutUsSection = document.getElementById("aboutUsSection")
const aboutUsHeader = document.getElementById("aboutUsHeader")
const aboutUsDivider = document.getElementById("aboutUsDivider")
const aboutUsContent = document.getElementById("aboutUsContent")


//Player controls

const trackName = document.getElementById("trackName")
const prodName = document.getElementById("prodName")
const seekbar = document.getElementById("seekbar")
const playerTime = document.getElementById("playerTime")
const prevTrack = document.getElementById("prevTrack")
const playPauseBtn = document.getElementById("playPauseBtn")
const nextTrack = document.getElementById("nextTrack")
//Ad Mob
const closeBtn = document.getElementById("closeBtn")
const adMobSection = document.getElementById("adMobSection")
const admobCountSection = document.getElementById("admobCountSection")
const adMobSecondCount = document.getElementById("adMobSecondCount")

//Non User Menu
const homeBtnOne = document.getElementById("homeBtnOne")
const signUpOne = document.getElementById("signUpOne")
const loginOne = document.getElementById("loginOne")
const aboutUsOne = document.getElementById("aboutUsOne")

const agreeSection = document.getElementById("agreeSection")
const agreeSect = document.getElementById("agreeSect")
const agreeIndicator = document.getElementById("agreeIndicator")
const agreeSwitch = document.getElementById("agreeSwitch")
const agreeActuator = document.getElementById("agreeActuator")
const tcBtn = document.getElementById("tcBtn")

const paymentProfileImage = document.getElementById("payment-profile-image")
const profileImageInput = document.getElementById("profileImageInput")
const firstNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNameInput")
const phoneNumberInput = document.getElementById("phoneNumberInput")
const resOneInput = document.getElementById("resOneInput")
const resTwoInput = document.getElementById("resTwoInput")
const resThreeInput = document.getElementById("resThreeInput")
const districtInput = document.getElementById("districtInput")
const passwordInputTwo = document.getElementById("passwordInput")
const confirmPasswordInput = document.getElementById("confirmPasswordInput")
const countryBtnHolder = document.getElementById("countryBtnHolder")
const countryBtn = document.getElementById("countryBtn")
const zipCodeInput = document.getElementById("zipCodeInput")
const prefCurrencyDropDown = document.getElementById("prefCurrencyDropDown")
const prefCurrencyText = document.getElementById("prefCurrencyText")
const mainDateText = document.getElementById("mainDateText")
const mainDateIns = document.getElementById("mainDateIns")
const signUpBtn = document.getElementById("signUpBtn")
const termsAndConditions = document.getElementById("termsAndConditions")


const audioPlayer = new Audio()
let loginActive = false
let credActive = false
let beatUploadActive = false 
let producerSignUp = false 
let freeBeatUpload = false
let addStemsToOrder = false
let paymentWindowActive = false
let currencyWindowOpen = false 
let adShown = false
let ignoreAdTrackers = false
let seconds = 10
let userData = null
let processCompActive = false
let mainMenuOpen = false
let customMenuOpen = false
let signUpMode = false
//Page Swap functionality 
let currentPage = mainPage
let currentIndex = 0
let lastIndex = null
//Dialog interfaces 
let dialogActive = false
let alertActive = false
let promptActive = false
let messages = []
let generalPlaylist = []
let shoppingCart = []
let selectedPaymentMethod = null
let tcAgreed = false


function openLoginWindow(){
	dialogBackgroundHandler(true)
	setTimeout(()=>{		
		loginActive = true
		loginWndow.style.display = "block"
		setTimeout(()=>{
			loginWndow.style["margin-top"] = "5%"
			setTimeout(()=>{
				loginWndow.style["opacity"] = "1"
			},100)
		},200)
	},300)
}

function closeLoginWindow(){
	loginWndow.style["margin-top"] = "300%"
	setTimeout(()=>{
		loginWndow.style["opacity"] = "1"
		setTimeout(()=>{
			loginWndow.style["display"] = "none"
			loginActive = false
			setTimeout(()=>{
				dialogBackgroundHandler(false)
			},30)
		},200)
	},100)
}

function openCredentialsWindow(){
	dialogBackgroundHandler(true)
	setTimeout(()=>{		
		credActive = true
		changeCredentialsWindow.style.display = "block"
		setTimeout(()=>{
			changeCredentialsWindow.style["margin-top"] = "5%"
			setTimeout(()=>{
				changeCredentialsWindow.style["opacity"] = "1"
			},100)
		},200)
	},300)
}

function closeCredentialsWindow(){
	changeCredentialsWindow.style["margin-top"] = "300%"
	setTimeout(()=>{
		changeCredentialsWindow.style["opacity"] = "1"
		setTimeout(()=>{
			changeCredentialsWindow.style["display"] = "none"
			credActive = false
			setTimeout(()=>{
				dialogBackgroundHandler(false)
			},30)
		},200)
	},100)
}

function openProcessCompleteWindow(message,code){
	messagex.innerHTML = message
	if(code != null){
		specialCode.innerHTML = code
	}else{
		specialCode.style.display ="none"
	}
	setTimeout(()=>{		
		dialogBackgroundHandler(true)
		processCompleteWindow.style.display = "block"
		setTimeout(()=>{		
			processCompleteWindow.style["margin-top"] = "2%"
			setTimeout(()=>{		
				processCompleteWindow.style["opacity"] = "1"
			},100)
		},300)
	},30)
}

function closeProcessCompleteWindow(){
	
	processCompleteWindow.style["margin-top"] = "200%"
	setTimeout(()=>{		
		processCompleteWindow.style.opacity = "0"
		setTimeout(()=>{		
			processCompleteWindow.style.display = "none"
			messagex.innerHTML = null
			specialCode.innerHTML = null
			setTimeout(()=>{				
				dialogBackgroundHandler(false)
			},30)
		},30)
	},100)
	
}

function openUploadWindow(){
	
	dialogBackgroundHandler(true)
	
	setTimeout(()=>{		
		beatUploadActive = true
		beatUploadWindow.style.display = "block"
		setTimeout(()=>{
			beatUploadWindow.style["margin-top"]="2%"
			setTimeout(()=>{
				beatUploadWindow.style["opacity"]="1"			
			},100)
		},100)
	},300)
	
}

function closeUploadWindow(){
	beatUploadWindow.style["margin-top"] = "300%"
	setTimeout(()=>{
		beatUploadWindow.style["opacity"] = "0"
		setTimeout(()=>{
			beatUploadWindow.style.display = "none"
			dialogBackgroundHandler(false)
		},300)
	},100)
}

function openPaymentWindow(){
	
	paymentWindowActive = true
	
	dialogBackgroundHandler(true)
	
	setTimeout(()=>{		
		paymentWindow.style.display = "block"
		paymentSelectorSection.style.display = "block"
		paymentDetailsSection.style.display = "none"
		setTimeout(()=>{		
			paymentWindow.style["margin-top"] = "5%"
			setTimeout(()=>{
				paymentWindow.style["opacity"] = "1"
				
				setTimeout(()=>{
					paymentSelectorSection.style.opacity = "1"
				},200)
				
			},100)
		},30)
	},200)
	
}

function closePaymentWindow(){
	paymentWindowActive = false 
	setTimeout(()=>{		
		paymentWindow.style["margin-top"] = "300%"
		setTimeout(()=>{
			paymentWindow.style["opacity"] = "0"
			setTimeout(()=>{
				dialogBackgroundHandler(false)
			},200)
		},200)
	},30)
}



function closeCurrencySelector(){
	currencySelectorWindow.style["margin-top"] = "300%"
	setTimeout(()=>{
		currencySelectorWindow.style["display"] = "none"
		currencySelectorWindow.style["opacity"] = "0"
		currencyWindowOpen = false
	},200)
}

function closeCountrySelector(){
	currencySelectorWindow.style["margin-top"] = "300%"
	setTimeout(()=>{
		currencySelectorWindow.style["display"] = "none"
		currencySelectorWindow.style["opacity"] = "0"
		currencyWindowOpen = false
	},200)
}

function loadCurrencies(){
	currencyList.innerHTML = null
	let array = [
		"AUD",
        "AFN",
        "ALL",
        "DZD",
        "AOA",
        "ARS",
        "AMD",
        "AWG",
        "AZN",
        "BSD",
        "BHD",
        "BDT",
        "BBD",
        "BYR",
        "BZD",
        "BMD",
        "BTN",
        "BOB",
        "BAM",
        "BWP",
        "BRL",
        "BND",
        "BGN",
        "BIF",
        "XOF",
        "XAF",
        "XPF",
        "KHR",
        "CAD",
        "CVE",
        "KYD",
        "CLP",
        "CNY",
        "COP",
        "KMF",
        "CDF",
        "CRC",
        "HRK",
        "CUC",
        "CUP",
        "CZK",
        "DKK",
        "DJF",
        "DOP",
        "XCD",
        "EGP",
        "SVC",
        "ETB",
        "FKP",
        "FJD",
        "GMD",
        "GEL",
        "GHS",
        "GIP",
        "GBP",
        "GTQ",
        "GNF",
        "GYD",
        "HTG",
        "HNL",
        "HKD",
        "HUF",
        "ISK",
        "INR",
        "IDR",
        "IRR",
        "IQD",
        "ILS",
        "JMD",
        "JPY",
        "JOD",
        "KZT",
        "KES",
        "KWD",
        "KGS",
        "LAK",
        "LBP",
        "LSL",
        "LRD",
        "LYD",
        "MOP",
        "MKD",
        "MGA",
        "MWK",
        "MYR",
        "MVR",
        "MRO",
        "MUR",
        "MXN",
        "MDL",
        "MNT",
        "MAD",
        "MZN",
        "MMK",
        "ANG",
        "NAD",
        "NPR",
        "NZD",
        "NIO",
        "NGN",
        "KPW",
        "NOK",
        "OMR",
        "PKR",
        "PAB",
        "PGK",
        "PYG",
        "PEN",
        "PHP",
        "PLN",
        "QAR",
        "RON",
        "RUB",
        "RWF",
        "WST",
        "STD",
        "SAR",
        "RSD",
        "SCR",
        "SLL",
        "SGD",
        "SBD",
        "SOS",
        "ZAR",
        "KRW",
        "LKR",
        "SHP",
        "SDG",
        "SRD",
        "SZL",
        "SEK",
        "CHF",
        "SYP",
        "TWD",
        "TZS",
        "THB",
        "TOP",
        "TTD",
        "TND",
        "TRY",
        "TMM",
        "USD",
        "UGX",
        "UAH",
        "UYU",
        "AED",
        "VUV",
        "VEB",
        "VND",
        "YER",
        "ZMW"
	]
	
	for(var i=0; i<array.length; i++){
		let currency = array[i]
		let newElement = document.createElement("li")
		newElement.setAttribute("class","currency-list-item")
		
		newElement.addEventListener("click", ()=>{
			newElement.style.color = "#b88b45"
			if(signUpMode == true){
				prefCurrencyText.innerHTML = currency
			}
			setTimeout(()=>{
				closeCurrencySelector()
			},300)
		})
		
		newElement.innerHTML = currency
		
		currencyList.appendChild(newElement)
	}
	
}

function loadCountries(){
	
	currencyList.innerHTML = null
	
	let array = [
		"Australia",
            "Afghanistan",
            "Albania",
            "Algeria",
            "Angola",
            "Argentina",
            "Armenia",
            "Aruba",
            "Austria",
            "Azerbaijan",
            "Belgium",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belize",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burundi",
            "CFA",
            "CFP",
            "Cambodia",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Chili Peso",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech",
            "Denmark",
            "Djibouti",
            "Dominican Republich",
            "East Caribbean",
            "Egypt",
            "El Salvador",
            "Estonia",
            "Ethiopia",
            "Falkland Islands",
            "Finland",
            "Fiji",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Great Britain",
            "Greece",
            "Guatemala",
            "Guinea",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Lithuania",
            "Luxembourg",
            "Macau",
            "Macedonia",
            "Malagasy",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Malta",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Moldova",
            "Mongolia",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "NL Antilles",
            "Namibia",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua ",
            "Nigeria",
            "North Korea",
            "Norway",
            "Oman",
            "Pakistan",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Romania",
            "Russia",
            "Rwanda",
            "Samoa",
            "Sao Tome/Principe",
            "Saudi Arabia",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somali ",
            "South Africa",
            "South Korea",
            "Spain",
            "Sri Lanka",
            "St Helena",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tanzania",
            "Thailand",
            "Tonga",
            "Trinidad/Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "USA ",
            "Uganda",
            "Ukraine",
            "Uruguay",
            "United Arab Emirates",
            "Vanuatu",
            "Venezuela",
            "Vietnam",
            "Yemen",
            "Zambia",
            "Zimbabwe"
	]
	
	for(var i=0; i<array.length; i++){
		let country = array[i]
		let newElement = document.createElement("li")
		newElement.setAttribute("class","currency-list-item")
		
		newElement.addEventListener("click", ()=>{
			newElement.style.color = "#b88b45"
			setTimeout(()=>{
				closeCurrencySelector()
			},300)
		})
		
		newElement.innerHTML = country
		
		newElement.addEventListener("click",()=>{
			newElement.style.color = ""
			setTimeout(()=>{
				countryBtn.innerHTML = country
			},200)
		})
		
		currencyList.appendChild(newElement)
	}
	
}

function openCurrencySelector(){
	currencyWindowOpen = true
	currencySelectorWindow.style.display = "block"
	setTimeout(()=>{
		currencySelectorWindow.style["margin-top"] = "10%"
		setTimeout(()=>{
			currencySelectorWindow.style["opacity"] = "1"
			
			setTimeout(()=>{
				loadCurrencies()
			},100)
			
		},200)
	},20)
	
}
function openCountrySelector(){
	currencyWindowOpen = true
	currencySelectorWindow.style.display = "block"
	setTimeout(()=>{
		currencySelectorWindow.style["margin-top"] = "10%"
		setTimeout(()=>{
			currencySelectorWindow.style["opacity"] = "1"
			
			setTimeout(()=>{
				loadCountries()
			},100)
			
		},200)
	},20)
	
}
//Menu Openers and Closers

function openMainMenu(){
	mainMenuOpen = true
	mainMenu.style.opacity = "1"
	setTimeout(()=>{		
		mainMenu.style["margin-left"] = "-1%"
	},100)
	
	
}

function closeMainMenu(){
	mainMenuOpen = false
	mainMenu.style["margin-left"] = "-23%"
	setTimeout(()=>{		
		mainMenu.style.opacity = "0"
	},200)
	//Remove all menus 
	nonUserMenu.style.opacity = "0"
	nonUserMenu.style.display = "none"
	userPresentMenu.style.opacity = "0"
	userPresentMenu.style.display = "none"
	producerMenu.style.display = "none"
	producerMenu.style.display = "none"
    profileMenu.style.opacity = "0"
    profileMenu.style.display = "none"
}

function openCustomMenu(){
	
	customMenu.style.opacity = "1"
	setTimeout(()=>{		
		customMenu.style["margin-left"] = "-1%"
	},200)
	
	
}

function closeCustomMenu(){
	
	customMenu.style["margin-left"] = "-23%"
	setTimeout(()=>{		
		customMenu.style.opacity = "1"
	},200)
	
	
}

function swapPages(index){
	lastIndex = currentIndex
	currentIndex = index
	if(index == 0){
		//Landing Page
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					mainPage.style.display = "block"
					setTimeout(()=>{
						mainPage.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = mainPage
			currentPage.style["z-index"] = "13"
			loadAllTracks()
		},30)
	}
	if(index == 1){
		//Custom Beat Store
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					customBeatStore.style.display = "block"
					setTimeout(()=>{
						customBeatStore.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = customBeatStore
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 2){
		//Custom Orders Input
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					customOrdersInput.style.display = "block"
					setTimeout(()=>{
						customOrdersInput.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = customOrdersInput
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 3){
		//Client History
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					clientHistory.style.display = "block"
					setTimeout(()=>{
						clientHistory.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = clientHistory
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 4){
		//Zambian Offer
		
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					zambianOffer.style.display = "block"
					setTimeout(()=>{
						zambianOffer.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = zambianOffer
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 5){
		//International Offer
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					intlOffer.style.display = "block"
					setTimeout(()=>{
						intlOffer.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = intlOffer
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 6){
		//Specific Beat
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					specificBeatWindow.style.display = "block"
					setTimeout(()=>{
						specificBeatWindow.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = specificBeatWindow
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 7){
		//Custom Order Collect
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					customOrdersCollect.style.display = "block"
					setTimeout(()=>{
						customOrdersCollect.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = customOrdersCollect
			currentPage.style["z-index"] = "13"
		},30)
	}
	if(index == 8){
		//Shopping Cart
		currentPage.style["z-index"] = "12"
		setTimeout(()=>{			
			currentPage.style.opacity = "0"
			setTimeout(()=>{
				currentPage.style.display = "none"
				setTimeout(()=>{
					shopCartSection.style.display = "block"
					setTimeout(()=>{
						shopCartSection.style.opacity = "1"
					},30)
				},30)
			},200)
			currentPage = shopCartSection
			currentPage.style["z-index"] = "13"
		},30)
	}
}

function dialogBackgroundHandler(show){
	if(show == true){
		dialogActive = true
		dialogBackground.style.display = "block"
		setTimeout(()=>{
			dialogBackground.style.opacity = "1"
		},10)
	}else{
		dialogActive = false
		dialogBackground.style.opacity = "0"
		setTimeout(()=>{
			dialogBackground.style.display = "none"
		},130)
	}
}

function alert(message){
	closeBtn.style.display = "none"
	if(message){
		if(alertActive == false){			
			dialogBackgroundHandler(true)
			setTimeout(()=>{				
				messages.push(message)
				alertWindow.style["margin-top"] = "5%"
				setTimeout(()=>{		
					alertWindow.style["opacity"] = "1"
				},150)
				alertMessage.innerHTML = message
				alertActive = true
			},150)
		}else{
			messages.push(message)
			alertMessage.innerHTML = message
		}
	}
}

function closeAlertWindow(){
	
	if(messages.length == 1){		
		alertMessage.innerHTML = null
		messages.length = 0
		alertActive = false
		alertWindow.style["margin-top"] = "300%"
		setTimeout(()=>{		
			alertWindow.style["opacity"] = "0"
			setTimeout(()=>{
				dialogBackgroundHandler(false)
				closeBtn.style.display = "block"
			},450)
		},150)
	}else{
		let lastIndex = messages.length-1
		messages.splice(lastIndex,1)
		alertMessage.innerHTML = messages[messages.length-1]
	}
}

function prompt(message,func){
	closeBtn.style.display = "none"
	promptActive = true
	promptMessage.innerHTML = message
	yesBtn.addEventListener("click",()=>{
		closePrompt()
		setTimeout(()=>{			
			func()
		},800)
	})
	dialogBackgroundHandler(true)
	setTimeout(()=>{
		promptWindow.style["margin-top"] = "5%"
		setTimeout(()=>{
			promptWindow.style["opacity"] = "1"
		},150)
	},150)
}

function closePrompt(){
	promptMessage.innerHTML = null
	promptActive = false
	promptWindow.style["margin-top"] = "300%"
	setTimeout(()=>{
		promptWindow.style["opacity"] = "0"
		setTimeout(()=>{
			dialogBackgroundHandler(false)
			closeBtn.style.display = "block"
		},450)
	},150)
}

function openLoader(message){
	closeBtn.style.display = "none"
	if(message){
		loadingMessage.innerHTML = message
	}else{
		loadingMessage.innerHTML = "Please wait..."
	}
	dialogBackgroundHandler(true)
	setTimeout(()=>{		
		loadingWindow.style["margin-top"] = "5%"
		setTimeout(()=>{			
			loadingWindow.style["opacity"] = "1"
		},150)
	},150)
	
	
}

function closeLoader(){
	
	loadingMessage.innerHTML = "Please wait..."
	loadingWindow.style["margin-top"] = "5%"
	setTimeout(()=>{			
		loadingWindow.style["opacity"] = "1"
		setTimeout(()=>{
			dialogBackgroundHandler(false)
			closeBtn.style.display = "block"
		},450)
	},150)
}

function showCartMenu(){
	cartMenu.style.display = "block"
	setTimeout(()=>{		
		cartMenu.style.opacity = "1"
	},200)
}

function showProducerTrackMenu(){
	producerTrackMenu.style.display = "block"
	setTimeout(()=>{		
		producerTrackMenu.style.opacity = "1"
	},200)
}

function showNonUserMenu(){
	nonUserMenu.style.display = "block"
	setTimeout(()=>{		
		nonUserMenu.style.opacity = "1"
	},200)
}

function showUserMenu(){
	userPresentMenu.style.display = "block"
	setTimeout(()=>{		
		userPresentMenu.style.opacity = "1"
	},200)
}

function showProducerMenu(){
	producerMenu.style.display = "block"
	setTimeout(()=>{		
		producerMenu.style.opacity = "1"
	},200)
}
async function loadTrack(track){
	try{
		let getTrack = await fetch("/get-track", {
			"method":"POST",
			"headers":{"Content-Type":"application/json"},
			"body":track
		})
		
		let response = await getTrack.blob()
		
		let conversion = URL.createObjectURL(response)
		
		audioPlayer.src = conversion
		
	}catch(error){
		console.log(error)
	}
}
async function loadTracks(tracks,mode,mainListContainer){
	
	beatListSection.innerHTML = null
	
	if(mode == 0){
		
		for(var i=0; i<tracks.length; i++){
			
			let track = tracks[i]
			//create list object
			let listObject = document.createElement("div")
			listObject.setAttribute("class","listObject")
			let artworkHolder = document.createElement("div")
			artworkHolder.setAttribute("class","artworkHolder")
			let artworkImage = document.createElement("img")
			artworkImage.setAttribute("class","artworkImage")
			let detailsSection = document.createElement("div")
			detailsSection.setAttribute("class","detailsSection")
			let trackTitle = document.createElement("p")
			trackTitle.setAttribute("class","list-track-title")
			trackTitle.innerHTML = track.title
			let trackProducers = document.createElement("p")
			trackProducers.setAttribute("class","list-track-producers")
			trackProducers.innerHTML = track.producers
			let vibesContainer = document.createElement("div")
			vibesContainer.setAttribute("class","list-vibes-container")
			let trackInstruments = document.createElement("p")
			trackInstruments.setAttribute("class","list-instruments")
			let instruments = track.instruments
			let insString = ""
			for(var x=0; x< instruments.length; x++){
				let ins = instruments[x]
				if(x != 0){					
					insString = `${insString},${ins}`
				}else{
					insString = `${ins}`
				}
			}
			trackInstruments.innerHTML = insString
			
			let commandButtons = document.createElement("div")
			commandButtons.setAttribute("class","list-command-buttons")
			
			let requestChangesBtn = document.createElement("button")
			requestChangesBtn.setAttribute("class","request-changes-btn")
			requestChangesBtn.innerHTML = "Request Changes"
			
			let buySection = document.createElement("div")
			buySection.setAttribute("class","buySection")
			buySection.setAttribute("id","bty")
			
			let beatPrice2 = document.createElement("p")
			beatPrice2.setAttribute("class","beatPrice2")
			beatPrice2.innerHTML = `${track.value} ${track.currency}`
			
			let buyNowBtn2 = document.createElement("button")
			buyNowBtn2.setAttribute("class","buyNowBtn2")
			if(track.freeBeat == false){				
				buyNowBtn2.innerHTML = "Add to Cart"
			}else{
				buyNowBtn2.innerHTML = "Download"
			}
			
			buyNowBtn2.addEventListener("mouseup", ()=>{
				buyNowBtn2.style.background = "none"
				buyNowBtn2.style.color = "black"
			})
			buyNowBtn2.addEventListener("mousedown", ()=>{
				buyNowBtn2.style.background = "black"
				buyNowBtn2.style.color = "white"
			})
			buyNowBtn2.addEventListener("click",()=>{
				if(track.freeBeat == false){					
					let search = shoppingCart.find((shoppingCart)=>{
						return shoppingCart.id === track.id
					})
					if(!search){
						shoppingCart.push(track)
					}
				}else{
					
				}
			})
			
			//Load vibes container 
			let vibes = track.vibes
			for(var x=0; x<vibes.length; x++){
				let vibe = vibes[x]
				let vibeContainer = document.createElement("div")
				vibeContainer.setAttribute("class","vibeInsObj2")
				let vibeDot = document.createElement("div")
				vibeDot.setAttribute("class", "vibeInsRemove2")
				let vibeText = document.createElement("p")
				vibeText.setAttribute("class","vibeInsText2")
				vibeText.innerHTML = vibe
				vibeContainer.appendChild(vibeDot)
				vibeContainer.appendChild(vibeText)
				vibesContainer.appendChild(vibeContainer)
			}
			
			//Assemble the rest of the object 
			artworkHolder.appendChild(artworkImage)
			listObject.appendChild(artworkHolder)
			detailsSection.appendChild(trackTitle)
			detailsSection.appendChild(trackProducers)
			detailsSection.appendChild(vibesContainer)
			detailsSection.appendChild(trackInstruments)
			commandButtons.appendChild(requestChangesBtn)
			detailsSection.appendChild(commandButtons)
			listObject.appendChild(detailsSection)
			buySection.appendChild(beatPrice2)
			buySection.appendChild(buyNowBtn2)
			listObject.appendChild(buySection)
			if(i == tracks.length-1){
				listObject.style["margin-bottom"] = "5%"
			}
			listObject.addEventListener("mouseup",()=>{
				listObject.style["box-shadow"] = "0px 2px 7px black"
			})
			listObject.addEventListener("mousedown",()=>{
				listObject.style["box-shadow"] = "0px 0px 1px black"
			})
			mainListContainer.appendChild(listObject)
		}
		
	}else{
		
		for(var i=0; i<tracks.length; i++){
			
			let track = tracks[i]
			//create list object
			let listObject = document.createElement("div")
			listObject.setAttribute("class","listObject2")
			let artworkHolder = document.createElement("div")
			artworkHolder.setAttribute("class","artworkHolder2")
			let artworkImage = document.createElement("img")
			artworkImage.setAttribute("class","artworkImage")
			let detailsSection = document.createElement("div")
			detailsSection.setAttribute("class","detailsSection2")
			let trackTitle = document.createElement("p")
			trackTitle.setAttribute("class","list-track-title")
			trackTitle.innerHTML = track.title
			let trackProducers = document.createElement("p")
			trackProducers.setAttribute("class","list-track-producers")
			trackProducers.innerHTML = track.producers
			let vibesContainer = document.createElement("div")
			vibesContainer.setAttribute("class","list-vibes-container")
			let trackInstruments = document.createElement("p")
			trackInstruments.setAttribute("class","list-instruments")
			let instruments = track.instruments
			let insString = ""
			for(var x=0; x< instruments.length; x++){
				let ins = instruments[x]
				if(x != 0){					
					insString = `${insString},${ins}`
				}else{
					insString = `${ins}`
				}
			}
			trackInstruments.innerHTML = insString
			let menuBtn = document.createElement("img")
			menuBtn.setAttribute("class","listMenuBtn")
			
			menuBtn.addEventListener("click",()=>{
				if(currentIndex == 1){
					if(customMenuOpen == false){
						openCustomMenu()
						setTimeout(()=>{
							showProducerTrackMenu()							
						},300)
					}else{
						closeCustomMenu()
						setTimeout(()=>{							
							producerTrackMenu,style.display = "none"
							producerTrackMenu.style.opacity = "0"
						},300)
					}
				}
				if(currentIndex == 8){
					if(customMenuOpen == false){
						openCustomMenu()
						setTimeout(()=>{
							showCartMenu()							
						},300)
					}else{
						closeCustomMenu()
						setTimeout(()=>{							
							cartMenu,style.display = "none"
							cartMenu.style.opacity = "0"
						},300)
					}
				}
			})
			
			//Load vibes container 
			let vibes = track.vibes
			for(var x=0; x<vibes.length; x++){
				let vibe = vibes[x]
				let vibeContainer = document.createElement("div")
				vibeContainer.setAttribute("class","vibeInsObj2")
				let vibeDot = document.createElement("div")
				vibeDot.setAttribute("class", "vibeInsRemove2")
				let vibeText = document.createElement("p")
				vibeText.setAttribute("class","vibeInsText2")
				vibeText.innerHTML = vibe
				vibeContainer.appendChild(vibeDot)
				vibeContainer.appendChild(vibeText)
				vibesContainer.appendChild(vibeContainer)
			}
			
			//Assemble the rest of the object 
			artworkHolder.appendChild(artworkImage)
			listObject.appendChild(artworkHolder)
			listObject.appendChild(menuBtn)
			detailsSection.appendChild(trackTitle)
			detailsSection.appendChild(trackProducers)
			detailsSection.appendChild(vibesContainer)
			detailsSection.appendChild(trackInstruments)
			listObject.appendChild(detailsSection)
			if(i == tracks.length-1){
				listObject.style["margin-bottom"] = "5%"
			}
			listObject.addEventListener("mouseup",()=>{
				listObject.style["box-shadow"] = "0px 2px 7px black"
			})
			listObject.addEventListener("mousedown",()=>{
				listObject.style["box-shadow"] = "0px 0px 1px black"
			})
			mainListContainer.appendChild(listObject)
			
		}
		
	}
}


async function loadMainPlaylist(){
	
	try{
		
		let getAllTracks = await fetch("/get-all-tracks")
		let response = await getAllTracks.json()
		let tracks = response.tracks 
		loadTracks(tracks,0,beatListSection)
		
	}catch(error){
		console.log(error)
		alert("Something went wrong. Please reload page")
	}
	
}

function openAboutSection(){
	dialogBackgroundHandler(true)
	setTimeout(()=>{
		aboutUsSection.style.display = "block"
		setTimeout(()=>{
			aboutUsSection.style.opacity = "1"
			setTimeout(()=>{
				aboutUsSection.style["margin-top"] = "3%"
			},100)
		},10)
	},300)
}

function closeAboutSection(){
	
	aboutUsSection.style.opacity = "0"
	setTimeout(()=>{
		aboutUsSection.style["margin-top"] = "300%"
		setTimeout(()=>{
			dialogBackgroundHandler(false)
		},300)
	},100)
	
}

function resetPaymentSelectors(){
	
	mtnBtn.style.background = "none"
	mtnHolder.style.background = "none"
	airtelBtn.style.background = "none"
	airtelHolder.style.background = "none"
	atmBtn.style.background = "none"
	atmHolder.style.background = "none"
	
}

function openTermsConditions(){
	termsAndConditions.style["display"] = "block"
	setTimeout(()=>{		
		dialogBackgroundHandler(true)
		setTimeout(()=>{
			termsAndConditions.style["opacity"] = "1"
			setTimeout(()=>{
				termsAndConditions.style["margin-top"] = "3%"
			},100)
		},300)
	},20)
}

function closeTermsConditions(){
	termsAndConditions.style["opacity"] = "0"
	setTimeout(()=>{
		termsAndConditions.style["margin-top"] = "300%"
		setTimeout(()=>{
			termsAndConditions.style["display"] = "none"
		},300)
	},100)
}

shoppingCartBtn.addEventListener("mouseup", ()=>{
	shoppingCartHolder.style.background = "white"
	shoppingCartBtn.src = "Images/cart_logo_inactive.png"
})

shoppingCartBtn.addEventListener("mousedown", ()=>{
	shoppingCartHolder.style.background = "#b88b45"
	shoppingCartBtn.src = "Images/cart_logo_active.png"
})

shoppingCartBtn.addEventListener("click", ()=>{
	setTimeout(()=>{		
		swapPages(8)
	},300)
})

previousPage.addEventListener("click",()=>{
	swapPages(lastIndex)
})

pSwitch.addEventListener("click",()=>{
	if(producerSignUp == false){
		producerSignUp = true
		setTimeout(()=>{			
			pIndicator.style["color"] = "#b88b45"
			setTimeout(()=>{
				pSwitch.style["background"] = "#b88b45"
				setTimeout(()=>{		
					pActuator.style["margin-left"] = "30px"
				},100)
			},100)
		},30)
	}else{
		producerSignUp = false
		setTimeout(()=>{			
			pIndicator.style["color"] = "grey"
			setTimeout(()=>{
				pSwitch.style["background"] = "grey"
				setTimeout(()=>{		
					pActuator.style["margin-left"] = "0px"
				},100)
			},100)
		},30)
	}
})

agreeSwitch.addEventListener("click",()=>{
	if(tcAgreed == false){
		tcAgreed = true
		setTimeout(()=>{			
			agreeIndicator.style["color"] = "#b88b45"
			setTimeout(()=>{
				agreeSwitch.style["background"] = "#b88b45"
				setTimeout(()=>{		
					agreeActuator.style["margin-left"] = "30px"
				},100)
			},100)
		},30)
	}else{
		tcAgreed = false
		setTimeout(()=>{			
			agreeIndicator.style["color"] = "grey"
			setTimeout(()=>{
				agreeSwitch.style["background"] = "grey"
				setTimeout(()=>{		
					agreeActuator.style["margin-left"] = "0px"
				},100)
			},100)
		},30)
	}
})

freeBeatSwitch.addEventListener("click",()=>{
	if(freeBeatUpload == false){
		freeBeatUpload = true
		setTimeout(()=>{			
			freeBeatIndicator.style["color"] = "#b88b45"
			setTimeout(()=>{
				freeBeatSwitch.style["background"] = "#b88b45"
				setTimeout(()=>{		
					freeBeatActuator.style["margin-left"] = "30px"
				},100)
			},100)
		},30)
	}else{
		freeBeatUpload = false
		setTimeout(()=>{			
			freeBeatIndicator.style["color"] = "grey"
			setTimeout(()=>{
				freeBeatSwitch.style["background"] = "grey"
				setTimeout(()=>{		
					freeBeatActuator.style["margin-left"] = "0px"
				},100)
			},100)
		},30)
	}
})

addStemsSwitch.addEventListener("click",()=>{
	if(addStemsToOrder == false){
		addStemsToOrder = true
		setTimeout(()=>{			
			addStemsIndicator.style["color"] = "#b88b45"
			setTimeout(()=>{
				addStemsSwitch.style["background"] = "#b88b45"
				setTimeout(()=>{		
					addStemsActuator.style["margin-left"] = "30px"
				},100)
			},100)
		},30)
	}else{
		addStemsToOrder = false
		setTimeout(()=>{			
			addStemsIndicator.style["color"] = "grey"
			setTimeout(()=>{
				addStemsSwitch.style["background"] = "grey"
				setTimeout(()=>{		
					addStemsActuator.style["margin-left"] = "0px"
				},100)
			},100)
		},30)
	}
})

processDoneBtn.addEventListener("click", ()=>{
	closeProcessCompleteWindow()
})

closeBtn.addEventListener("click",()=>{
	if(adShown == true && ignoreAdTrackers == false){		
		
		ignoreAdTrackers = true
		adMobSection.style.display = "none"
		admobCountSection.style.display = "none"
		adMobSecondCount.style.display = "none"
		setTimeout(()=>{		
			dialogBackgroundHandler(false)
		},30)
	}else{
		if(paymentDetailsSection.style.display === "block"){
			if(termsAndConditions.style.display === "block"){
				console.log("here")
				termsAndConditions.style["margin-top"] = "300%"
				setTimeout(()=>{
					termsAndConditions.style["opacity"] = "0"
					setTimeout(()=>{
						termsAndConditions.style.display = "none"
					},200)
				},100)
			}else{				
				paymentDetailsSection.style["margin-top"] = "300%"
				setTimeout(()=>{
					paymentDetailsSection.style["opacity"] = "0"
					setTimeout(()=>{
						//dialogBackgroundHandler(false)
					},400)
				},100)
			}
		}else{
			
			if(beatUploadWindow.style.display === "block"){
				beatUploadWindow.style["margin-top"] = "300%"
				setTimeout(()=>{
					beatUploadWindow.style["opacity"] = "0"
					setTimeout(()=>{
						dialogBackgroundHandler(false)
					},400)
				},100)
			}
			if(currencySelectorWindow.style.display === "block"){
				currencySelectorWindow.style["margin-top"] = "300%"
				setTimeout(()=>{
					currencySelectorWindow.style["opacity"] = "0"
					setTimeout(()=>{
						dialogBackgroundHandler(false)
					},400)
				},100)
			}
			if(processCompleteWindow.style.display === "block"){
				processCompleteWindow.style["margin-top"] = "300%"
				setTimeout(()=>{
					processCompleteWindow.style["opacity"] = "0"
					setTimeout(()=>{
						dialogBackgroundHandler(false)
					},400)
				},100)
			}
			if(loginWndow.style.display === "block"){
				loginWndow.style["margin-top"] = "300%"
				setTimeout(()=>{
					loginWndow.style["opacity"] = "0"
					setTimeout(()=>{
						dialogBackgroundHandler(false)
					},400)
				},100)
				
			}
			if(changeCredentialsWindow.style.display === "block"){
				changeCredentialsWindow.style["margin-top"] = "300%"
				setTimeout(()=>{
					changeCredentialsWindow.style["opacity"] = "0"
					setTimeout(()=>{
						dialogBackgroundHandler(false)
					},400)
				},100)
			}
			if(aboutUsSection.style.display === "block"){
				aboutUsSection.style["margin-top"] = "300%"
				setTimeout(()=>{
					aboutUsSection.style["opacity"] = "0"
					setTimeout(()=>{
						dialogBackgroundHandler(false)
					},400)
				},100)
			}
			
		}
		
	}
})

closeAlert.addEventListener("click",closeAlertWindow)
noBtn.addEventListener("click",closePrompt)
menuBtn.addEventListener("mouseup", ()=>{
	menuBtn.src = "Images/menuinactive.png"
})
menuBtn.addEventListener("mousedown", ()=>{
	menuBtn.src = "Images/menuactive.png"
})
prodMenuBtn.addEventListener("mouseup", ()=>{
	menuBtn.src = "Images/menuinactive.png"
})
prodMenuBtn.addEventListener("mousedown", ()=>{
	menuBtn.src = "Images/menuactive.png"
})
menuBtn.addEventListener("click",()=>{
	if(mainMenuOpen == true){
		closeMainMenu()
	}else{
		openMainMenu()
		setTimeout(()=>{			
			if(userData){
				showUserMenu()
			}else{
				showNonUserMenu()
			}
		},300)
	}
})

prodMenuBtn.addEventListener("click",()=>{
	if(mainMenuOpen == true){
		closeMainMenu()
	}else{
		openMainMenu()
		setTimeout(()=>{			
			showProducerMenu()
		},300)
	}
})

clientMenuBtn.addEventListener("click",()=>{
	if(mainMenuOpen == true){
		closeMainMenu()
	}else{
		openMainMenu()
		setTimeout(()=>{			
			showUserMenu()
		},300)
	}
})

//Non User Menu Events 

homeBtnOne.addEventListener("click",()=>{
	swapPages(0)
	setTimeout(()=>{
		closeMainMenu()
	},100)
})
signUpOne.addEventListener("click",()=>{
	signUpMode = true
	openPaymentWindow()
	setTimeout(()=>{		
		paymentSelectorSection.style.display = "none"
		paymentDetailsSection.style.display = "block"
		setTimeout(()=>{		
			paymentSelectorSection.style.opacity = "0"
			paymentDetailsSection.style.opacity = "1"
			setTimeout(()=>{
				closeMainMenu()
			},100)
		},10)
	},300)
})
loginOne.addEventListener("click",()=>{
	openLoginWindow()
	setTimeout(()=>{
		closeMainMenu()
	},100)
})
aboutUsOne.addEventListener("click",()=>{
	openAboutSection()
	setTimeout(()=>{
		closeMainMenu()
	},100)
})



mtnBtn.addEventListener("click",()=>{
	resetPaymentSelectors()
	mtnHolder.style.background = "d2b384"
})
mtnHolder.addEventListener("click",()=>{
	resetPaymentSelectors()
	mtnHolder.style.background = "d2b384"
})
airtelBtn.addEventListener("click",()=>{
	resetPaymentSelectors()
	airtelHolder.style.background = "d2b384"
})
airtelHolder.addEventListener("click",()=>{
	resetPaymentSelectors()
	airtelHolder.style.background = "d2b384"
})
atmBtn.addEventListener("click",()=>{
	resetPaymentSelectors()
	atmHolder.style.background = "d2b384"
})
atmHolder.addEventListener("click",()=>{
	resetPaymentSelectors()
	atmHolder.style.background = "d2b384"
})

countryBtnHolder.addEventListener("click",()=>{
	openCountrySelector()
})
countryBtn.addEventListener("click",()=>{
	openCountrySelector()
})
prefCurrencyDropDown.addEventListener("click",()=>{
	openCurrencySelector()
})
prefCurrencyText.addEventListener("click",()=>{
	openCurrencySelector()
})
tcBtn.addEventListener("click",()=>{
	openTermsConditions()
})



//Window Events

window.addEventListener("load",()=>{
	loadMainPlaylist()
	closeBtn.style.display = "none"
	setInterval(()=>{
		if(seconds > 0){			
			seconds = seconds-1
			adMobSecondCount.innerHTML = `${seconds} seconds`
			if(seconds == 0){
				closeBtn.style.display = "block"
				adShown = true
			}
		}
	},1000)
})

/*
socket.on("ping",()=>{
	if(userData){		
		socket.emit("ping-back",{"userId":userData.userId})
	}
})
*/