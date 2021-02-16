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
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAkiiski.png"
  }, {
    nimi: "kuha",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAkuha.png"
  }, {
    nimi: "hauki",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/_resampled/resizedimage600163-KUVAhauki.png"
  }, {
    nimi: "siika",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAsiika.png"
  }, {
    nimi: "taimen",
    url: " http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAtaimen.png"
  }, {
    nimi: "ahven",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAahven.png"
  }, {
    nimi: "purotaimen",
    url: "http://kala-kassu.net/kuvat/lajikuvat/Purotaimen.jpg"
  }, {
    nimi: "lohi",
    url: "http://kala-kassu.net/kuvat/lajikuvat/Lohi.jpg"
  }, {
    nimi: "made",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAmade.png"
  }, {
    nimi: "särki",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAsrki.png"
  }, {
    nimi: "salakka",
    url: "http://www.luontoportti.com/suomi/images/10264.jpg"
  }, {
    nimi: "muikku",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAmuikku.png"
  }, {
    nimi: "kuore",
    url: "http://www.lapinkalatalouskeskus.net/assets/Kuvitus/KUVAkuore.png"
  }, {
    nimi: "meritaimen",
    url: "http://www.rktl.fi/www/uploads/images/mtaimen1.jpg"
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