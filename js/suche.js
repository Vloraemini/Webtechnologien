
function suchen() {
  var x = document.forms["frm1"];
  var text = "";
  var i;
  var j;
  var cars = ["Saab", "Volvo", "BMW", "Audi"];
  for (i = 0; i < x.length ;i++) {
    for (j = 0; j < cars.length ;j++) {

    if(x.elements[i].value == cars[j] ){
    text +=x.elements[i].value  + "<br>";
    }
  }
  }
  document.getElementById("demo").innerHTML = text;
}

function auflisten() {
  var x = document.forms["frm1"];
  var text = "";
  var i;
  var cars = ["Saab", "Volvo", "BMW", "Audi"];
  for (i = 0; i < cars.length ;i++) {
    text +=cars[i]  + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

function Auto(marke, preis, verbrauch, farbe, kmStand){
  this.marke = marke;
  this.preis = preis;
  this.verbrauch = verbrauch;
  this.farbe = farbe;
  this.kmStand = kmStand;

  this.showInfo = function(){
    document.write("Automarke: "+this.marke+" Preis: "+ this.preis+" Verbrauch: "+ this.verbrauch +"l Farbe: "+this.farbe);
    document.innerHTML = text;
  }
}
opel = new Auto("Opel", 80, 6,  "rot", 70000);
opel.showInfo();
