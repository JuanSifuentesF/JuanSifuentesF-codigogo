// Estamos creando un objeto modal a partir de bootstrap
let miModal = new bootstrap.Modal(document.getElementById("miModal"));

// console.log(miModal);

let btnAbrir = document.getElementById("btnAbrir");

btnAbrir.addEventListener("click", function () {
  miModal.show();
});

// setTimeout(function () {
//   miModal.show();
// }, 1);
