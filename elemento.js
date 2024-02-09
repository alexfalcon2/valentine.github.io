document.getElementById("si-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "block"; // Mostrar texto "Si"
    document.getElementById("texto-no").style.display = "none"; // Ocultar texto "No"
    document.querySelector(".botones").style.display = "none"; // Ocultar los botones
  });
  
  document.getElementById("no-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "none"; // Ocultar texto "Si"
    document.getElementById("texto-no").style.display = "block"; // Mostrar texto "No"
    document.querySelector(".botones").style.display = "none"; // Ocultar los botones
  });
  
  document.getElementById("reiniciar-btn").addEventListener("click", function() {
    document.getElementById("texto-si").style.display = "none"; // Ocultar texto "Si"
    document.getElementById("texto-no").style.display = "none"; // Ocultar texto "No"
    document.querySelector(".botones").style.display = "flex"; // Mostrar los botones
  });
  