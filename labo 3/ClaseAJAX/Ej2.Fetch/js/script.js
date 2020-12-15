const btnTraer = document.getElementById("btnTraer");
const ol = document.querySelector(".ol");
const spinner = document.getElementById("spinner");

spinner.appendChild(crearSpinner());

btnTraer.addEventListener("click", (e) => {
    //fetch por default hace llamadas GET, recibe la url

    fetch("https://jsonplaceholder.typicode.com/users")
        // THEN-CATCH-FINALLY METODO QUE TIENEN LAS PROMESAS
        .then((res) => {
            return !res.ok ? Promise.reject() : res.json();
        })
        .then((data) => {
            ol.appendChild(crearItems(data));
        })
        .catch((err) => {
            let mensaje = err.statusText || "Se produjo un error";
            console.error("Error: " + err.status + " - " + mensaje);
        })
        .finally(() => {
            spinner.innerHTML = "";
        })

});

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