async function crearUsuario(event) {
    event.preventDefault();

    const form = new FormData(document.getElementById("formulario"))

    try {
        form.append("is_active", true)

        let object = {};
        form.forEach((value, key) => object[key] = value);

        const response = await fetch('http://localhost:3000/todoList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        });

        const nuevoUsuario = await response.json();
        alert('Usuario creado:', nuevoUsuario);
        // obtenerUsuariosActivos()
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
}

async function obtenerUsuariosActivos() {
    try {
        const response = await fetch(`http://localhost:3000/todoList?is_active=true`);
        const usuariosActivos = await response.json();

        usuariosActivos.forEach(element => {
            const li = document.createElement("li");
            li.innerText = `${element.nombre} ${element.edad} ${element.email}`
            document.getElementById("my-list").appendChild(li);
        });

    } catch (error) {
        console.error('Error al obtener el usuario:', error);
    }
}

document.addEventListener("DOMContentLoaded", function getData() {
    obtenerUsuariosActivos()
});