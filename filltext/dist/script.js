var result;
var verseId = 0;
var numVerses = 0;
var rawTaskText; // The task text as such ... without marshalling
var taskTextList; // This is array, that contains the task objects
var areaText = '';
var useAreaText = false;

function CheckAnswer() {
  var $guess = $("#enter1").val();
  console.log($guess);
  console.log("foo");
  $("#verdict").append($guess);
  if ($guess == result.answer) {
    $("#verdict").text("You got it right!");
    SetNextTaskItem();
  } else {
    $("#verdict").text("TRY AGAIN");
  }
}

function SetNextTaskItem() {
  var nextTaskItem = null;
  
  console.log("SetNextTaskItem - Items: " + taskTextList.length);
  var loopCnt = 0;
  while (nextTaskItem == null && loopCnt++ < 10) {
        verseId = (verseId + 1) % (numVerses);
    nextTaskItem = buildSingleTaskObject(taskTextList[verseId]);

  }
  $("p#bib3").html(nextTaskItem.text);
}

function TextToArray(srcText) {
  console.log("TextToArray. Original text: "+srcText);
  // var list = srcText.split(/[.]/);
  var list = srcText.split(/[.]/);
  console.log("First item in the list: "+list[0]);
  return list;
}

function BuildTextList() {
  if (useAreaText) {
    taskTextList = TextToArray(areaText);
  } else {
    taskTextList = TextToArray(getBibleText());
  }
  numVerses = taskTextList.length-1;
  $("p#bib2").text(rawTaskText);
  verseId = numVerses-1;
  SetNextTaskItem();
}

function UpdateConfig() {
  areaText = $("textarea#areaText").val();
  console.log(areaText.length);
  if (!areaText || areaText.length <= 1) {
    rawTaskText = taskTextList;
    useAreaText = false;
  } else {
    rawTaskText = areaText;
    useAreaText = true;
  }
  BuildTextList();
}

function WordAllowedForTest(word) {
  if (word.length > 2) {
    return true;
  }
  return false;
}

function CalcRealWordNumber(list) {
  var realCount = 0;
  for (i=0; i< list.length;i++) {
    if ( WordAllowedForTest(list[i]) ) {
      realCount++;
    }
  }
  return realCount;
}

function buildSingleTaskObject($str) {
  var $list = $str.split(/[\s,.?"'“]/);
  var pos;
  var realMax = CalcRealWordNumber($list);
  pos = Math.floor(Math.random() * realMax  );
  var theoMax = $list.length;
  
    console.log("Words: "+ theoMax + " Real max: " + realMax + " Pos: " + pos);
  
  if (pos > realMax || pos < 0 || theoMax <= 0) {
    console.log("ERROR - pos could not be found: "+$str);
    return null;
  }
  
  var done = false;
  result = new Object();
  result.text = $str;
  while (!done) {
    if ( WordAllowedForTest($list[pos]) ) {
      done = true;
      result.text = $str.replace($list[pos], '<input autofocus type="text" id="enter1" onchange="CheckAnswer()" autocomplete="false" />');
      result.answer = $list[pos];
    }

    if (!done) {
      if (pos < $list.length - 1) {
        pos++;
      } else {
        done = 1;
      }
    }
  }
  return result;
}

$(document).ready(function() {

  $("div#config").hide();

UpdateConfig();

  $("button#hideConfig").click(function() {
    $("div#config").toggle();
  });
  
    $("button#skipBut").click(function() {
    SetNextTaskItem();
  });

  $("button#updateConfig").click(function() {
    UpdateConfig();
  });

  $("textarea#areaText").change(function() {
    UpdateConfig();
  });

  $("button#hideFullText").click(function() {
    $("div#rig").toggle();
  });
  
  $("button#hideLeft").click(function() {
    $("div#lef").toggle();
  });

  
  $("button#uusiNimi").click(function() {
    $("div#lef").toggle();
  });

  $("p#bib3").append(buildSingleTaskObject(taskTextList[verseId]).text);

  $("button#checkBut").click(function() {
    CheckAnswer();
  });
    $("#enter1").change(function() {
    CheckAnswer();
  });

  UpdateConfig();

});

function getBibleText() {
  var $bibx = 
    "Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council.     He came to Jesus at night and said, “Rabbi, we know that you are a teacher who has come from God. For no one could perform the signs you are doing if God were not with him.”     Jesus replied, “Very truly I tell you, no one can see the kingdom of God unless they are born again.[a]”    “How can someone be born when they are old?” Nicodemus asked. “Surely they cannot enter a second time into their mother’s womb to be born!”    Jesus answered, “Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit. 6 Flesh gives birth to flesh, but the Spirit[b] gives birth to spirit.    You should not be surprised at my saying, ‘You[c] must be born again.’    The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So it is with everyone born of the Spirit.”[d]    “How can this be?” Nicodemus asked."
  return $bibx;
}