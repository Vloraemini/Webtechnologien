window.onload = function buidPage(){
  var iDiv = document.createElement('div');
  iDiv.id = 'main_img';
  iDiv.className = 'main_img autoHoehe repeat';
  var main = document.getElementById('main');
  main.appendChild(iDiv);

  // Create Centerblock and append to iDiv
  var innerDiv = document.createElement('div');
  innerDiv.className = 'centerblock wide autoHoehe';
  innerDiv.id='centerblock';
  iDiv.appendChild(innerDiv);

  addFilterElementsToPage();

  // Create auto and append to iDiv
  var carsListDiv = document.createElement('div');
  carsListDiv.id='carsList';
  carsListDiv.className = 'carsList';
  innerDiv.appendChild(carsListDiv);



  buildDivHeader();


  buildDivInPage(carList);

  var buttonPriceInContainer = document.getElementById('buttonPriceInContainer');
  buttonPriceInContainer.setAttribute('onclick','filterPrice()');
  var buttonCityInContainer = document.getElementById('buttonCityInContainer');
  buttonCityInContainer.setAttribute('onclick','filterCity()');

  var buttonResetInContainer = document.getElementById('buttonResetInContainer');
  buttonResetInContainer.setAttribute('onclick','filterReset()');

}



function buildDivInPage(carList){

  for (var i = 0; i < carList.length; i++) {
    var auto = carList[i];
    if(ortValue === undefined || ortValue.length === 0){
      createDivElements(auto, "");
    }else{
      if(ortValue != auto.ort){
        continue;
      }else {
        createDivElements(auto, ortValue);
      }
    }
  }
}

function createDivElements(car, city){
  var carsListDiv = document.getElementById('carsList');
  var filename = createNameForFile(car.modell);

  // Create auto and append to iDiv
  var carDiv = document.createElement('div');
  carDiv.className = 'car';
  carDiv.id = "car"+i;

  var formDiv = document.createElement('form');
  formDiv.action ='AutoVorlage.html';

  // Load Picture from Folder
  var img=document.createElement("img");
  img.src="../images/"+ filename +"_298x199.jpg";
  img.id="picture"+i;
  img.className="picture";
  img.width=75;
  img.height=50;

  // Create Div for picture
  var carPicDiv = document.createElement('div');
  carPicDiv.className = 'carType';
  carPicDiv.appendChild(img);
  formDiv.appendChild(carPicDiv);

  // Create Div for Modell
  var carModellDiv = document.createElement('div');
  carModellDiv.className = 'carType';
  carModellDiv.id = "modellID"+i;
  carModellDiv.innerHTML = car.modell;
  formDiv.appendChild(carModellDiv);

  // Create Div for Price
  var carPriceDiv = document.createElement('div');
  carPriceDiv.className = 'carType';
  carPriceDiv.id = "priceID"+i;
  carPriceDiv.innerHTML = car.preis+" €/Tag";
  formDiv.appendChild(carPriceDiv);

  // Create Div for Fuel
  var carFuelDiv = document.createElement('div');
  carFuelDiv.className = 'carType';
  carFuelDiv.id = "fuelID"+i;
  carFuelDiv.innerHTML = car.kraftstoff;
  formDiv.appendChild(carFuelDiv);

  // Create Div for Seats
  var carSeatsDiv = document.createElement('div');
  carSeatsDiv.className = 'carType';
  carSeatsDiv.id = "seatID"+i;
  carSeatsDiv.innerHTML = car.sitzeplatze;
  formDiv.appendChild(carSeatsDiv);

  // Create Div for Seats
  var carCityDiv = document.createElement('div');
  carCityDiv.className = 'carType';
  carCityDiv.id = "cityID"+i;

  if(city.length === 0){
    carCityDiv.innerHTML = car.ort;
  }else{
    carCityDiv.innerHTML = city;
  }

  formDiv.appendChild(carCityDiv);

  // <input type="hidden" id="custId" name="custId" value="3487">
  var inputHideDiv = document.createElement('input');
  inputHideDiv.setAttribute('type','hidden');
  inputHideDiv.setAttribute('id','Test');
  inputHideDiv.setAttribute('name','auto');
  var data = getCarData(car);
  inputHideDiv.setAttribute('value',data);
  formDiv.appendChild(inputHideDiv);
  var carButtonDiv = document.createElement('input');
  // carButtonDiv.className = 'carType auswahlButton';


  carButtonDiv.setAttribute('type','submit');
  // carButtonDiv.setAttribute('name','carCityDiv.id');
  carButtonDiv.setAttribute('value','Auswählen');

  // carButtonDiv.setAttribute('onclick','foo(name)');
  // carButtonDiv.innerHTML ="Auswählen" ;

  formDiv.appendChild(carButtonDiv);

  carDiv.appendChild(formDiv);
  // carDiv.appendChild(carButtonDiv);

  carsListDiv.appendChild(carDiv);
}


function buildDivHeader(){
  var carsListDiv = document.getElementById('carsList');
  var carDiv = document.createElement('div');
  carDiv.className = 'carHeader';
  var carPicDiv = document.createElement('div');
  carPicDiv.className = 'carType';

  carDiv.appendChild(carPicDiv);

  // Create Div for Modell
  var carModellDiv = document.createElement('div');
  carModellDiv.className = 'carType';
  carModellDiv.innerHTML = "Modell";
  carDiv.appendChild(carModellDiv);

  // Create Div for Price
  var carPriceDiv = document.createElement('div');
  carPriceDiv.className = 'carType';
  carPriceDiv.innerHTML = "Preis";
  carDiv.appendChild(carPriceDiv);

  // Create Div for Fuel
  var carFuelDiv = document.createElement('div');
  carFuelDiv.className = 'carType';
  carFuelDiv.innerHTML = "Kraftstoff";
  carDiv.appendChild(carFuelDiv);

  // Create Div for Seats
  var carSeatsDiv = document.createElement('div');
  carSeatsDiv.className = 'carType';
  carSeatsDiv.innerHTML = "Sitzplätze";
  carDiv.appendChild(carSeatsDiv);

  // Create Div for Seats
  var carCityDiv = document.createElement('div');
  carCityDiv.className = 'carType';
  carCityDiv.innerHTML = "Standort";
  carDiv.appendChild(carCityDiv);

  var carButtonDiv = document.createElement('div');
  carButtonDiv.className = 'carType';


  carDiv.appendChild(carButtonDiv);

  carsListDiv.appendChild(carDiv);
}

function addFilterElementsToPage(){
  var centerblockDiv = document.getElementById('centerblock');
  var buttonContainerDiv = document.createElement('div');
  buttonContainerDiv.setAttribute('id','filterContainer');

  var labelContainerDiv =  document.createElement('p');
  labelContainerDiv.innerHTML ="Nach Preis filtern: ";

  var inputContainerDiv = document.createElement('input');

  inputContainerDiv.id='priceInput';
  inputContainerDiv.type='number';
  inputContainerDiv.value ='50';
  inputContainerDiv.min ='50';
  inputContainerDiv.max ='150';

  var buttonPriceDiv = document.createElement('button');
  buttonPriceDiv.setAttribute('class','button active');
  buttonPriceDiv.setAttribute('id','buttonPriceInContainer');
  buttonPriceDiv.setAttribute('value','Test');

  buttonPriceDiv.innerHTML="Preis filtern";

  labelContainerDiv.appendChild(inputContainerDiv);
  labelContainerDiv.appendChild(buttonPriceDiv);
//----
  var labelCityContainerDiv =  document.createElement('p');
  labelCityContainerDiv.innerHTML ="Nach Ort filtern: ";

  var inputCityContainerDiv = document.createElement('input');
  inputCityContainerDiv.class='cityInput';
  inputCityContainerDiv.id='cityInput';
  inputCityContainerDiv.type = 'text';

  var buttonCityDiv = document.createElement('button');
  buttonCityDiv.setAttribute('class','button active');
  buttonCityDiv.setAttribute('id','buttonCityInContainer');
  buttonCityDiv.setAttribute('value','Test');

  buttonCityDiv.innerHTML="Ort filtern";

  labelCityContainerDiv.appendChild(inputCityContainerDiv);
  labelCityContainerDiv.appendChild(buttonCityDiv);
//-------------
  var labelResetContainerDiv =  document.createElement('p');
  labelResetContainerDiv.innerHTML ="Filter zurücksetzen:";

  var buttonResetDiv = document.createElement('button');
  buttonResetDiv.setAttribute('class','button active');
  buttonResetDiv.setAttribute('id','buttonResetInContainer');
  buttonResetDiv.innerHTML="Reset";

  labelResetContainerDiv.appendChild(buttonResetDiv);

  buttonContainerDiv.appendChild(labelContainerDiv);
  buttonContainerDiv.appendChild(labelCityContainerDiv);
  buttonContainerDiv.appendChild(labelResetContainerDiv);

  centerblockDiv.appendChild(buttonContainerDiv);

}

var city = ["Berlin","Hamburg","München","Köln","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Bremen","Dresden","Leipzig"];
var ortValue = getUrlVars()["ort"];
// Liste der Automodelle
var cars = ["Mazda CX 3", "Mazda CX 5", "Smart for 2", "Smart for 4",
"Bmw i3", "Bmw X3", "Audi A1", "Audi Q2", "Nissan Qashqai",
"Peugeot 108", "Seat Leon","VW-Tiguan", "Ford Kuga",
"Kia Niro", "Kia Rio" ];

var carList = buildCars();

function buildCars(standort){

  var autoListe = new Array();
  var anzahlAutos = 30;
  for (var i = 0; i < anzahlAutos; i++) {
    var preis = Math.floor(Math.random() * 100)+50;
    var sitze = Math.floor(Math.random() * 3)+2;
    var modell= cars[Math.floor(Math.random() * cars.length)];
    var kraftstoff = (Math.floor(Math.random()*i) % 2 == 0)? "Benzin": "Diesel";

    var ort =city[Math.floor(Math.random() * city.length)];

    var auto = new Auto(modell,preis,kraftstoff,sitze,ort);
    autoListe.push(auto);
  }
  return autoListe;

}

function getCarData(car){
  // var name = createNameForFile(car.modell);
  var carData = car.modell+"_"+car.preis+"_"+car.kraftstoff+"_"+car.sitzeplatze+"_"+car.ort;
  return carData;
}

function createNameForFile(modell){
  modell = modell.toLowerCase();
  var words = modell.split(' ');
  var filename="";
  for (var i = 0; i < words.length; i++) {
    if(i< words.length-1){
      filename +=words[i]+"_";
    }else{
      filename +=words[i];
    }
  }

  return filename;
}
function filterSelection(filterValue){
  console.log("Das ist die Ausgabe:");
  console.log(filterValue);
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

function filterPrice(){
  clearpage();

  var newCarList = new Array();
  var filterprice = document.getElementById("priceInput").value;
  console.log("erste Liste: "+carList.length);
  for (var i = 0; i < carList.length; i++) {
    var car = carList[i];
    console.log(car);
    if(car.preis <= filterprice){
      newCarList.push(car);
    }
  }
  console.log("Neue Liste:"+newCarList.length);
  buildDivInPage(newCarList);

}

function filterCity(){
  clearpage();

  var newCarList = new Array();
  var filterCity = document.getElementById("cityInput").value;

  for (var i = 0; i < carList.length; i++) {
    var car = carList[i];
    if(car.ort === filterCity){
      newCarList.push(car);
    }
  }
  console.log("Neue Liste:"+newCarList.length);
  buildDivInPage(newCarList);

}

function filterReset(){
  clearpage();

  buildDivInPage(carList);

}

function clearpage(){

  var list = document.getElementById("carsList");
   while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
   }
   console.log("Clear ist fertig");

}
