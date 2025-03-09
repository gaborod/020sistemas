// Pensum electivas extrinsecas

var rfi = 0;
var fri_load = false;

window.addEventListener('load', crearElectivas())

const divContenedor = document.getElementById('contenedor')
const cssDivNivel = "data-cuerpo"
const cssAMateria = "data-materia"



function crearElectivas() {
    console.log("Cargando electivas extrinsecas...")    
    cargarMaterias();       
}

async function cargarMaterias() {
    try{
      const respuesta = await fetch('electivas.json')
      if(!respuesta.ok){
        throw new Error(`HTTP error! status: ${respuesta.status}`);
      }
      renderMaterias(await respuesta.json()); // Extracting data as a JSON Object from the response              
    }catch(error){
      
    }        
}

function renderMaterias(data){
    
  for(let i in data.niveles){
    let semestre = data.niveles[i]
    // Semestre o nivel    
    let divSemestre = document.createElement("div");
    divSemestre.setAttribute("class", "nivel");
    divSemestre.setAttribute(cssDivNivel, "");

    // Título número de semestre
    let titSemestre = document.createElement("h2");
    //console.log(semestre)
    titSemestre.innerText = semestre.nombre
		titSemestre.setAttribute(cssDivNivel, "");
    divSemestre.appendChild(titSemestre);

    // materias
    let divMaterias = document.createElement("div");
    divMaterias.setAttribute("class", "nivel");
    divMaterias.setAttribute(cssDivNivel, "");

    // Se agregan las materias del semestre
    for(let m in semestre.materias){
      let materia = semestre.materias[m]
      //console.log(materia.tipo + " - " + materia.nombre + " - " + materia.codigo)
      
        let aMateria = document.createElement("a");
        if(materia.tipo === "VA"){
          aMateria.setAttribute("class", "vacio")                  
        }else{
          aMateria.id = materia.nombre
          aMateria.setAttribute("class", "materia")
          aMateria.setAttribute("ref", materia.ref)
          aMateria.setAttribute("data-name", materia.nombre)
          aMateria.setAttribute("data-type", materia.tipo)
          aMateria.setAttribute("data-credits", materia.creditos)

          switch(materia.tipo){
            case "VA":
            case "EX":
            case "AI":
              aMateria.setAttribute("data-code", "")
              break;
            default:
              aMateria.setAttribute("data-code", `${materia.codigo}`)
          }          
          aMateria.setAttribute(cssAMateria, "")
          // Creación del recuadro de información
          let divMatCod = document.createElement("div");
          divMatCod.setAttribute("id", "aCod")
          divMatCod.setAttribute("class", "cod")
          divMatCod.setAttribute(cssAMateria, "")
          divMatCod.innerText = `Código: ${materia.codigo}`
         
          
          let divMatCred = document.createElement("div")
          divMatCred.setAttribute("id", "aCred")
          divMatCred.setAttribute("class", "creditos")
          divMatCred.setAttribute(cssAMateria, "")
          divMatCred.innerText = `Créditos: ${materia.creditos}`          
          let divHoras = document.createElement("div")          
          divHoras.setAttribute("class", "horas")
          divHoras.setAttribute(cssAMateria, "")
          
            let divTD = document.createElement("div")
            divTD.setAttribute("id", "aTD")
            divTD.setAttribute("class", "directo")
            divTD.setAttribute(cssAMateria, "")            
            if(materia.trabajoDirecto === undefined){
              divTD.innerText = "TD: "
            }else{
              divTD.innerText = `TD: ${materia.trabajoDirecto}`
            }
            let divTC = document.createElement("div")
            divTC.setAttribute("id", "aTC")
            divTC.setAttribute("class", "colaborativo")
            divTC.setAttribute(cssAMateria, "")                      
            if(materia.trabajoColaborativo === undefined){
              divTC.innerText = "TC: "
            }else{
              divTC.innerText = `TC: ${materia.trabajoColaborativo}`
            }            
            let divTA = document.createElement("div")
            divTA.setAttribute("id", "aTA")
            divTA.setAttribute("class", "autonomo")
            divTA.setAttribute(cssAMateria, "")
            if(materia.trabajoAutonomo === undefined){
              divTA.innerText = "TA: "
            }else{
              divTA.innerText = `TA: ${materia.trabajoAutonomo}`
            }            
            divHoras.appendChild(divTD);
            divHoras.appendChild(divTC);
            divHoras.appendChild(divTA);

          let divNombre = document.createElement("div")
          divNombre.setAttribute("id", "aNombre")
          divNombre.setAttribute("class", `nombre ${materia.tipo}`)
          divNombre.setAttribute(cssAMateria, "")
          divNombre.setAttribute("data-astro-transition-scope", "astro-erxgo55w-3")          
          divNombre.innerText = `${materia.nombre}`

          aMateria.appendChild(divMatCod)
          aMateria.appendChild(divMatCred)
          aMateria.appendChild(divHoras)
          aMateria.appendChild(divNombre)                   
        }

        if(materia.tipo != "VA"){
          aMateria.addEventListener("click", (event)=>{                    
            construirDialogo(materia)
            //dialogo.showModal();
          })
        }
        //console.log(aMateria)
        // añade el elemento A creado y su contenido al DOM de divmateria
        divMaterias.append(aMateria)                
    }
    divSemestre.append(divMaterias)    

    // añade el elemento creado y su contenido al DOM         
    divContenedor.append(divSemestre)    
  }    
 
}

