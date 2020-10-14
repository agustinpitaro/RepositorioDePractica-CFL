let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnAutorMas = document.querySelector("#btnAutorMas");
btnAutorMas.addEventListener("click", autormas);
let btnDocUnAño = document.querySelector("#btnDocUnAño");
btnDocUnAño.addEventListener("click", docUnAño);
let btnTotal = document.querySelector("#btnTemaDeseado");
btnTotal.addEventListener("click", temaDeseado);


let documentos = [];

//###############

function agregar() {
    console.log("Funcion Agregar");
    let titulo = document.querySelector('#titulo').value;
    let autor = document.querySelector('#autor').value;
    let tema = document.querySelector('#tema').value;
    let fecha = document.querySelector('#fecha').value;
    let renglon = {
        "titulo": titulo,
        "autor": autor,
        "tema": tema,
        "fecha": fecha
    }
    documentos.push(renglon);
    mostrarTablaDocumentos(documentos);
}

//###############

function contadorOcurrencias(array){
    let obj = {};
    array.forEach(function(val){
        if (!obj[val])
            // create new property if property is not found
            obj[val] = 1;
        else
            // increment matched property by 1
            obj[val]++;
    });

    return Object.entries(obj);
}

//###############

function autormas(){
    console.log("funcion Autormas");
    let autores = [];
    documentos.forEach(elem => {
        autores.push(elem.autor) 
    })
    let sorted = contadorOcurrencias(autores).sort(function(a,b){
        return b[1] - a[1];
    });
    document.querySelector("#autormas").innerHTML =
        "<p>Autor con mas documentos: " + sorted[0][0] + "</p>";
}
//######################

function docUnAño() {
    console.log("funcion docUnAño");
    let documentosUnAño = [];
    let fechalimite = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    documentos.forEach(elem => {
        if(new Date(elem.fecha) < fechalimite)
            documentosUnAño.push(elem);
    })
    mostrarTablaDocumentos(documentosUnAño);
}

//######################

function temaDeseado() {
    console.log("funcion temaDeseado");
    let temaDeseado = document.querySelector('#temaDeseado').value;
    let documentosTema = [];
    documentos.forEach(elem =>{
        if(elem.tema == temaDeseado)
            documentosTema.push(elem);
    })
    mostrarTablaDocumentos(documentosTema);
}

//######################
function mostrarTablaDocumentos(doc) {
    html = "";
    for (let r of doc) {
        html += `
            <tr>
                <td>${r.titulo}</td>
                <td>${r.autor}</td>
                <td>${r.tema}</td>
                <td>${r.fecha}</td>
            </tr>
            `;
    }
    document.querySelector("#tblDocumentos").innerHTML = html;
}