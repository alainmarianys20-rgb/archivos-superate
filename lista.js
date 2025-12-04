function agregarTarea() {
 let tareaInput = document.getElementById('nueva-tarea');
 let tareaTexto = tareaInput.value.trim();
 if (tareaTexto !== '') {
 let listaTareas = document.getElementById('lista-tareas');
 let li = document.createElement('li');
 li.textContent = tareaTexto;
 let botonEliminar = document.createElement('button');
 botonEliminar.textContent = 'Eliminar';
 botonEliminar.onclick = function() {
 listaTareas.removeChild(li);
 };
 li.appendChild(botonEliminar);
 listaTareas.appendChild(li);
 tareaInput.value = '';
}
}
