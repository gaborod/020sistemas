// Pensum actual 335

var rfi = 0;
var fri_load = false;

window.addEventListener('load', crearPensum())

const divPensum = document.getElementById('pensum')
const cssDivNivel = "data-cuerpo"
const cssAMateria = "data-materia"

const dialogo = document.getElementById('dialogo')
const btnClose = document.getElementById('btnClose')
const btnRF0 = document.getElementById('rf0')
btnRF0.classList.add('ruta-seleccionada');
const btnRF1 = document.getElementById('rf1')
const btnRF2 = document.getElementById('rf2')
const btnRF3 = document.getElementById('rf3')
const btnRF4 = document.getElementById('rf4')
const btnRF5 = document.getElementById('rf5')

function desactivacionRF(){
  btnRF0.classList.remove('ruta-seleccionada'); 
  btnRF1.classList.remove('ruta-seleccionada'); 
  btnRF2.classList.remove('ruta-seleccionada'); 
  btnRF3.classList.remove('ruta-seleccionada'); 
  btnRF4.classList.remove('ruta-seleccionada'); 
  btnRF5.classList.remove('ruta-seleccionada'); 
}

btnClose.addEventListener('click', ()=>{
  dialogo.close();
})

btnRF0.addEventListener('click', ()=>{
  desactivacionRF()
  btnRF0.classList.add('ruta-seleccionada');   
  rfi = 0;
  reemplazarMateriasORF();
})

btnRF1.addEventListener('click', ()=>{
  desactivacionRF()
  btnRF1.classList.add('ruta-seleccionada'); 
  rfi = 1;
  reemplazarMateriasORF();
})

btnRF2.addEventListener('click', ()=>{
  desactivacionRF()
  btnRF2.classList.add('ruta-seleccionada'); 
  rfi = 2;
  reemplazarMateriasORF();
})

btnRF3.addEventListener('click', ()=>{
  desactivacionRF()
  btnRF3.classList.add('ruta-seleccionada'); 
  rfi = 3;
  reemplazarMateriasORF();
})

btnRF4.addEventListener('click', ()=>{
  desactivacionRF()
  btnRF4.classList.add('ruta-seleccionada');
  rfi = 4;
  reemplazarMateriasORF(); 
})

btnRF5.addEventListener('click', ()=>{
  desactivacionRF()
  btnRF5.classList.add('ruta-seleccionada'); 
  rfi = 5;
  reemplazarMateriasORF();
})


function crearPensum() {
    console.log("ejecutando...")    
    cargarMaterias();       
}

async function cargarMaterias() {
    try{
      const respuesta = await fetch('js/materias.json')
      if(!respuesta.ok){
        throw new Error(`HTTP error! status: ${respuesta.status}`);
      }
      construirPensum(await respuesta.json()); // Extracting data as a JSON Object from the response              
    }catch(error){
      
    }        
}

function construirPensum(data){
    
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

          switch(materia.tipo){
            case "VA":  //vacio
            case "EX":  //electiva extrínseca
            case "AI":  //cursos rf
              divMatCod.innerText = "Código: "
              break;
            default:
              divMatCod.innerText = `Código: ${materia.codigo}`
          }
          
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
    // Se agrega la tabla final general
    let tblSemestre = document.createElement("table")
    tblSemestre.setAttribute("class", "total")
    tblSemestre.setAttribute(cssDivNivel, "")
      let tblHead = document.createElement("thead")
      tblHead.setAttribute(cssDivNivel, "")
        let trH = document.createElement("tr")
        trH.setAttribute(cssDivNivel, "")
          let th1H = document.createElement("th")
          th1H.setAttribute("title", "Trabajo presencial directo")
          th1H.setAttribute(cssDivNivel, "")
          th1H.innerText = "TD"
          let th2H = document.createElement("th")
          th2H.setAttribute("title", "Trabajo cooperativo")
          th2H.setAttribute(cssDivNivel, "")
          th2H.innerText = "TC"
          let th3H = document.createElement("th")
          th3H.setAttribute("title", "Trabajo autónomo")
          th3H.setAttribute(cssDivNivel, "")
          th3H.innerText = "TA"
        trH.appendChild(th1H)
        trH.appendChild(th2H)
        trH.appendChild(th3H)
      tblHead.appendChild(trH)
    tblSemestre.appendChild(tblHead)

      let tblBody = document.createElement("tbody")
      tblBody.setAttribute(cssDivNivel, "")
        let tr1B = document.createElement("tr")
        tr1B.setAttribute(cssDivNivel, "")
          let tdB1 = document.createElement("td")
              tdB1.setAttribute(cssDivNivel, "")
          tdB1.innerText = semestre.trabajoDirecto
          let tdB2 = document.createElement("td")
              tdB2.setAttribute(cssDivNivel, "")
          tdB2.innerText = semestre.trabajoColaborativo
          let tdB3 = document.createElement("td")
              tdB3.setAttribute(cssDivNivel, "")
          tdB3.innerText = semestre.trabajoAutonomo
          tr1B.appendChild(tdB1)
          tr1B.appendChild(tdB2)
          tr1B.appendChild(tdB3)
        let tr2B = document.createElement("tr")
        tr2B.setAttribute(cssDivNivel, "")
          let tdCred = document.createElement("td")
          tdCred.setAttribute("colspan", "3")
          tdCred.setAttribute(cssDivNivel, "")
          tdCred.innerText = `Créditos ${semestre.creditos}`
        tr2B.appendChild(tdCred)
      tblBody.appendChild(tr1B)
      tblBody.appendChild(tr2B)
    tblSemestre.appendChild(tblBody)
    divSemestre.append(tblSemestre);

    // añade el elemento creado y su contenido al DOM         
    divPensum.append(divSemestre)    
  }    
  totalCreditos = document.getElementById("totalCreditos")
  totalCreditos.innerText = `Total de créditos: ${data.creditos}`   
}

async function construirDialogo(materia){
  let contenido = document.getElementById("dlgContenido")
  contenido.innerHTML = "" // Borra el contenido

  if(materia.tipo == "VA") return;
  let matH = document.getElementById(materia.nombre)
  let matRef = matH.getAttribute("ref")
  if(matRef == "") return;
  let tit = document.getElementById("dlgTitulo")

  if(materia.tipo == "AI"){
    tit.innerText = materia.nombre + " - Ruta de formación: " + datosRFO[rfi].rutaFormacion
  }else{
    tit.innerText = materia.nombre  
  }
  contenido.setAttribute("height", "100%")
  contenido.setAttribute("display", "block") 
  let iframe = document.createElement("iframe")
  // ejemplo para trabajo de grado
  // <iframe src="https://sgral.udistrital.edu.co/xdata/ca/acu_2015-038.pdf" type="application/pdf" width="100%" height="100%">
  iframe.setAttribute("src", materia.ref)
  //iframe.setAttribute("type", "application/pdf")
  iframe.setAttribute("width", "100%")
  iframe.setAttribute("height", "100%")
  iframe.setAttribute("display", "block") 
  iframe.setAttribute("border", "none")
  contenido.appendChild(iframe)
  //mostrar
  dialogo.showModal();
}

async function reemplazarMateriasORF(){

  if(!fri_load){
    try{
      const respuesta = await fetch('js/co_rf.json')
      if(!respuesta.ok){
        throw new Error(`HTTP error! status: ${respuesta.status}`);
      }
      datosRFO = await respuesta.json(); // Extracting data as a JSON Object from the response                    
      fri_load = true
    }catch(error){
      return;
    }
  }  
  //
  let dCO1_RF = document.getElementById('CURSO OBLIGATORIO I RF')  
  let aCod1 = datosRFO[rfi].materias[0].codigo
  let aCred1 = datosRFO[rfi].materias[0].creditos
  let aTD1 = datosRFO[rfi].materias[0].trabajoDirecto
  let aTC1 = datosRFO[rfi].materias[0].trabajoColaborativo
  let aTA1 = datosRFO[rfi].materias[0].trabajoAutonomo
  let aNombre1 = datosRFO[rfi].materias[0].nombre  
  let texto1 = `<div id="aCod" class="cod" data-materia="">Código: ${aCod1} </div><div id="aCred" class="creditos" data-materia="">Créditos: ${aCred1}</div><div class="horas" data-materia=""><div id="aTD" class="directo" data-materia="">TD: ${aTD1}</div><div id="aTC" class="colaborativo" data-materia="">TC: ${aTC1}</div><div id="aTA" class="autonomo" data-materia="">TA: ${aTC1} </div></div><div id="aNombre" class="nombre AI" data-materia="" data-astro-transition-scope="astro-erxgo55w-3">${aNombre1}</div>`
  dCO1_RF.innerHTML = texto1
  dCO1_RF.setAttribute("ref", datosRFO[rfi].materias[0].ref)

  let dCO2_RF = document.getElementById('CURSO OBLIGATORIO II RF')
  let aCod2 = datosRFO[rfi].materias[1].codigo
  let aCred2 = datosRFO[rfi].materias[1].creditos
  let aTD2 = datosRFO[rfi].materias[1].trabajoDirecto
  let aTC2 = datosRFO[rfi].materias[1].trabajoColaborativo
  let aTA2 = datosRFO[rfi].materias[1].trabajoAutonomo
  let aNombre2 = datosRFO[rfi].materias[1].nombre  
  let texto2 = `<div id="aCod" class="cod" data-materia="">Código: ${aCod2} </div><div id="aCred" class="creditos" data-materia="">Créditos: ${aCred2}</div><div class="horas" data-materia=""><div id="aTD" class="directo" data-materia="">TD: ${aTD2}</div><div id="aTC" class="colaborativo" data-materia="">TC: ${aTC2}</div><div id="aTA" class="autonomo" data-materia="">TA: ${aTC2} </div></div><div id="aNombre" class="nombre AI" data-materia="" data-astro-transition-scope="astro-erxgo55w-3">${aNombre2}</div>`
  dCO2_RF.innerHTML = texto2
  dCO2_RF.setAttribute("ref", datosRFO[rfi].materias[1].ref)

  let dCO3_RF = document.getElementById('CURSO OBLIGATORIO III RF')
  let aCod3 = datosRFO[rfi].materias[2].codigo
  let aCred3 = datosRFO[rfi].materias[2].creditos
  let aTD3 = datosRFO[rfi].materias[2].trabajoDirecto
  let aTC3 = datosRFO[rfi].materias[2].trabajoColaborativo
  let aTA3 = datosRFO[rfi].materias[2].trabajoAutonomo
  let aNombre3 = datosRFO[rfi].materias[2].nombre  
  let texto3 = `<div id="aCod" class="cod" data-materia="">Código: ${aCod3} </div><div id="aCred" class="creditos" data-materia="">Créditos: ${aCred3}</div><div class="horas" data-materia=""><div id="aTD" class="directo" data-materia="">TD: ${aTD3}</div><div id="aTC" class="colaborativo" data-materia="">TC: ${aTC3}</div><div id="aTA" class="autonomo" data-materia="">TA: ${aTC3} </div></div><div id="aNombre" class="nombre AI" data-materia="" data-astro-transition-scope="astro-erxgo55w-3">${aNombre3}</div>`
  dCO3_RF.innerHTML = texto3
  dCO3_RF.setAttribute("ref", datosRFO[rfi].materias[2].ref)

  let dCO4_RF = document.getElementById('CURSO OBLIGATORIO IV RF')
  let aCod4 = datosRFO[rfi].materias[3].codigo
  let aCred4 = datosRFO[rfi].materias[3].creditos
  let aTD4 = datosRFO[rfi].materias[3].trabajoDirecto
  let aTC4 = datosRFO[rfi].materias[3].trabajoColaborativo
  let aTA4 = datosRFO[rfi].materias[3].trabajoAutonomo
  let aNombre4 = datosRFO[rfi].materias[3].nombre  
  let texto4 = `<div id="aCod" class="cod" data-materia="">Código: ${aCod4} </div><div id="aCred" class="creditos" data-materia="">Créditos: ${aCred4}</div><div class="horas" data-materia=""><div id="aTD" class="directo" data-materia="">TD: ${aTD4}</div><div id="aTC" class="colaborativo" data-materia="">TC: ${aTC4}</div><div id="aTA" class="autonomo" data-materia="">TA: ${aTC4} </div></div><div id="aNombre" class="nombre AI" data-materia="" data-astro-transition-scope="astro-erxgo55w-3">${aNombre4}</div>`
  dCO4_RF.innerHTML = texto4
  dCO4_RF.setAttribute("ref", datosRFO[rfi].materias[3].ref)

}