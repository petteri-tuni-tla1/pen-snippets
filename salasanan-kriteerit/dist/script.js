function handleForm(val1, val2) {
  debug_console("handleIt - PW: " +  val1 + " # " + val2);
  checkPass();
}

function checkPass() {  
  // Default javascript syntax:
  let pass1 = document.querySelector("#pass1").value;
  let pass2 = document.querySelector("#pass2").value;
  
  if (!pass1) {
    document.querySelector("#verdict").innerHTML = "...";
  } else if (pass1 != pass2) {
    debug_console("Passwords differ: " + pass1 + " != " + pass2);
    document.querySelector("#verdict").innerHTML = "Buub - try again ... ";
  } else {
    debug_console("Passwords match: " + pass1);
    document.querySelector("#verdict").innerHTML = "MATCH - Great!";
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
function buttonClear() {
  document.querySelector("#pass1").value = 
    document.querySelector("#pass2").value="";
  document.querySelector("#verdict").innerHTML = "...";
}

// Syntax options for initialization ----------------------

// JQuery syntax
$(document).ready(function() {
  debug_console("Page loaded / JQuery");
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
