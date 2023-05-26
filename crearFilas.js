// Crear un elemento HTML por cada elemento del array de JSON
// Este código se repite con respecto al del Reporte General sólo que en este caso no hace falta eliminar
// la primera y tercera fila.

function crearFilas(jsonFiltrado) {
    jsonFiltrado.forEach(element => {
        const $firstName = document.createElement("div");
        const $lastName = document.createElement("div");
        const $email = document.createElement("div");
        const $curriculum = document.createElement("div");
        const $completed1 = document.createElement("div");
        const $coursesInCurriculum = document.createElement("div");
        const $completed2 = document.createElement("div");
    
        $firstName.className = "textoGenerado";
        $lastName.className = "textoGenerado";
        $email.className = "textoGenerado";
        $curriculum.className = "textoGenerado";
        $completed1.className = "textoGenerado";
        $coursesInCurriculum.className = "textoGenerado";
        $completed2.className = "textoGenerado";
    
        // Limpiar el texto del nombre de curricula
        const regex1 = /YPF |iFIX & Historian|[(]|[)]/g;
        const nuevoCurriculum = element["Curriculum/Series Title"].replace(regex1, "");
    
        $firstName.innerText = element["First Name"];
        $lastName.innerText = element["Last name"];
        $email.innerText = element["Email"];
        $curriculum.innerText = nuevoCurriculum;
        $completed1.innerText = element["Completed Courses"];
        $coursesInCurriculum.innerText = element["Courses in Curriculum"];
        $completed2.innerText = Math.round((element["Completed Courses"] / element["Courses in Curriculum"])*100) + "%"
    
        $contenedorTextoGenerado.appendChild($firstName);
        $contenedorTextoGenerado.appendChild($lastName);
        $contenedorTextoGenerado.appendChild($email);
        $contenedorTextoGenerado.appendChild($curriculum);
        $contenedorTextoGenerado.appendChild($completed1);
        $contenedorTextoGenerado.appendChild($coursesInCurriculum);
        $contenedorTextoGenerado.appendChild($completed2);
    });

    crearGraficoDeBarras(jsonFiltrado);
}
