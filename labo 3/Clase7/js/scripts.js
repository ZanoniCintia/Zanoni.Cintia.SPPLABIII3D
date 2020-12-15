// DOCUMENT OBJECT MODEL (DOM)

// console.log(document);

// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);

// console.log(document.title);
// console.log(document.charset);
// console.log(document.documentElement.lang);

// console.log(document.forms);
// console.log(document.links);
// console.log(document.styleSheets);
// console.log(document.scripts);

// // TRAE EL VALOR POR EL ID
// console.log(document.getElementById("Google"));
// // TRAE VARIOS ELEMENTOS POR LA ETIQUETA, EN ESTE CASO LINKS
// console.log(document.getElementsByTagName("a"));
// // TRAE VARIOS ELEMENTOS POR NOMBRE
// console.log(document.getElementsByName('nombre'));

// const listaClaseEnlace = document.getElementsByClassName('Enlace');
// console.log(listaClaseEnlace[0]);

// document.getElementById('btn1').addEventListener('click', e => { alert("Saludar") });

// /// SELECTOR DE CSS DE ID: #
// console.log(document.querySelector('#btn1'));

// /// SELECTOR DE CSS DE CLASE: .
// console.log(document.querySelectorAll('.Enlace'));

// /// TODOS LOS DE LA CLASE ENLACE PERO QUE ESTEN DENTRO DE UN DIV
// console.log(document.querySelectorAll('div .Enlace'));

// console.log(document.querySelectorAll('#p'));


///Obtiene el atributo por el id titulo
const titulo = document.getElementById('titulo');

console.log(titulo.getAttribute('id'));

///setea el atributo id como title
titulo.setAttribute('id', 'title');

console.log(titulo.getAttribute('id'));

///devuelve un booleano para saber si posee el atributo
console.log(titulo.hasAttribute('id'));

console.log(titulo.hasAttribute('class'));

if (!titulo.hasAttribute('id')) { titulo.removeAttribute('id'); }
console.log(titulo.hasAttribute('id'));

/// DEVUELVE UNA LISTA DE
console.log(titulo.classList);

///DEVUELVE UN TEXTO CON EL NOMBRE DE LA CLASE DEL ELEMENTO
console.log(titulo.className);

const Google = document.getElementById('Google');
titulo.classList.add('letrasVerdes', 'azul');

const boton = document.getElementById('btn1');

boton.addEventListener('click',
    e => {
        Google.classList.toggle('link');
        Google.classList.toggle('letrasVerdes');
    });

// const $parrafo3 = document.getElementsById('p3');
// $parrafo3.setAttribute('style', "background-color: pink");

const $info = document.getElementById('info');
// $info.innerText = "Hola Munde";
// $info.innerHTML = "<h2> Hola Mundo <h2>";

const unH2 = document.createElement('h2');
let text = document.createTextNode('Esto es un titulo h2');
unH2.appendChild(text);

$info.appendChild(unH2);
unH2.textContent = "Chau mundo";
unH2.classList.add('rojo');

const $link = document.getElementById('Clarin');

$link.classList.replace('rojo',
    'azul');
console.log(titulo.dataset.descripcion);
titulo.dataset.descripcion = "Esto es el nuevo titule";
console.log(titulo.dataset.descripcion);

const $parrafos = document.getElementById('parrafos');

console.log($parrafos);

console.log($parrafos.childNodes);

console.log($parrafos.children);

const hijos = $parrafos.children;

console.log(hijos[0]);

console.log(hijos['p1']);

const listaParrafos = [...hijos];

listaParrafos.forEach(el => { console.log(el) });

console.log($parrafos.firstChild);

console.log($parrafos.firstElementChild);

console.log($parrafos.lastElementChild);

console.log($parrafos.lastElementChild.nodeType);

console.log($parrafos.parentNode);

$parrafos.hasChildNodes;

$parrafos.removeChild;
$parrafos.removeChild($parrafos.firstElementChild);
$parrafos.appendChild($parrafos.firstElementChild);





///<------------------------------------------------->

console.log(1234);
console.log(JSON.stringify(1234));
console.log(JSON.parse("1234"));

const p1 = {
    nombre: "Juan",
    edad: 34,
    nada: true
}

console.log(p1);
console.log(JSON.stringify(p1));

let x = JSON.stringify(p1);

const objetoPersona = JSON.parse(x);

console.log(objetoPersona);


/// LO UNICO QUE PUEDO GUARDAR EN EL LOCAL STORAGE ES TEXTO PARA ELLO USAMOS EL STRINGIFY DEL JSON

///LIMPIA TODO EL LOCAL STORAGE
localStorage.clear
    ///REMUEVE 1 ITEM DEL LOCAL STORAGE
localStorage.removeItem
    ///AÑADE UN OBJETO AL LOCAL STORAGE
localStorage.setItem("unaPersona", x);
///LEE UN OBJETO DEL LOCAL STORAGE
// localStorage.getItem();

const otraPersona = localStorage.getItem("unaPersona");
const tercerPersona = JSON.parse(localStorage.getItem("unaPersona"));

console.log(otraPersona);
console.log(tercerPersona);
const autos = [{ "marca": "Volvo" },
    { "marca": "Toyota" },
    { "marca": "Jeep" },
    { "marca": "Hyundai" },
    { "marca": "GMC" },
    { "marca": "Chrysler" },
    { "marca": "Hyundai" },
    { "marca": "Saturn" },
    { "marca": "Bentley" },
    { "marca": "Honda" },
    { "marca": "Suzuki" },
    { "marca": "BMW" },
    { "marca": "Toyota" },
    { "marca": "Honda" },
    { "marca": "Nissan" },
    { "marca": "Mazda" },
    { "marca": "Buick" },
    { "marca": "Infiniti" },
    { "marca": "Saab" },
    { "marca": "Buick" }
];
const divInfo = document.getElementById("info");

divInfo.appendChild(crearLista(autos));



function crearLista(vec) {

    const lista = document.createElement('ul');
    vec.forEach(auto => {
        const item = document.createElement('li');
        const texto = document.createTextNode(auto.marca);
        item.appendChild(texto);
        lista.appendChild(item);

    });
    return lista;
}



//// HACER 10 personas con id, nombre, apellido, mail y genero
///array de personas


// const listaPersonas = [ ///agregar los valores del json];

// hacer una funcion que se llame obtenerTabla {recibe el vector (lista de personas), lo cual nos permitirá crear una tabla, dentro de la misma generar tablerow, tr, acceder por valor o clave. DEVUELVE UN OBJETO TABLE CON TODOS LOS DATOS DE LA PERSONA CARGADOS