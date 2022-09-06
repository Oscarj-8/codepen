var personal_info = document.getElementById("personal-info");
var emergency_cont = document.getElementById("emergency-cont");
var refernce_person = document.getElementById("refernce-person");
var reasons_fr_vol = document.getElementById("reasons-fr-vol");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");

Next1.onclick = function () {
  personal_info.style.bottom = "650px";
  emergency_cont.style.bottom = "730px";
};
Back1.onclick = function () {
  personal_info.style.bottom = "5px";
  emergency_cont.style.bottom = "180px";
};

Next2.onclick = function () {
  emergency_cont.style.bottom = "180px";
  refernce_person.style.bottom = "650px";
  progress.style.width = "600px";
};

Back2.onclick = function () {
  emergency_cont.style.bottom = "730px";
  refernce_person.style.bottom = "10px";
  progress.style.width = "200px";
};

Next3.onclick = function () {
  refernce_person.style.bottom = "-50px";
  // reasons_fr_vol.style.bottom = "1050px";
  //progress.style.width = "800px";
};

Back3.onclick = function () {
  refernce_person.style.bottom = "80px";
  reasons_fr_vol.style.bottom = "850px";
  progress.style.width = "240px";
};
