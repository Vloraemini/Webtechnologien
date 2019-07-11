window.onload = function buidPage(){
  var iDiv = document.createElement('div');
  iDiv.id = 'main_img';
  iDiv.className = 'main_img autoHoehe repeat';
  document.getElementsByTagName('body')[0].appendChild(iDiv);

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
  var carList = buildCars();
  // for (var i = 0; i < carList.length; i++) {
  //   var auto = carList[i];
  //   if (myVar != null) {...}
  // }
  buildDivInPage(carList);
}


var city = ["Berlin","Hamburg","München","Köln","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Bremen","Dresden","Leipzig"];

// Liste der Automodelle
var cars = ["Mazda CX 3", "Mazda CX 5", "Smart fortwo", "Smart for four",
"Bmw i3", "Bmw X 3", "Audi A1", "Audi Q2", "Nissan Qashqai",
"Peugeot 108", "Seat Leon","VW-Tiguan", "Ford Kuga",
"Kia Niro", "Kia Rio" ];

// // Liste der Automodelle für die ein Bild existiert
// var carsFilename = ["mazda_cx_3", "mazda_cx_5", "smart_for_two", "Smart_for_four",
// "bmw_i3", "bmw_x3", "audi_a1", "audi_q2", "nissan_qashqai",
// "peugeot_108", "seat_leon","vw_tiguan", "ford_kuga",
// "kia_niro", "kia_rio" ];

function buildCars(standort){

  var autoListe = new Array();
  var anzahlAutos = cars.length;
  for (var i = 0; i < anzahlAutos; i++) {
    var preis = Math.floor(Math.random() * 100)+50;
    var sitze = Math.floor(Math.random() * 3)+2;
    // var modellIndex = Math.floor(Math.random() * cars.length);

    var modell= cars[i];
    var kraftstoff = (Math.floor(Math.random()*i) % 2 == 0)? "Benzin": "Diesel";
    var ort= city[Math.floor(Math.random() * city.length)];
    var auto = new Auto(modell,preis,kraftstoff,sitze,ort);
    // console.log(auto.toString());
    // console.log(auto.preis);
    autoListe.push(auto);
  }
  return autoListe;

}

function buildDivInPage(carList){
  var carsListDiv = document.getElementById('carsList');
  for (var i = 0; i < carList.length; i++) {
    var auto = carList[i];
    // console.log(auto.modell);
    var filename = createNameForFile(auto.modell);
    console.log(filename);
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
    carModellDiv.innerHTML = auto.modell;
    formDiv.appendChild(carModellDiv);

    // Create Div for Price
    var carPriceDiv = document.createElement('div');
    carPriceDiv.className = 'carType';
    carPriceDiv.id = "priceID"+i;
    carPriceDiv.innerHTML = auto.preis+" €/Tag";
    formDiv.appendChild(carPriceDiv);

    // Create Div for Fuel
    var carFuelDiv = document.createElement('div');
    carFuelDiv.className = 'carType';
    carFuelDiv.id = "fuelID"+i;
    carFuelDiv.innerHTML = auto.kraftstoff;
    formDiv.appendChild(carFuelDiv);

    // Create Div for Seats
    var carSeatsDiv = document.createElement('div');
    carSeatsDiv.className = 'carType';
    carSeatsDiv.id = "seatID"+i;
    carSeatsDiv.innerHTML = auto.sitzeplatze;
    formDiv.appendChild(carSeatsDiv);

    // Create Div for Seats
    var carCityDiv = document.createElement('div');
    carCityDiv.className = 'carType';
    carCityDiv.id = "cityID"+i;
    carCityDiv.innerHTML = auto.ort;
    formDiv.appendChild(carCityDiv);

    var carButtonDiv = document.createElement('button');
    carButtonDiv.className = 'carType auswahlButton';
    var id = "submitID"+i;
    carButtonDiv.id = id;
    carButtonDiv.setAttribute('onclick','foo(id)');
    carButtonDiv.innerHTML ="Auswählen" ;

    formDiv.appendChild(carButtonDiv);

    carDiv.appendChild(formDiv);
    // carDiv.appendChild(carButtonDiv);

    carsListDiv.appendChild(carDiv);
  }
}

var foo = function(id){
  console.log(id);
  // var button = document.createElement('button');
  // button.innerHTML = 'click me';
  // button.onclick = function(){
  //   alert('here be dragons');return false;
  // };
  // // where do we want to have the button to appear?
  // // you can append it to another element just by doing something like
  // // document.getElementById('foobutton').appendChild(button);
  // document.body.appendChild(button);
};


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
  buttonContainerDiv.setAttribute('id','buttonContainer');

  var filterCityDiv = document.createElement('button');
  filterCityDiv.setAttribute('class','button active');
  filterCityDiv.setAttribute('id','buttonContainer');
  filterCityDiv.setAttribute('value','Test');
  var filterValue="Berlin";
  filterCityDiv.innerHTML="Standort";
  filterCityDiv.onclick = function() { filterSelection(filterValue); };

  // filterCityDiv.setAttribute('onclick',"filterSelection("+filterValue + ")");

  buttonContainerDiv.appendChild(filterCityDiv);
  centerblockDiv.appendChild(buttonContainerDiv);
  // carButtonDiv.onclick='"filterSelection('all')"';
  //
  // var buttonnode= document.createElement('input');
  // buttonnode.setAttribute('type','button');
  // buttonnode.setAttribute('name','sal');
  // buttonnode.setAttribute('value','sal');
  //
  // carDiv.appendChild(carButtonDiv);
  //
  // carDiv.appendChild(carCityDiv);
  // <div id="myBtnContainer">
  // <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  // <button class="btn" onclick="filterSelection('cars')"> Cars</button>
  // <button class="btn" onclick="filterSelection('animals')"> Animals</button>
  // <button class="btn" onclick="filterSelection('fruits')"> Fruits</button>
  // <button class="btn" onclick="filterSelection('colors')"> Colors</button>
  // </div>

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
