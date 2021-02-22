var fisuLista;
var curId;
var numFisut;
var curMode;
var checkDone;
var edellinenArvaus;
var prevCurId;
var newMode;

document.body.onload = alusta();

function alusta() {
  newMode = 102;
  curMode = 101
  console.log("FUNC: alusta()");
  fisuLista = new Array({
    nimi: "kirjolohi",
    url: "http://www.luontoportti.com/suomi/images/11088.jpg"
  }, {
    nimi: "ruutana",
    url: "http://www.luontoportti.com/suomi/images/10262.jpg"
  }, {
    nimi: "lahna",
    url: "http://www.luontoportti.com/suomi/images/10235.jpg"
  }, {
    nimi: "kiiski",
    url: "https://www.luontoportti.com/suomi/images/10224.jpg"
  }, {
    nimi: "kuha",
    url: "https://www.luontoportti.com/suomi/images/10236.jpg"
  }, {
    nimi: "hauki",
    url: "https://www.luontoportti.com/suomi/images/10218.jpg"
  }, {
    nimi: "siika",
    url: "https://www.luontoportti.com/suomi/images/10269.jpg"
  }, {
    nimi: "taimen",
    url: "https://www.luontoportti.com/suomi/images/10277.jpg"
  }, {
    nimi: "ahven",
    url: "https://www.luontoportti.com/suomi/images/10205.jpg"
  }, {
    nimi: "purotaimen",
    url: "http://kala-kassu.net/kuvat/lajikuvat/Purotaimen.jpg"
  }, {
    nimi: "lohi",
    url: "http://kala-kassu.net/kuvat/lajikuvat/Lohi.jpg"
  }, {
    nimi: "made",
    url: "https://www.luontoportti.com/suomi/images/10242.jpg"
  }, {
    nimi: "särki",
    url: "https://www.luontoportti.com/suomi/images/10259.jpg"
  }, {
    nimi: "salakka",
    url: "http://www.luontoportti.com/suomi/images/10264.jpg"
  }, {
    nimi: "muikku",
    url: "https://www.luontoportti.com/suomi/images/10243.jpg"
  }, {
    nimi: "kuore",
    url: "https://www.luontoportti.com/suomi/images/10230.jpg"
  }, {
    nimi: "meritaimen",
    url: "https://www.ifiske.ax/images/stories/fiskar/fishes/havsoring.jpg"
  }, {
    nimi: "na",
    url: "na"
  });
  
  
  console.log(fisuLista.length);
  numFisut = fisuLista.length - 1;
  alkuarvo();
  // vaihda_fisu();
  moodin_vaihto();
}

function vaihda_fisu() {
  console.log("FUNC: vaihda_fisu()");
  curId = (curId + 1) % numFisut;
  // var curId = 1;
  var e1 = document.getElementById("kalakuva");
  console.log(curId);
  e1.src = fisuLista[curId].url;
  document.getElementById("kala").innerHTML = '';

  document.getElementById("kala").value = "";
  document.getElementById("kala").innerHTML = "";
}

function alkuarvo() {
      curId = Math.floor(Math.random() * numFisut) - 1;
    // curId = numFisut - 1;
}

function moodin_vaihto() {
  console.log("FUNC: moodin_vaihto()");
  
  var e3 = document.getElementById("opiskelu");
  if (e3.checked) {
    newMode = 1;
  } else {
    newMode = 0;
  }
  if (curMode != newMode) {
    curMode = newMode;
    console.log(" ... moodin_vaihto - moodi vaihtui ");
    alkuarvo()
    document.getElementById("kala").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    vaihda_fisu();
    if (newMode == 1) {
      document.getElementById("nappi").innerHTML = "Seuraava";      
    } else {
      document.getElementById("nappi").innerHTML = "Tarkistapas";
    }
  }
}

function check() {
  console.log("FUNC: check()");
  var arvaus = document.getElementById("kala").value;

  var e1 = document.getElementById("result");

  var oikeaVastaus = e1.src = fisuLista[curId].nimi;

  var e3 = document.getElementById("opiskelu");
  if (e3.checked) {
    console.log("opiskelu-moodi");
    vaihda_fisu();
    result.innerHTML = fisuLista[curId].nimi;
  } else {
    if (arvaus == edellinenArvaus && curId == prevCurId) {
      return;
    }

    if (arvaus == oikeaVastaus) {
      result.innerHTML = "OIKEIN !";
      vaihda_fisu();

    } else {
      result.innerHTML = "Ei ihan ...";
    }
  }
  prevCurId = curId;
  edellinenArvaus = arvaus;
}