const ol = document.querySelector(".ol");
const btnTraer = document.getElementById("btnTraer");
const spinner = document.getElementById("spinner");
const lista = document.getElementById("lista");

btnTraer.addEventListener("click", (e) => {
    traerPersonasFetch();
  
    setTimeout(() => {
        //DeletePersonas();
    }, 1000);
  });
  
  function crearSpinner() {
    const img = document.createElement("img");
    img.setAttribute("src", "../imagenes/rueda.gif");
    return img;
  }
  
  //buscar bien que hace esto, osea como esta enganchado
  const crearItems = (data) => { //crea una lista 
    const fragmento = document.createDocumentFragment();
  
    data.forEach((element) => {
      const item = document.createElement("li");
      item.textContent = `${element.nombre} ${element.email}`;
    fragmento.appendChild(item);
  });
  return fragmento;
};

async function traerPersonas(){

    try {
        const response = await axios.get("http://localhost:3000/personas");
        ol.appendChild(crearItems(response.data));
    } catch (error) {
        
        console.error(error);
    }

}

async function AltaPersonas(){

    const persona = {
        nombre: "cin",
        apellido: "zanoni",
        email: "cintu94@hotmail.com"
    }

    const config = {
        method : "POST",
        headers: {
            "content-type" : "application/json;charset=utf-8"
        },
        data: JSON.stringify(persona)
    }

    try {

        ol.innerHTML = "";//borra el contenido del html
        const response = await axios("http://localhost:3000/personas",config);
    } catch (error) {
        console.error(error);
    }  

}
async function AltaPersonas(){

    const persona = {
        nombre: "cin",
        apellido: "zanoni",
        email: "cintu94@hotmail.com"
    }

    const config = {
        method : "POST",
        headers: {
            "content-type" : "application/json;charset=utf-8"
        },
        data: JSON.stringify(persona)
    }

    try {

        ol.innerHTML = "";//borra el contenido del html
        const response = await axios("http://localhost:3000/personas",config);
    } catch (error) {
        console.error(error);
    }  

}

async function UpdatePersonas(){

    const id = 22;
    const persona = {
        nombre: "daniela",
        apellido: "zanoni",
        email: "daniela@hotmail.com"
    }

    const config = {
        method : "PUT",
        headers: {
            "content-type" : "application/json;charset=utf-8"
        },
        data: JSON.stringify(persona)
    }

    try {

        ol.innerHTML = "";//borra el contenido del html
        const response = await axios(`http://localhost:3000/personas/${id}`,config);
    } catch (error) {
        console.error(error);
    }  

}

async function DeletePersonas(){

    const id = 20;
  

    const config = {
        method : "DELETE",
        headers: {
            "content-type" : "application/json;charset=utf-8"
        },
       
    }

    try {

        ol.innerHTML = "";//borra el contenido del html
        const response = await axios(`http://localhost:3000/personas/${id}`,config);
    } catch (error) {
        console.error(error);
    }  

}

function traerPersonasFetch(){

    
        fetch("http://localhost:3000/personas")
        .then(response=> {
            if(!response.ok){
                return Promise.reject(response);
            }
            return response.json();
        })
        .then(data=>{
            ol.appendChild(crearItems(data));
        })
        .catch(error=>{
            console.error(error);
        })
        

}




