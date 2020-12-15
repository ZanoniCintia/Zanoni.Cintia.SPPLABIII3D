// import crearTabla from "./tabla.js";
const btnTraer = document.getElementById("btnTraer");
let divTabla;
const ol = document.querySelector(".ol");

const spinner = document.getElementById("spinner");
const urlAccess = "https://jsonplaceholder.typicode.com/users";


btnTraer.addEventListener("click", (e) => {

    traerPersonas();
    // altaPersona();
    //modificarPersona();
    // bajaPersona(22);

});

function crearSpinner() {
    const img = document.createElement('img');
    img.setAttribute("scr", "./images/Spinner.gif");
    img.setAttribute("alt", "imagen spinner");
    return img;
}

//funcion expresada
const crearItems = (data) => {
    const fragmento = document.createDocumentFragment();
    data.forEach(element => {
        const item = document.createElement('li');
        item.textContent = `${element.nombre} ${element.apellido} ${element.email}`; //aca estaba mal escrito
        fragmento.appendChild(item);
    });
    return fragmento;
}


function traerPersonas() {

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    fetch('http://localhost:3000/personas')
        .then(res => {
            if (!res.ok) return Promise.reject(res);

            return res.json();
        })
        .then(data => {
            ol.appendChild(crearItems(data));
            console.log("Personas Obtenidas con éxito");
        })
        .catch(err => {
            console.error(err.status);
        })
        .finally(() => {
            spinner.innerHTML = "";
        });
}

function altaPersona() {

    let nuevaPersona = {
        "nombre": "Juana",
        "apellido": "Gomez",
        "email": "jgomez@utn.com"
    };


    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    const config = {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(nuevaPersona)
    };

    fetch('http://localhost:3000/personas', config)
        .then(res => {
            if (!res.ok) return Promise.reject(res);

            return res.json();
        })
        .then(personaAgregada => {
            console.log("alta exitosa", personaAgregada);
            traerPersonas();
        })
        .catch(err => {
            console.error(err.status);
        })
        .finally(() => {
            spinner.innerHTML = "";
        });
}


function modificarPersona() {

    const p = {
        "id": 22,
        "nombre": "Jose",
        "apellido": "Perez",
        "email": "jperez@utn.com"
    };

    let id = p.id;

    delete p.id;
    // const pModificar{

    // }

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    const config = {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(p)
    };

    fetch('http://localhost:3000/personas/' + id, config)
        .then(res => {
            if (!res.ok) return Promise.reject(res);

            return res.json();
        })
        .then(personaModificada => {
            console.log("modificacion exitosa", personaModificada);
            traerPersonas();
        })
        .catch(err => {
            console.error(err.status);
        })
        .finally(() => {
            spinner.innerHTML = "";
        });
}

function bajaPersona() {

    const p = {
        "id": 22,
        "nombre": "Jose",
        "apellido": "Perez",
        "email": "jperez@utn.com"
    };

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    const config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(p)
    };

    fetch('http://localhost:3000/personas/' + p.id, config)
        .then(res => {
            if (!res.ok) return Promise.reject(res);

            return res.json();
        })
        .then(persona => {
            console.log("Baja exitosa", persona);
            traerPersonas();
        })
        .catch(err => {
            console.error(err.status);
        })
        .finally(() => {
            spinner.innerHTML = "";
        });
}