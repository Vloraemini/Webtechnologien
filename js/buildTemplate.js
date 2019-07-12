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
  buildDivInPage();




}
var car = getUrlVars()["auto"];

function buildDivInPage(carList){
  var centerblockDiv = document.getElementById('centerblock');

  var carDiv = document.createElement('div');
  carDiv.className = 'car';
  carDiv.id='car';


  var carPicDiv = document.createElement('div');
  carPicDiv.className = 'carType';
  carPicDiv.id='carType';
  var carData = car.split('_');
  carData[0] = carData[0].split('+').join(' ');
  // for (var i = 0; i < carData.length; i++) {
  //   console.log(carData[i]);
  // }
  var filename = createNameForFile(carData[0]);
  // Load Picture from Folder
  var img=document.createElement("img");
  img.src="../images/"+ filename +"_298x199.jpg";
  img.id="picture"+i;
  img.className="picture";
  img.width=350;
  // img.height=50;
  carPicDiv.appendChild(img);
  carDiv.appendChild(carPicDiv);

  var carInfoDiv = document.createElement('div');
  carInfoDiv.className = 'carInfo';
  carInfoDiv.id='carInfo';


  var carModellDiv = document.createElement('p');
  carModellDiv.className = 'carInfoParagraph';
  carModellDiv.innerHTML = "<p><b>Modell: </b>"+carData[0]+"</p>";

  var carFuelDiv = document.createElement('p');
  carFuelDiv.className = 'carInfoParagraph';
  var verbrauch = Math.floor(((Math.random()*10.0)+2.0)*100)/100;
  carFuelDiv.innerHTML = "<p><b>Kraftstoff: </b> "+carData[2]+"</p><p><b>Verbrauch in l/km:  </b>" + verbrauch+ "</p>";

  var carSeatsDiv = document.createElement('p');
  carSeatsDiv.className = 'carInfoParagraph';
  carSeatsDiv.innerHTML = "<p><b>Sitze: </b>"+carData[3]+"</p>";

  var carCityDiv = document.createElement('p');
  carCityDiv.className = 'carInfoParagraph';
  carCityDiv.innerHTML = "<p><b>Standort: </b> Das Auto befindet sich am folgenden Standort: "+carData[4]+"</p>";

  var carPriceDiv = document.createElement('p');
  carPriceDiv.className = 'carInfoParagraph';
  carPriceDiv.innerHTML = "<p><b>Preis: </b> Der Mietpreis für das Auto beträgt täglich: "+carData[1]+" €</p>";


  var carMietenDiv = document.createElement('button');
  carMietenDiv.className = 'button mieten';
  carMietenDiv.setAttribute('onclick', 'mieten()');
  carMietenDiv.innerHTML = "Jetzt Mieten";


  carInfoDiv.appendChild(carModellDiv);
  carInfoDiv.appendChild(carFuelDiv);
  carInfoDiv.appendChild(carSeatsDiv);
  carInfoDiv.appendChild(carCityDiv);
  carInfoDiv.appendChild(carPriceDiv);
  carInfoDiv.appendChild(carMietenDiv);

  carDiv.appendChild(carInfoDiv);
  centerblockDiv.appendChild(carDiv);
}

function mieten(){
  alert("Das Auto wurde angemietet!");
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

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}
