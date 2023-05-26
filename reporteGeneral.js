// Crear un elemento HTML por cada elemento del array de JSON
function generarReporteGeneral(sortedData) {
    let contador = 0;

    // sortedData.forEach(element => {
    //   if(contador == 3) contador = 0;

    //   // Crear elementos HTML 
    //   const $firstName = document.createElement("div");
    //   const $lastName = document.createElement("div");
    //   const $email = document.createElement("div");
    //   const $curriculum = document.createElement("div");
    //   const $completed1 = document.createElement("div");
    //   const $coursesInCurriculum = document.createElement("div");
    //   const $completed2 = document.createElement("div");

    //   // Asigno la clase que tendran los elementos generados
    //   $firstName.className = "textoGenerado";
    //   $lastName.className = "textoGenerado";
    //   $email.className = "textoGenerado";
    //   $curriculum.className = "textoGenerado";
    //   $completed1.className = "textoGenerado";
    //   $coursesInCurriculum.className = "textoGenerado";
    //   $completed2.className = "textoGenerado";

    //   // Limpiar el texto del nombre de curricula
    //   const regex1 = /YPF |iFIX & Historian|[(]|[)]/g;
    //   const nuevoCurriculum = element["Curriculum/Series Title"].replace(regex1, "");

    //   // Filtro nombre, apellido e email en HTML y NO en el JSON
    //   if(contador == 0 || contador == 2) {
    //       $firstName.innerText = " ";
    //       $lastName.innerText = " ";
    //       $email.innerText = " ";
    //   } else {
    //       $firstName.innerText = element["First Name"];
    //       $lastName.innerText = element["Last name"];
    //       $email.innerText = element["Email"];
    //   }
       
    //   // Seteo el texto que van a tener los textos generados
    //   $curriculum.innerText = nuevoCurriculum;
    //   $completed1.innerText = element["Completed Courses"];
    //   $coursesInCurriculum.innerText = element["Courses in Curriculum"];
    //   $completed2.innerText = Math.round((element["Completed Courses"] / element["Courses in Curriculum"])*100) + "%"

    //   // Agregar los elementos generados al elemento padre (que tiene id = contenedor-textoGenerado)
    //   $contenedorTextoGenerado.appendChild($firstName);
    //   $contenedorTextoGenerado.appendChild($lastName);
    //   $contenedorTextoGenerado.appendChild($email);
    //   $contenedorTextoGenerado.appendChild($curriculum);
    //   $contenedorTextoGenerado.appendChild($completed1);
    //   $contenedorTextoGenerado.appendChild($coursesInCurriculum);
    //   $contenedorTextoGenerado.appendChild($completed2);

    //   contador++

    // });
    crearFilas(sortedData, tipoDeReporte);

    if(tipoDeReporte == "ReporteGeneral") {
        mostrarResultados();
        mostrarBotones();
        calcularTotalInscriptos();
        crearArrayConPersonas();
        arrayResultados = calcularEstadisticas();
        crearGraficoDeTorta(arrayResultados)
        mostrarGraficoDeTorta();
    }
    
}

function mostrarResultados() {
    $resultadosContainer.className = "resultadosContainer";
}

function mostrarBotones() {
    $buttonContainer.className = "";
}

function calcularTotalInscriptos() {
    $totalInscriptos.innerText = sortedData.length / 3;
}

function crearArrayConPersonas() {
    let arrayProv = [];

    for(let i=0; i < sortedData.length; i++) {
        if(arrayProv.length == 4) {
            arrayProv = [];
        }

        if(arrayProv.length == 3) {
            arrayProv.push(sortedData[i]["Completed Courses"])
            arrayNombresConCursos.push(arrayProv)
        }

        if(arrayProv.length == 2) {
            arrayProv.push(sortedData[i]["Completed Courses"])           
        }

        if(arrayProv.length == 0) {
            arrayProv.push(sortedData[i]["First Name"] + " " + sortedData[i]["Last name"])
            arrayProv.push(sortedData[i]["Completed Courses"])            
        }
    }
}

function calcularEstadisticas() {
    let contadorAlMenosUno = 0;
    let contadorNingunCurso = 0;

    arrayNombresConCursos.map(elem => {
        if(elem[1] == 0 && elem[2] == 0 && elem[3] == 0) {
            contadorNingunCurso++
        } else contadorAlMenosUno++
    })

    $alMenosUno.innerText = contadorAlMenosUno
    $ningunCurso.innerText = contadorNingunCurso

    return [contadorAlMenosUno, contadorNingunCurso]
    
}

function mostrarGraficoDeTorta() {
    $pieChartContainer.className = "";
}