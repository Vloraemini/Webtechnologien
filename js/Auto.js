class Auto {

  constructor(modell, preis, kraftstoff, sitzeplatze, ort) {
    this.modell = modell;
    this.preis = preis;
    this.kraftstoff = kraftstoff;
    this.sitzeplatze = sitzeplatze;
    this.ort = ort;
  }

  toString() {
    return this.modell + " "+ this.preis+" "+ this.kraftstoff+" "+this.sitzeplatze+" "+this.ort;
  }

}
