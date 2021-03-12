

/* --------------------------------------------------------
** These can be used with HTTP-server
** import { nihonData } from './nihon.js';
** import { nihonJson } from './nihon.js';
-----------------------------------------------------------*/

var ndx = 0;
var curNdx = 0;
var subndx = 0;
var curLang = "jp";

function handleForm(val1) {
  debug_console("handleIt - PW: " +  val1);
  checkPass();
}

function checkPass() {
  // Default javascript syntax:
  let brave = document.querySelector("#pass1").value;

  let correct1, correct2;

  if (curLang == "jp") {
    correct1 = activeList[curNdx].jp1;
    correct2 = activeList[curNdx].jp2;
  } else {
    correct1 = activeList[curNdx].fi;
    correct2 = makeSortString(correct1);
  }


  if (!brave) {
    document.querySelector("#verdict").innerHTML = "...";
  } else if (brave == correct1 || brave == correct2) {
    debug_console("Correct: " + brave);
    document.querySelector("#verdict").innerHTML = "Yes - すごい !";
  } else {
    debug_console("Wrong: " + brave + " != " + correct1);
    document.querySelector("#verdict").innerHTML = "がんばった ね - try again ... ";
  }
}

var dbg_prefix = "DBG: ";
function debug_console (msg) {
    console.log(dbg_prefix, msg);
}

function toggleConfig() {
  $("div#config").toggle(); 
}

function toggleTryout() {
  $("div#tryout").toggle();  
}

function setRawList() {
  if (curLang == 'fi') {
    debug_console("Init Finnish");
    rawList = suomiData();
  } else {
    debug_console("Init Nihon");
    rawList = nihonData();
  }
}

function updateConfig() {
  let filter = document.querySelector("#filter").value;

  setRawList();

  if (! filter) {
    activeList = rawList;
    return;
  }

  activeList = new Array();
  curNdx = 0;
  subndx = 0;
  ndx = 0;
  rawList.forEach( (value) => {
    let labels = new Array;
    if (value.labels) {
      labels = value.labels;
    }
    //console.log(value);    
    if (labels.includes(filter) == true) {
      console.log("Filter " + filter + " found ...");
      activeList.push(value);
    }    
  });
  buttonNext();  
}

function buttonClear() {
  document.querySelector("#pass1").value = "";
  document.querySelector("#pass1").innerHTML = "";
    // document.querySelector("#pass2").value="";
  document.querySelector("#verdict").innerHTML = "...";
}

var activeList = new Array();
var rawList = nihonData();

function buttonNext() {
  numJp = activeList.length;

  if (subndx == 0) {
    curNdx = ndx;
    buttonClear();
    document.querySelector("#label").innerHTML = activeList[ndx].eng;
    document.querySelector("#jp1").innerHTML = "-";
    document.querySelector("#jp2").innerHTML = "-";    
    subndx++;
  } else if ( subndx == 1) {
    if (curLang == 'jp') {
      document.querySelector("#jp1").innerHTML = activeList[ndx].jp1;
      subndx++;
    } else {
      document.querySelector("#jp1").innerHTML = activeList[ndx].fi;
      subndx = 0;
      ndx = (ndx + 1) % numJp;
    }   
  } else {    
    document.querySelector("#jp2").innerHTML = activeList[ndx].jp2;  
    subndx = 0;
    ndx = (ndx + 1) % numJp;
  }
}

// Syntax options for initialization ----------------------



// JQuery syntax
$(document).ready(function() {
  debug_console("Page loaded / JQuery");

  curLang = document.querySelector("#curlang").innerHTML;
  debug_console("Current language: " +  curLang);

  setRawList();

  /* ------------------------------------------
  ** These can be used with HTTP-server:
  ** ... but not from file system
  **  
  console.log("Try out calling external functions:");
  console.log("Data from nihonData():" + nihonData());
  nihonJson();  
  
  fetch("nihon.json")
  .then(response => response.json())
  .then(json => console.log(json));
  ---------------------------------------------- */  

  $("div#config").hide();
  $("div#tryout").hide();

  if (curLang == 'fi') {
    $("span#jp2").hide();
  }


  updateConfig();
  buttonNext();
  // Register event functions:
  $("#pass1").change(function() {
    checkPass();
  });    
});

// Default Syntax
// https://www.w3schools.com/js/js_htmldom_document.asp
document.body.onload = () => {
  debug_console("Page loaded / Default");
}


/* ------------------------------------------------------
** This can be exported to another file with HTTP-server
*/

function nihonData() {
  return nihonList;
}

function suomiData() {
  return suomiList;
}

var suomiList = new Array(
  {
    jp1: "xxx",  jp2: "xxx",
    eng: "wonderful",  fi: "ihana",
    labels : ['6.3.2021', 'aki']
  }, {
    jp1: "xxx",  jp2: "xxx",
    eng: "station",  fi: "asema",
    labels : ['6.3.2021', 'aki']
  }, {
    jp1: "x",  jp2: "x",
    eng: "I am",  fi: "minä olen",
    labels : ['6.3.2021', 'aki']
  }, {
    jp1: "x",  jp2: "x",    
    eng: "you are",  fi: "sinä olet",
    labels : ['6.3.2021', 'aki']
  }, {
    jp1: "x",  jp2: "x",
    eng: "she is",  fi: "hän on",
    labels : ['6.3.2021', 'aki']
   }, {
    jp1: "x",  jp2: "x",
    eng: "library",  fi: "kirjasto",
    labels : ['6.3.2021', 'aki']
   }
);

var nihonList = new Array(
{
jp1: "おしえ",  jp2: "oshie",
eng: "teaching",  fi: "opetus",
labels : ['27.2.2021', 'homework']
}, {
jp1: "しゅ",  jp2: "shu",
eng: "Lord",  fi: "Herra",
labels : ['27.2.2021', 'homework']
}, {
jp1: "まち",  jp2: "machi",
eng: "city",  fi: "kaupunki",
labels : ['27.2.2021', 'homework']
}, {
jp1: "たんじょうび   おめでとう",  jp2: "tanjyobi omedetou",
eng: "Happy Birthday",  fi: "Hyvää syntymäpäivää"
}, {
jp1: "おしえる",   jp2: "oshieru",
eng: "to teach",  fi: "opettaa",
labels : ['27.2.2021', 'homework', 'verb']  
}, {
jp1: "がんばって！",  jp2: "ganbatte",
eng: "Come'on",  fi: "Kiri-kiri"
}, {
jp1: "  （これ を） たべて　いいですか？",  jp2: "Kore wo tabe te iidesuka?",
eng: "Can I eat this?",  fi: "Voinko syödä tämän?",
labels : ['homework']  
}, {
jp1: "おめでとう",  jp2: "omedetou",
eng: "congratulations",  fi: "Onneksi olkooon"
}, {
jp1: "すみません",  jp2: "sumimasen",
eng: "I'm sorry",  fi: "Anteeksi"
}, {
jp1: "ごめんなさい ",  jp2: "gomennasai",
eng: "I'm sorry (childish)",  fi: "Anteeksi (lasten versio)"
}, {
jp1: "どのように　つかえ　ば　いいですか？",  jp2: "Donoyouni tsukae ba iideska?",
eng: "How can I use this?",  fi: "Kuinka voin käyttää tätä?",
labels : ['homework']
}, {
jp1: "いく",  jp2: "iku",
eng: "to go",  fi: "mennä",
labels : ['homework', '6.3.2021', 'verb']
}, {
jp1: "つくる",  jp2: "tsukuru",
eng: "to make",  fi: "tehdä",
labels : ['homework', '6.3.2021', 'verb']
}, {
  jp1: "むちゅう",  jp2: "muchuu",
  eng: "into something",  fi: "innostunut",
  labels : ['homework', '6.3.2021', 'verb']
}, {
  jp1: "ちゅうどく",  jp2: "chuudoku",
  eng: "addict",  fi: "addikti",
  labels : ['homework', '6.3.2021', 'verb']
}, {
  jp1: "いちご",  jp2: "ichigo",
  eng: "strawberry",  fi: "mansikka",
  labels : ['homework', '6.3.2021', 'verb']
}, {
  jp1: "しんぱい しょう",  jp2: "shinpai shou",
  eng: "worry things",  fi: "olla huolissaan",
  labels : ['homework', '6.3.2021', 'verb']  
}, {
  jp1: "あなた　は　なに　に　むちゅう　ですか？",  jp2: "anata wa nani ni muchuu des ka",
  eng: "what are you really into",  fi: "mistä olet todella kiinnostunut",
  labels : ['homework', '6.3.2021', 'phrase']  
}, {
  jp1: "わたし は　にほん　の　あにめ　に　むちゅう　です。",  jp2: "watasi wa nihon no anime ni muchuu des",
  eng: "I'm a big fan of Japanese anime",  fi: "Pidän paljon japanilaisesta animesta",
  labels : ['homework', '6.3.2021', 'phrase']    
});

var makeSortString = (function() {
  var translate_re = /[öäüÖÄÜ]/g;
  return function(s) {
    var translate = {
      "ä": "a", "ö": "o", "ü": "u",
      "Ä": "A", "Ö": "O", "Ü": "U"   // probably more to come
    };
    return ( s.replace(translate_re, function(match) { 
      return translate[match]; 
    }) );
  }
})();