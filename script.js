// Masuk Function
document.getElementById("login").addEventListener("click",function() {
  document.querySelector(".popup-login").classList.add("active");
  document.querySelector(".popup-daftar").classList.remove("active");
});

document.querySelector(".popup-login .btn-close").addEventListener("click",function() {
  document.querySelector(".popup-login").classList.remove("active");
});

// Daftar Function
document.getElementById("daftar").addEventListener("click",function() {
  document.querySelector(".popup-daftar").classList.add("active");
  document.querySelector(".popup-login").classList.remove("active");
});

document.querySelector(".popup-daftar .btn-close").addEventListener("click",function() {
  document.querySelector(".popup-daftar").classList.remove("active");
});

document.getElementById("mulai-sekarang").addEventListener("click",function() {
  document.querySelector(".popup-daftar").classList.add("active");
  document.querySelector(".popup-login").classList.remove("active");
});

// Button Pemilik
document.getElementById("pemilik").addEventListener("click",function() {
  document.getElementById("pemilik").classList.add("active");
  document.getElementById("penyewa").classList.remove("active");
  document.getElementById("text-pemilik").style.display="inline";
  document.getElementById("text-penyewa").style.display="none";
});
// Button Penyewa
document.getElementById("penyewa").addEventListener("click",function() {
  document.getElementById("penyewa").classList.add("active");
  document.getElementById("pemilik").classList.remove("active");
  document.getElementById("text-penyewa").style.display="inline";
  document.getElementById("text-pemilik").style.display="none";
});
// Button Peserta
document.getElementById("peserta").addEventListener("click",function() {
  document.getElementById("peserta").classList.add("active");
  document.getElementById("operator").classList.remove("active");
  document.getElementById("text-peserta").style.display="inline";
  document.getElementById("text-operator").style.display="none";
  document.querySelector(".content-kompetisi").style.display="flex";
  document.querySelector(".step-by").style.display="none";
});
// Button Operator
document.getElementById("operator").addEventListener("click",function() {
  document.getElementById("operator").classList.add("active");
  document.getElementById("peserta").classList.remove("active");
  document.getElementById("text-operator").style.display="inline";
  document.getElementById("text-peserta").style.display="none";
  document.querySelector(".content-kompetisi").style.display="none";
  document.querySelector(".step-by").style.display="inline";
});

// Card pada Operator
document.getElementById("card-1").addEventListener("click",function() {
  document.getElementById("card-1").classList.add("active");
  document.getElementById("card-2").classList.remove("active");
  document.getElementById("card-3").classList.remove("active");
});
document.getElementById("card-2").addEventListener("click",function() {
  document.getElementById("card-2").classList.add("active");
  document.getElementById("card-1").classList.remove("active");
  document.getElementById("card-3").classList.remove("active");
});
document.getElementById("card-3").addEventListener("click",function() {
  document.getElementById("card-3").classList.add("active");
  document.getElementById("card-1").classList.remove("active");
  document.getElementById("card-2").classList.remove("active");
});