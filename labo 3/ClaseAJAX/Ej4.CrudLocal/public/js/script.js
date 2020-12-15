// import crearTabla from "./tabla.js";
const btnTraer = document.getElementById("btnTraer");
let divTabla;
const ol = document.querySelector(".ol");

const spinner = document.getElementById("spinner");
const urlAccess = "https://jsonplaceholder.typicode.com/users";


btnTraer.addEventListener("click", (e) => {

    traerPersonas();
    altaPersona();


});

function crearSpinner() {
    const img = document.createElement('img');
    img.setAttribute("scr", "./images/Spinner.gif");
    img.setAttribute("alt", "imagen spinner");
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



// function crearTabla() {
//     divTabla.appendChild(crearTabla(listaAnuncios));
// }

function traerPersonas() {
    const xhr = new XMLHttpRequest();

    // spinner.appendChild(crearSpinner());

    //NOS VERIFICA EL ESTADO READYSTATECHANGE
    // xhr.onreadystatechange = 
    //callback
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                //la respuesta viene en formato texto o json
                let datos = JSON.parse(xhr.responseText);

                ol.appendChild(crearItems(datos));
                //la respuesta viene en formato xml
                // xhr.responseXML
            } else {
                let mensaje = hxr.statusText || "Se produjo un error";
                console.error("Error: " + xhr.status + " - " + mensaje);
            }
        }
    });

    //recibe 2 parametros, 
    //metodo: verbos de http, (como abrir)
    //url: direccion a abrir 
    // xhr.open(method, url); si no ponemos nada en method por default es get

    xhr.open('GET', "http://localhost:3000/personas");

    //enviar la peticion
    xhr.send();

}

function altaPersona() {
    let nuevaPersona = ({
        "nombre": "Pepito",
        "apellido": "Fatil",
        "email": "pepf@hotmail.com"
    })

    const xhr = new XMLHttpRequest();

    // spinner.appendChild(crearSpinner());

    //NOS VERIFICA EL ESTADO READYSTATECHANGE
    // xhr.onreadystatechange = 
    //callback
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                //la respuesta viene en formato texto o json
                let datos = JSON.parse(xhr.responseText);

                ol.appendChild(crearItems(datos));
                //la respuesta viene en formato xml
                // xhr.responseXML
            } else {
                let mensaje = hxr.statusText || "Se produjo un error";
                console.error("Error: " + xhr.status + " - " + mensaje);
            }
        }
    });

    //recibe 2 parametros, 
    //metodo: verbos de http, (como abrir)
    //url: direccion a abrir 
    // xhr.open(method, url); si no ponemos nada en method por default es get

    xhr.open('POST', "http://localhost:3000/personas");

    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

    //enviar la peticion
    xhr.send(JSON.stringify(nuevaPersona));

}


function modifPersona() {
    let personaAModificar = ({
        "nombre": "Pepito",
        "apellido": "Fatil",
        "email": "pepf@hotmail.com"
    })

    const xhr = new XMLHttpRequest();

    // spinner.appendChild(crearSpinner());

    //NOS VERIFICA EL ESTADO READYSTATECHANGE
    // xhr.onreadystatechange = 
    //callback
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                //la respuesta viene en formato texto o json
                let datos = JSON.parse(xhr.responseText);

                ol.appendChild(crearItems(datos));
                //la respuesta viene en formato xml
                // xhr.responseXML
            } else {
                let mensaje = hxr.statusText || "Se produjo un error";
                console.error("Error: " + xhr.status + " - " + mensaje);
            }
        }
    });

    //recibe 2 parametros, 
    //metodo: verbos de http, (como abrir)
    //url: direccion a abrir 
    // xhr.open(method, url); si no ponemos nada en method por default es get

    xhr.open('PUT', "http://localhost:3000/personas" + 21);

    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

    //enviar la peticion
    xhr.send(JSON.stringify(personaAModificar));

}


function bajaPersona() {
    let personaADeletear = ({
        "nombre": "Pepito",
        "apellido": "Fatil",
        "email": "pepf@hotmail.com"
    })

    const xhr = new XMLHttpRequest();

    // spinner.appendChild(crearSpinner());

    //NOS VERIFICA EL ESTADO READYSTATECHANGE
    // xhr.onreadystatechange = 
    //callback
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                //la respuesta viene en formato texto o json
                let datos = JSON.parse(xhr.responseText);

                ol.appendChild(crearItems(datos));
                //la respuesta viene en formato xml
                // xhr.responseXML
            } else {
                let mensaje = hxr.statusText || "Se produjo un error";
                console.error("Error: " + xhr.status + " - " + mensaje);
            }
        }
    });

    //recibe 2 parametros, 
    //metodo: verbos de http, (como abrir)
    //url: direccion a abrir 
    // xhr.open(method, url); si no ponemos nada en method por default es get
    let id = 21;
    xhr.open('DELETE', "http://localhost:3000/personas" + id);

    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");

    // enviar la peticion
    xhr.send();

}