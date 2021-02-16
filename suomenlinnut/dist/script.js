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
  fisuLista = new Array(
    
  {
    nimi: "sammakko",
    url: "http://www.suomenluonto.fi/wp-content/uploads/2014/10/Monica-Betley-Rana_temporaria-610x457.jpg"
  },    
  {
    nimi: "rupikonna",
    url: "http://yle.fi/aihe/sites/aihe/files/migrated/oppiminen/images/rupikonna1.jpg"
  },    
  {
    nimi: "vesilisko",
    url: "https://www.ollikorhonen.com/wordpress/wp-content/gallery/cache/2266__500x0_vesilisko-2013-1596.jpg"
  },    
  {
    nimi: "sinisorsa",
    url: "http://www.luontoportti.com/suomi/images/12679.jpg"
  },        
    
    
 
    
  {
    nimi: "tukkasotka",
    url: "http://atlas3.lintuatlas.fi/0/lajikuvat/800/Aythya%20fuligula.jpg"
  },
  {
    nimi: "silkkiuikku",
    url: "http://atlas3.lintuatlas.fi/0/lajikuvat/800/Podiceps%20cristatus.jpg"
  },
  {
    nimi: "telkkä",
    url: "http://atlas3.lintuatlas.fi/0/lajikuvat/800/Bucephala%20clangula.jpg"
  },
  {
    nimi: "nokikana",
    url: "http://atlas3.lintuatlas.fi/0/lajikuvat/800/Fulica%20atra.jpg"
  },
  {
    nimi: "kuikka",
    url: "http://static.iltalehti.fi/perhe/kuikka15072010MT_pr.jpg"
  },                              
  {
    nimi: "kaakkuri",
    url: "http://atlas3.lintuatlas.fi/0/lajikuvat/800/Gavia%20stellata.jpg"
  },                              
 {
    nimi: "isokoskelo",
    url: "http://www.luontoon.fi/documents/10550/367023/SELK_Isokoskelo_tn060419_139_TimoNieminen_444.jpg/57816649-e765-4929-9392-19e901499151?t=1467197639777"
  },                                               
 {
    nimi: "laulujoutsen",
    url: "http://yle.fi/aihe/sites/aihe/files/migrated/oppiminen/images/kyhmyjoutsen_7307_0.jpg"
  },  
 {
    nimi: "naurulokki",
    url: "http://www.suomenluonto.fi/wp-content/uploads/2013/06/naurulokki.jpg"
  },  
 {
    nimi: "kalalokki",
    url: "http://www.luontoportti.com/suomi/images/25875.jpg"
  },   
 {
    nimi: "harmaalokki",
    url: "http://www.luontoportti.com/suomi/images/21574.jpg"
  },   
 {
    nimi: "isokuovi",
    url: "https://peda.net/Catalunya/vedet/vesilinnut/kjl/kna/b:file/photo/bcfbe6fd641d7d5c2153d374c13f8c995df82f27/bi_7_linnut_iso_kuovi_shutterstock_75924169_peda.jpg"
  },   
 {
    nimi: "kalasääski",
    url: "http://farm1.static.flickr.com/46/148317100_420cab9d8e.jpg"
  },   
 {
    nimi: "kalatiira",
    url: "http://www.luontoportti.com/suomi/images/14908.jpg"
  },       
  {
    nimi: "telkkä",
    url: "https://hiipakka.kuvat.fi/kuvat/Lintuja./Telkk%C3%A4./D08R4450.jpg?img=full"
  },               
  {
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