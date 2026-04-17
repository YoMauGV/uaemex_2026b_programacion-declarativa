/*alert("Hola");

let a = 0;
for(let i = 0; i < 10; i++){
    a += i;
}
console.log(a);
alert(a);*/
const alumnos = [
    {
        nombre: "Juan",
        edad: 20,
        promedio: 8.5
    },
    {
        nombre: "Maria",
        edad: 17,
        promedio: 9.0
    },
    {
        nombre: "Pedro",
        edad: 21,
        promedio: 7.5
    }
];

//alert(alumnos);
console.log(alumnos);

//alert(alumnos[0].promedio);

// 1. Mayor de Edad (almenos 1 debe ser menor de 18 aNos)
const esMAyor = (alumno) => alumno.edad >= 18;
const mayores = alumnos.filter(esMAyor);
console.log(mayores);

// 2 Texto: Nombre tiene edad años
const texto = (alumno) => `${alumno.nombre} tiene ${alumno.edad} años`;
const textos = alumnos.map(texto);
console.log(textos);

// Tarea: PRomedio del grupo

// FElicitar a los que tiene 10.
