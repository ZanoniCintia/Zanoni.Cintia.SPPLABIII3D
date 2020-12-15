import crearTabla from "./tabla.js";
import Persona from "./persona.js";


//const btnTabla;
let listaPersonas;
let frmPersona;
let proximoId;
let divTabla;
let btnDelete;
let btnMostrar;
let btnEliminarPersona;

window.addEventListener('load', inicializarManejadores);




function inicializarManejadores(){


    listaPersonas= obtenerPersonas(listaPersonas);
    proximoId=obtenerId();
    console.log(proximoId);
    //console.log(listaPersonas);

    divTabla = document.getElementById("divTabla");
    frmPersona= document.forms[0];
    frmPersona.addEventListener('submit', e=>{
        e.preventDefault();

        const nuevaPersona= obtenerPersona();
        if(nuevaPersona){
            listaPersonas.push(nuevaPersona);
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

    btnEliminarPersona = document.getElementById('btnEliminar');
    btnEliminarPersona.addEventListener('click',function(e) {
        
    })

}

function obtenerPersonas(){
return JSON.parse(localStorage.getItem('gente')) || [];

}

function obtenerId(){
    return JSON.parse(localStorage.getItem('nextid')) || 0
}

function obtenerPersona(){


    const nuevaPersona= new Persona(proximoId,
    frmPersona.nombre.value,
    document.querySelector('#txtApellido').value,
    document.getElementById("txtEmail").value,
    frmPersona.gender.value
    );
    return nuevaPersona;
    //listaPersonas.push(nuevaPersona);
}

function guardarDatos(){
    localStorage.setItem('gente',JSON.stringify(listaPersonas));
    localStorage.setItem('nextId', proximoId);
}

function actualizarTabla(){
    
    divTabla.innerHTML = "";
    divTabla.appendChild(crearTabla(listaPersonas));
    
}

export default function testear()
{
    var aux= localStorage.getItem('gente');
    console.log(aux);
}

function deleteList(){
    localStorage.removeItem('gente');
    localStorage.removeItem('nextId');
    listaPersonas = obtenerPersonas();
    proximoId = obtenerId();
}






/*btnTabla.addEventListener('click', function(){
    const divtabla = document.getElementById('divtabla'); //boton tabla

    divtabla.appendChild(crearTabla(listaPersonas));
    //console.log(e);
})

/**
 * console.log(frmPersona.nombre.value);
        console.log(document.querySelector('#txtApellido').value);//ej
        console.log(document.getElementById("txtEmail").value);//ej
        console.log(frmPersona.gender.value);
 */

/*let listaPersonas = [{"id":1,"first_name":"Feliza","last_name":"Corser","email":"fcorser0@google.es","gender":"Female"},
{"id":2,"first_name":"Nial","last_name":"Barnardo","email":"nbarnardo1@wisc.edu","gender":"Male"},
{"id":3,"first_name":"Tish","last_name":"D'Costa","email":"tdcosta2@miitbeian.gov.cn","gender":"Female"},
{"id":4,"first_name":"Kiel","last_name":"Switsur","email":"kswitsur3@php.net","gender":"Male"},
{"id":5,"first_name":"Ashlin","last_name":"Corderoy","email":"acorderoy4@amazonaws.com","gender":"Male"},
{"id":6,"first_name":"Carline","last_name":"Francisco","email":"cfrancisco5@loc.gov","gender":"Female"},
{"id":7,"first_name":"Josey","last_name":"Cowl","email":"jcowl6@ycombinator.com","gender":"Female"},
{"id":8,"first_name":"Kip","last_name":"Serrier","email":"kserrier7@huffingtonpost.com","gender":"Male"},
{"id":9,"first_name":"Dillie","last_name":"Finnes","email":"dfinnes8@google.com.au","gender":"Male"},
{"id":10,"first_name":"Alain","last_name":"Daykin","email":"adaykin9@weibo.com","gender":"Male"},
{"id":11,"first_name":"Diane-marie","last_name":"Hannond","email":"dhannonda@yale.edu","gender":"Female"},
{"id":12,"first_name":"Korey","last_name":"Tuma","email":"ktumab@macromedia.com","gender":"Male"},
{"id":13,"first_name":"Jae","last_name":"Hendrick","email":"jhendrickc@aol.com","gender":"Male"},
{"id":14,"first_name":"Bronnie","last_name":"Kubyszek","email":"bkubyszekd@trellian.com","gender":"Male"},
{"id":15,"first_name":"Janaya","last_name":"Wilber","email":"jwilbere@fastcompany.com","gender":"Female"},
{"id":16,"first_name":"Paten","last_name":"Bradburne","email":"pbradburnef@skyrock.com","gender":"Male"},
{"id":17,"first_name":"Bartlet","last_name":"Beelby","email":"bbeelbyg@cbslocal.com","gender":"Male"},
{"id":18,"first_name":"Leila","last_name":"Bachelor","email":"lbachelorh@elpais.com","gender":"Female"},
{"id":19,"first_name":"Findlay","last_name":"Puller","email":"fpulleri@hc360.com","gender":"Male"},
{"id":20,"first_name":"Worthington","last_name":"Ivanin","email":"wivaninj@techcrunch.com","gender":"Male"}]
const btnTabla=document.getElementById('btntabla');
btnTabla.addEventListener('click', function(){
    const divtabla = document.getElementById('divtabla');

    divtabla.appendChild(crearTabla(listaPersonas));
    //console.log(e);
})*/

/*const btnTabla = document.getElementById('btntabla');


btnTabla.addEventListener('click', function(){
    const divtabla = document.getElementById('divtabla'); //boton tabla

    divtabla.appendChild(crearTabla(listaPersonas));
    //console.log(e);
})*/
