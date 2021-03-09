

/* --------------------------------------------------------
** These can be used with HTTP-server
** import { nihonData } from './nihon.js';
** import { nihonJson } from './nihon.js';
-----------------------------------------------------------*/

var ndx = 0;
var curNdx = 0;
var subndx = 0;

function handleForm(val1) {
  debug_console("handleIt - PW: " +  val1);
  checkPass();
}

function checkPass() {  
  // Default javascript syntax:
  let brave = document.querySelector("#pass1").value;
  let correct1 = jpList[curNdx].jp1;
  let correct2 = jpList[curNdx].jp2;

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

function CheckPlain() {
  debug_console("CheckPlain called");
  // JQuery syntax:
  let $pass1 = $("#pass1").val();
  debug_console("Plain PW value: " +  $pass1);    
}

function toggleConfig() {
  $("div#config").toggle(); 
}

function toggleTryout() {
  $("div#tryout").toggle(); 
}

function updateConfig() {
  let filter = document.querySelector("#filter").value;

  if (! filter) {
    jpList = rawList;
    return;
  }

  jpList = new Array();
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
      jpList.push(value);
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

var jpList = new Array();
var rawList = nihonData();

function buttonNext() {
  numJp = jpList.length;

  if (subndx == 0) {
    curNdx = ndx;
    buttonClear();
    document.querySelector("#label").innerHTML = jpList[ndx].eng;
    document.querySelector("#jp1").innerHTML = "-";
    document.querySelector("#jp2").innerHTML = "-";    
    subndx++;
  } else if ( subndx == 1) {
    document.querySelector("#jp1").innerHTML = jpList[ndx].jp1;
    subndx++;
  } else {    
    document.querySelector("#jp2").innerHTML = jpList[ndx].jp2;  
    subndx = 0;
    ndx = (ndx + 1) % numJp;
  }
}

// Syntax options for initialization ----------------------

// JQuery syntax
$(document).ready(function() {
  debug_console("Page loaded / JQuery");

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
  updateConfig();
  buttonNext();
  // Register event functions:
  $("#pass1").change(function() {
    CheckPlain();
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
  return rawList;
}

var rawList = new Array(
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
});