/**
 * 1, Que datos necesito???
 * - la tarea (string), estado la tarea(booleano)
 * - referencia del formulario
 * - referencia de la lista
 * 2, Como obtengo los datos???
 * - evento click, tomando el value del input
 * - crear un li
 */

let miForm = document.getElementById("formToDo");

let ulTareas = document.getElementById("tareas");

let tareas = []; //aqui almacenare las tareas a mostrar

//a, vamos a obtener el valor del input y agregarlo a tareas[]

formToDo.addEventListener("submit", function (ev) {
  //evento
  ev.preventDefault();
  //formulario.name_input.value
  let nuevaTarea = formToDo.tarea.value;
  tareas.push(nuevaTarea);
  console.log(tareas);
  //.reset(), reinicia todo el fomulario
  miForm.reset();
  dibujarTareas();
});

function dibujarTareas() {
  //cada vez que se ejecute dibujaTareas lo primero que hago es decir el contenido HTML va a ser "" nada
  ulTareas.innerHTML = "";
  //se va a encargar de dibujar las tareas
  tareas.forEach(function (item, posicion) {
    let li = document.createElement("li");
    li.innerText = item;
    ulTareas.appendChild(li);

    //Agregar 01 evento por cada item
    li.addEventListener("dblclick", function () {
      //la idea es que esto nos permita eliminar una tarea
      tareas.splice(posicion, 1);
      //console.log("Despues de eliminar", tareas);
      dibujarTareas();
    });
  });
}
