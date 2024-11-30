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

  document.querySelector(".content .map").addEventListener("click",function() {
    window.open ('https://goo.gl/maps/3ien9o1kwTbGpNWT9');
  });