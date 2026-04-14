const alumnos = [
    { matricula: '001', nombre: 'Laura', calificacion: 9.5 },
    { matricula: '002', nombre: 'Carlos', calificacion: 5.0 },
    { matricula: '003', nombre: 'Diana', calificacion: 8.0 },
    { matricula: '004', nombre: 'Jorge', calificacion: 6.5 },
    { matricula: '005', nombre: 'Elena', calificacion: 10.0 }
];

// FUNCIONES PURAS
const esAprobado = (alumno) => alumno.calificacion >= 9.0;
const aElementoHTML = (alumno) => `<li><b>${alumno.nombre}
</b> - Calificación: ${alumno.calificacion}</li>`;

// ELEMENTOS DEL DOM
const boton = document.getElementById('btnProcesar');
const lista = document.getElementById('listaAprobados');

// FUNCIÓN DE RENDERIZADO
const renderizar = (arregloAlumnos) => {
    lista.innerHTML = arregloAlumnos.map(aElementoHTML).join('');
};

renderizar(alumnos);

boton.addEventListener('click', () => {
    
    /* CONTRASTE IMPERATIVO (Lo que NO hacemos hoy):
      let aprobados = [];
      for(let i = 0; i < alumnos.length; i++) {
          if(alumnos[i].calificacion >= 7.0) aprobados.push(alumnos[i]);
      }
    */

    // ENFOQUE DECLARATIVO: Qué queremos (filtrar) y lo mandamos a dibujar
    const alumnosAprobados = alumnos.filter(esAprobado);
    renderizar(alumnosAprobados);
    
    boton.disabled = true;
    boton.textContent = "Mostrando solo aprobados";
});