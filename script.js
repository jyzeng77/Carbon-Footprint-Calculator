/* Variables */
var slideNumber = 0;
var inputList = [];
var fuel;

// Init 
const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));
const buttonRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-button'));

const radio = new mdc.radio.MDCRadio(document.querySelector('.mdc-radio'));
const radio_gas = new mdc.radio.MDCRadio(document.querySelectorAll('[name="fuel"]')[0].parentElement);
const formField = new mdc.formField.MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = radio;

// Element Shorthands\
const interfaceElems = document.getElementsByClassName('interface');

const header = getElem("header");
const subtitle = getElem("subtitle");

const image = getElem('image');

const radio_container = getElem('radio-container');
const input_container = getElem('input-container');
const input = getElem('input');
const input_label = getElem('input-label');

const nextButton = getElem('next-button');

const results_container = getElem('results');
const results_bigNum = getElem('results-emissions-mth');
const results_offset = getElem('trees');

/* Slide progression */

// Calls the relevant slide maker, saves 
// input, and increases slide number
function nextSlide(){
  if (nextButton.innerText == "Next"){
    console.log("Next button pressed");
  }else if (nextButton.innerText == "Submit"){
    console.log("Submitted");
  }

  if (slideNumber == 0){
    console.log('Start button pressed');
    slide_electricity();
  }

  if (slideNumber == 1){
    slide_groundTrans();
  }

  if (slideNumber == 2){
    fuel = getSelectedFuel();
    console.log("selected "+fuel);
    slide_airTrans();
  }

  if (slideNumber == 3){
    slide_clothing();
  }

  if (slideNumber == 4){
    slide_furniture();
  }

  saveInput();
  slideNumber ++;
  console.log("Current Slide: " + slideNumber);

  if (slideNumber == 6){
    slide_results();
  }

}

// Slide makers
function slide_electricity(){
  input_container.style.display = "flex";
  nextButton.innerText = 'Next';
  // Source: https://www.publicdomainpictures.net/en/view-image.php?image=5791&picture=three-wind-turbines
  image.style.backgroundImage = 'url(https://www.publicdomainpictures.net/pictures/10000/velka/87-12681332789SQ8.jpg)';

  setUIText("1. Electricity Usage", "How much electricity do you use each month, in kilowatt hours (kWh)?", "Monthly Average", "kWh", "This info can be found on your electricity bill.");
}

function slide_groundTrans(){
  inputList = [];
  // Source: https://www.publicdomainpictures.net/en/view-image.php?image=195902&picture=cars-in-a-rush-hour
  image.style.backgroundImage = 'url(https://www.publicdomainpictures.net/pictures/200000/velka/cars-in-a-rush-hour-1476873340nHb.jpg)';
  
  setUIText("2. Ground Transportation", "How many gallons of fuel do you burn every week for car trips?", "Gallons of Fuel", "gal", 'If you use an electric vehicle, press "Next".');
  radio_container.style.display = "block";
}

function slide_airTrans(){
  radio_container.style.display = "none";
  // Source: https://www.publicdomainpictures.net/en/view-image.php?image=28573&picture=jet-airplane
  image.style.backgroundImage = 'url(https://www.publicdomainpictures.net/pictures/30000/velka/jet-airplane-1354425690D11.jpg)';
  
  setUIText("3. Air Transportation", "How many passenger miles did you travel this year?", "Passenger Miles", "mi", "Passenger miles are how many miles you've flown on an airplane.");
}

function slide_clothing(){
  setUIText("4. Clothing and Fashion", "How much clothing did you buy this month, in USD?", "Money Spent", ".00", "Enter the amount in US Dollars.");
  // Source: https://www.pexels.com/@kaip
  image.style.backgroundImage = 'url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';

  textField.prefixText = "US$";
}

function slide_furniture(){
  setUIText("5. Home Furnishings", "How much furniture did you buy this year, in USD?", "Money Spent", ".00", "Enter the amount in US Dollars.");
  // Source: https://www.pexels.com/@martinpechy
  image.style.backgroundImage = 'url(https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)';
  nextButton.innerText = "Submit";
}

function slide_results(){
  console.log("cal "+calculate());
  hideUI();
  results.style.display = "block";
  results_bigNum.innerText = calculate();
  // avg tree offsets 22 pounds of carbon emissions
  results_offset.innerText = round(calculate()/22);
}

/* Visuals and Backend */
function setUIText(headr, subt, label, suffix, helper){
  header.innerText = headr;
  subtitle.innerText = subt;

  input_label.innerText = label;
  textField.suffixText = suffix;
  textField.helperTextContent = helper;
}

function hideUI(){
  for (let el in interfaceElems){
    try{
      interfaceElems[el].style.display = 'none';
    }catch{
      console.log("TypeError occured while hiding UI.");
    }
  }
}

function getSelectedFuel(){
  if (radio_gas.checked){
    return 'g';
  }else{
    return 'd';
  }
}

function saveInput(){
  if (textField.value == ''){
    inputList.push(0);
  }else{
    inputList.push(textField.value);
  }
  console.log(inputList);
  textField.value = NaN;
}

function round(num) {
  // https://www.delftstack.com/howto/javascript/javascript-round-to-2-decimal-places/ tysm >.<
  var m = Number((Math.abs(num) * 100).toPrecision(15));
   return Math.round(m) / 100 * Math.sign(num);
}

function getElem(id){
  return document.getElementById(id);
}

function calculate(){
  let kwh = parseInt(inputList[0]);        //
  let gas = parseInt(inputList[1]);        //
  if (fuel == "g"){                        // Multiply fuelCbnEmss by 30
    var fuelCbnEmss = 19.6*gas;            // over 7 and round the answer
  }else{                                   // to get monthly
    var fuelCbnEmss = 22.4*gas;            // 1 metric ton = abt 2204.62
  }                                        // pounds
  let pmi = parseInt(inputList[2]);        // 
  let clth = parseInt(inputList[3]);       // Multiply by 0.5 over 12 to
  let fntr = parseInt(inputList[4]);       // get monthly

  console.log("kwh "+kwh*0.889);
  console.log("fuel "+fuelCbnEmss*30/7);
  console.log("pmi "+pmi*0.39);
  // (clth/100*0.5*2204.62)/12 = 11.0231clth = abt 11.02clth
  console.log("clth "+(clth/100*0.5*2204.62)/12);
  // (fntr/1000*2000)/12 = 1/6fntr = abt 0.17fntr
  console.log("fntr "+(fntr/1000*2000)/12);
  //return kwh*0.89 + fuelCbnEmss*4.29 + pmi*0.39 + 11.02*clth + fntr*0.17;
  return round((kwh*0.889) + (fuelCbnEmss*30/7) + (pmi*0.39) + ((clth/100*0.5*2204.62)/12) + ((fntr/1000*2000)/12));
}
