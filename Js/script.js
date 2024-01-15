function hitungLuas() {
  var sideLengthLuas = document.getElementById("sideLengthLuas").value;
  var luas = sideLengthLuas * sideLengthLuas;
  document.getElementById("luasResult").innerText = luas;
}

function resetLuas() {
  document.getElementById("sideLengthLuas").value = "";
  document.getElementById("luasResult").innerText = "0";
}

function hitungKeliling() {
  var sideLengthKeliling = document.getElementById("sideLengthKeliling").value;
  var keliling = 4 * sideLengthKeliling;
  document.getElementById("kelilingResult").innerText = keliling;
}

function resetKeliling() {
  document.getElementById("sideLengthKeliling").value = "";
  document.getElementById("kelilingResult").innerText = "0";
}