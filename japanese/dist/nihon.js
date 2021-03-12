
/* --------------------------------------------------------
** NOTE: Both techniques require using a HTTP server
** Does not work from file system (CORS)
** --> Fetch API cannot load file. URL scheme must be “http” or “https” for CORS request.
*/

/* --------------------------------------------------------
** Have the data in a JSON file.
*/

export function nihonJson() {
    fetch("nihon.json")                                                                                                             .then(response => response.json())
    .then(json => console.log(json));
}

/* --------------------------------------------------------
** Having the data and function in a separate JS file
*/

export function nihonData() {
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
  eng: "to teach",  fi: "opettaa"  
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
  labels : ['homework', '6.3.2021']
}, {
  jp1: "つくる",  jp2: "tsukuru",
  eng: "to make",  fi: "tehdä",
  labels : ['homework', '6.3.2021']
});