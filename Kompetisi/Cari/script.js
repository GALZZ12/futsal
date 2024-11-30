document.getElementById("login").addEventListener("click",function() {
    document.querySelector(".popup-login").classList.add("active");
  });

document.querySelector(".popup-login .btn-close").addEventListener("click",function() {
    document.querySelector(".popup-login").classList.remove("active");
  });

document.getElementById("daftar").addEventListener("click",function() {
    document.querySelector(".popup-daftar").classList.add("active");
  });

document.querySelector(".popup-daftar .btn-close").addEventListener("click",function() {
    document.querySelector(".popup-daftar").classList.remove("active");
  });