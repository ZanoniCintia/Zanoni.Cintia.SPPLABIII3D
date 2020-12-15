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
        item.textContent = '${element.nombre} ${element.email}';
        fragmento.appendChild(item);
    });
    return fragmento;
}


function traerPersonas() {

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    axios.get('http://localhost:3000/personas')
        .then(res => {
            ol.appendChild(crearItems(res.data));
            console.log("Personas obtenidas con exito");
        })
        .catch(err => {
            console.error(err.response.status, err.response.StatusText);
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
        data: JSON.stringify(nuevaPersona)
    };

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    axios('http://localhost:3000/personas', config)
        .then(res => {
            ol.appendChild(crearItems(res.data));
            console.log("Alta exitosa", res.data);
        })
        .catch(err => {
            console.error(err.response.status, err.response.StatusText);
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

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    const config = {
        method: "PUT",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(p)
    };

    axios('http://localhost:3000/personas', config)
        .then(res => {
            ol.appendChild(crearItems(res.data));
            console.log("Modificacion exitosa", res.data);
        })
        .catch(err => {
            console.error(err.response.status, err.response.StatusText);
        })
        .finally(() => {
            spinner.innerHTML = "";
        });
}

function bajaPersona() {

    axios('http://localhost:3000/personas', config)
        .then(res => {
            ol.appendChild(crearItems(res.data));
            console.log("Alta exitosa", res.data);
        })
        .catch(err => {
            console.error(err.response.status, err.response.StatusText);
        })
        .finally(() => {
            spinner.innerHTML = "";
        });
}


async function bajaPersona(id) {

    ol.innerHTML = "";
    spinner.appendChild(crearSpinner());

    const config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
    };
    try {
        let res = await axios('http://localhost:3000/personas' + id, config);
        console.log("Baja Exitosa", res.data);
        traerPersonas();
    } catch (err) {
        console.error(err.response.status, err.response.StatusText);

    } finally {
        spinner.innerHTML = "";
    }
}