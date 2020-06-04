var btn = document.getElementById("calculate");

// OUTPUT
var ntm = document.getElementById("ntm");
var kmbm = document.getElementById("kmbm");
var ee = document.getElementById("ee");
var ree = document.getElementById("ree");
var upendt = document.getElementById("upendt");
var pdke = document.getElementById("pdke");
var ppne = document.getElementById("ppne");

// INPUT

var masa = document.getElementById("masa");
var tkivo = document.getElementById("tkivo");
var faktor = document.getElementById("faktor");
var termicki = document.getElementById("termicki");
var trajanje = document.getElementById("trajanje");
var ravnoteza = document.getElementById("ravnoteza");
var dani = document.getElementById("dani");

var inputs = document.getElementsByTagName("input");

const validate = () => {
  if ([...inputs].some((element) => element.value === "")) {
    alert("Molimo vas popunite sva polja");
    return false;
  }

  if ([...inputs].some((element) => element.value < 0)) {
    alert("Polja ne smiju sadržavati negativne vrijednosti");
    return false;
  }

  if (tkivo.value > 100) {
    alert("Postotak masnog tkiva ne može biti veći od 100%");
    return false;
  }

  if (dani.value > 7) {
    alert("Broj na treninga u tjednu ne može biti veći od 7");
    return false;
  }

  return true;
};

btn.onclick = function () {
  if (validate()) {
    ntm.innerHTML = (masa.value * (1 - tkivo.value / 100)).toFixed(1);

    kmbm.innerHTML = (
      370 +
      21.6 * (masa.value * (1 - tkivo.value / 100))
    ).toFixed(1);

    ee.innerHTML = (0.1 * trajanje.value * masa.value).toFixed(1);

    ree.innerHTML = (
      parseFloat(kmbm.innerHTML) *
      faktor.value *
      termicki.value
    ).toFixed(1);

    upendt.innerHTML = (
      (parseFloat(kmbm.innerHTML) * faktor.value + parseFloat(ee.innerHTML)) *
      termicki.value
    ).toFixed(1);

    pdke.innerHTML = (
      (dani.value * parseFloat(upendt.innerHTML) +
        (7 - dani.value) * parseFloat(ree.innerHTML)) /
      7
    ).toFixed(1);

    ppne.innerHTML = (parseFloat(pdke.innerHTML) * ravnoteza.value).toFixed(1);
  }
};
