// Desarrollado por Ernesto Fuentes

"use strict";

//Iniciar sesión
function iniciar_sesion() {
  function Estudiante(usuario, contrasena) {
    this.usuario = usuario;
    this.contrasena = contrasena;
  }
  var usuarioEstudiante = document.getElementById("usuario").value;
  var contrasenaEstudiante = document.getElementById("contrasena").value;
  alert("Este usuario no existe...");
  //Limpiamos los input
  document.getElementById("formulario_iniciar_sesion").reset();
}

//Registrarse
function registrarse() {
  var estudiante;
  var contrasena;
  alert("Bienvenido a UVM");
  prompt("¿Usted es Docente o Estudiante?");
  estudiante = prompt("¿Cual es su número de cuenta?");
  contrasena = prompt("Escribe una contraseña: ");
  alert("¡Registro exitoso!");
  alert("Usuario: " + estudiante + "\nContraseña: " + contrasena);
}
