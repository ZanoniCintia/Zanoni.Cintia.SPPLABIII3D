const btnTraer = document.getElementById("btnTraer");
const ol = document.querySelector(".ol");
const spinner = document.getElementById("spinner");



btnTraer.addEventListener("click", (e) => {
    //TRY-CATCH-FINALLY MANEJO DE ERRORES, NO CONFUNDIR CON LAS DEL THEN
    //FUNCION EXPRESADA > ASINCRO


    const traerPersonas = async() => {
        spinner.appendChild(crearSpinner());
        ol.innerHTML = "";

        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!res.ok) {
                let mensaje = res.statusText || "Se produjo un error";
                throw Error(res.status + " - " + mensaje);
            }
            let data = await res.json();
            ol.appendChild(crearItems(data));
        } catch (error) {
            console.error(error);
        } finally {
            spinner.innerHTML = "";
        }
    }
});

// //FUNCION NOMBRADA
// async function TraerPersonas(){}

const crearItems = (data) => {
    const fragmento = document.createDocumentFragment();
    data.forEach(element => {
        const item = document.createElement('li');
        item.textContent = '${element.name} ${element.email}';
        fragmento.appendChild(item);
    });
    return fragmento;
}

function crearSpinner() {
    const img = document.createElement('img');
    img.setAttribute("scr", "./images/spinner.gif");
    img.setAttribute("alt", "imagen spinner");
    return img;
}