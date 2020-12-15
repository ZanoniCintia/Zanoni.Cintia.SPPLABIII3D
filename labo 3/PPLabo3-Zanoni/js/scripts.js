import crearTabla from "./tabla.js";
import Auto from "./autos.js";



let listaAutos;
let frmAutos;
let proximoId;
let divTabla;
let btnDelete;
let btnMostrar;


window.addEventListener('load', inicializarManejadores);




function inicializarManejadores(){


    listaAutos= obtenerElementos(listaAutos);
    proximoId=obtenerId();
    console.log(proximoId);
    divTabla = document.getElementById("divTabla");
    frmAutos = document.forms[0];
    frmAutos.addEventListener('submit', e=>{
        e.preventDefault();

        const nuevoAuto= obtenerElemento();
        if(nuevoAuto){
            listaAutos.push(nuevoAuto);
            proximoId++;
            guardarDatos();
            actualizarTabla();
        }

    })
    btnDelete = document.getElementById('btnDeleteList');
    btnDelete.addEventListener('click', function(e){
        e.preventDefault();
        deleteList();
        actualizarTabla();
    });

    btnMostrar = document.getElementById('btnMostrar');
    btnMostrar.addEventListener('click', function(e){
        actualizarTabla();
    })

    

}

function obtenerElementos(){
return JSON.parse(localStorage.getItem('autos')) || [];

}

function obtenerId(){
    return JSON.parse(localStorage.getItem('nextid')) || 0
}

function obtenerElemento(){


    const nuevoAuto= new Auto(proximoId,
    frmAutos.titulo.value,
    frmAutos.descripcion.value,
    frmAutos.precio.value,
    frmAutos.puertas.value,
    frmAutos.km.value,
    frmAutos.potencia.value
    );
    return nuevoAuto;
   
}

function guardarDatos(){
    localStorage.setItem('autos',JSON.stringify(listaAutos));
    localStorage.setItem('nextId', proximoId);
}

function actualizarTabla(){
    
    divTabla.innerHTML = "";
    divTabla.appendChild(crearTabla(listaAutos));
    
}



function deleteList(){
    localStorage.removeItem('autos');
    localStorage.removeItem('nextId');
    listaAutos = obtenerElementos();
    proximoId = obtenerId();
}



