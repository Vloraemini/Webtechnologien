

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

// var number = getUrlVars()["fname"];
// var mytext = getUrlVars()["lname"];
// console.log(number + " "+ mytext);

var i=0;

var cars = ["Mazda CX 3", "Mazda CX 5", "Smart for 2", "Smart for 4",
"Bmw i3", "Bmw X3", "Audi A1", "Audi Q2", "Nissan Qashqai",
"Peugeot 108", "Seat Leon","VW-Tiguan", "Ford Kuga",
"Kia Niro", "Kia Rio" ];

var carsFilename = ["mazda_cx3", "mazda_cx5", "smart_fortwo", "Smart_forfour",
"bmw_i3", "bmw_x3", "audi_a1", "audi_q2", "nissan_qashqai",
"peugeot_108", "seat_leon","vw_tiguan", "ford_kuga",
"kia_niro", "kia_rio" ];

function auflisten() {
  var autoListe = new Array();
  var anzahlAutos = cars.length;

  var divModell = document.getElementById("automodell");

  var divModell = document.getElementById("modell");
  var divPreise = document.getElementById("preise");
  var divKraftstoff = document.getElementById("kraftstoff");
  var divSitze = document.getElementById("sitze");

  divModell.innerHTML +="</br>";
  divPreise.innerHTML +="</br>";
  divKraftstoff.innerHTML +="</br>";
  divSitze.innerHTML +="</br>";








  for (var i = 0; i < anzahlAutos; i++) {
    var preis = Math.floor(Math.random() * 100)+50;
    var sitze = Math.floor(Math.random() * 3)+2;
    // var modellIndex = Math.floor(Math.random() * cars.length);

    var modell= cars[i];
    var kraftstoff = (Math.floor(Math.random()*i) % 2 == 0)? "Benzin": "Diesel";
    var auto = new Auto(modell,preis,kraftstoff,sitze);
    console.log(auto.toString());
    var text =auto;
    // var divImg=document.createElement("div");
    // divImg.id="autoBild";
    // divImg.innerHTML +="TESTTEST";
    //
    //
    // var test = document.getElementById("auto");
    //
    // test.appendChild(divImg);


    var img=document.createElement("img");
    img.src="../images/"+ carsFilename[i] +"_298x199.jpg";
    img.id="picture"+i;
    img.width=75;
    img.height=50;

    var foo = document.getElementById("bild");

    foo.appendChild(img);

    // divModell.innerHTML +=modell;
    // divPreise.innerHTML +=''+preis;
    // divKraftstoff.innerHTML +=kraftstoff;
    // divSitze.innerHTML +=sitze;

    divModell.innerHTML +=modell+"</br></br>";
    divPreise.innerHTML +=preis +"</br></br>";
    divKraftstoff.innerHTML +=kraftstoff +"</br></br>";
    divSitze.innerHTML +=sitze +"</br></br>";

    // var node = document.createElement("LI");                 // Create a <li> node
    // var textnode = document.createTextNode(text);         // Create a text node
    // node.appendChild(textnode);                              // Append the text to <li>
    // document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
  }
}
function ausgabe() {
  var lists = document.getElementsByTagName("ul");
  for (var i = 0; i < lists.length; ++i) {
    // filter so that only lists with the class "foo" are counted
    if (/(^|\\s)auflisten(\\s|$)/.test(lists[i].className)) {
      var items = lists[i].getElementsByTagName("li");
      for (var j = 0; j < items.length; ++j) {
        console.log(items[j]);
      }
    }
  }

}

function image()
{
  //dynamically add an image and set its attribute
  var img=document.createElement("img");
  img.src="p1.jpg"
  img.id="picture"
  var foo = document.getElementById("fooBar");
  foo.appendChild(img);
}

function dosomething(element) {
  console.log(element.value);
}
