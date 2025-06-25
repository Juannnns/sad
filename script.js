const apiUrl = 'http://localhost:3000/todoList';

const getStatus = (status) => {
    switch (status){
        case "all":
            return 'Por hacer'
        case 'in_progress':
            return "En progreso"
        case "done":
            return "Completada"
    }
}

const getData = async () => {
    try {
        const response = await fetch(`${apiUrl}?is_active=true`);
        const usuarios = await response.json();
        const tbody = document.querySelector("#tabla-task tbody");
        tbody.innerHTML = "";

        usuarios.forEach(usuario => {
          const fila = document.createElement("tr");

          fila.innerHTML = `
            <td>${todo.nombre}</td>
            <td>${getStatus(todo.estado)}</td>
            <td>${todo.description}</td>
            <td>
              <button onclick="editarUsuario(${usuario.id}, this)">Editar</button>
              <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
            </td>
          `;

          tbody.appendChild(fila);
        });
      } catch (err) {
        console.error("Error al cargar todoList:", err);
      }
    }

const createTodo = async () => {
    const form = new FormData(document.getElementById("form-crear"))
    const data = Object.fromEntries(form.entries());

    data.is.active = true;

    try {
        await fetch(apiUrl, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarioEditado)
        });
        form.reset();
        await getData();
    } catch (error) {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", getData);