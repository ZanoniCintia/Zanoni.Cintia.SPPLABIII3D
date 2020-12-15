


export default function crearTabla(lista)
{
//devuelve tbody (adentro del th va td)
    const tabla= document.createElement('table');
    tabla.appendChild(crearCabecera(lista[0]));//funcion q como parametro reciba crear cabecera la cual espera un elemento de la lista 
    tabla.appendChild(crearCuerpo(lista));

    return tabla;
}

function crearCabecera(item)//item es un objeto y lo vamos a recorrer para leer la clave
{
//devuelve un thead (tr, th)
    const thead= document.createElement('thead');
    const tr= document.createElement('tr');

    for (const key in item) 
    {
        const th= document.createElement('th');
        const texto= document.createTextNode(key);
        th.appendChild(texto);
        tr.appendChild(th);

        //o se hace th.textContent =key;    
    }

    thead.appendChild(tr);
    return thead;

}

function crearCuerpo(lista)
{
    const tbody=document.createElement('tbody');
    lista.forEach(element => {
        const tr= document.createElement('tr'); 
        for (const key in element) 
        {
           const td = document.createElement('td');
           const texto = document.createTextNode(element[key]);
           td.appendChild(texto);

           tr.appendChild(td);//mete en el tr el td
        }
        
        if(element.hasOwnProperty('id')){
            tr.setAttribute('data-id', element['id']);
            //tr.dataset.id=element['id'];
        }
        
        agragarManejadorTR(tr);
        tbody.appendChild(tr);
    });

    return tbody;
}

function agragarManejadorTR(tr)
{   
    if(tr)
    {
        tr.addEventListener('click', function(e){
            //console.log(e.target);
           // alert(e.target.getAttribute('data-id'));
            //alert(e.target.dataset.id);}
            //e.stopPropagation();
            console.log(e);
           // alert(e.path[1].dataset.id);
            //alert(e.target.parent.dataset.id);
            alert(e.target.parentNode.dataset.id);
        }, true);
    }
    
}
function agragarManejadorTD(td)
{   
    if(td)
    {
        tr.addEventListener('click', function(e){
            console.log(e.target);
           // alert(e.target.getAttribute('data-id'));
            //alert(e.target.dataset.id);}
            console.log(e);
            alert(e.target.parentNode.dataset.id);
        });
    }
    
}