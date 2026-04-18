// URL de la API a consumir
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Funciones Puras
const tieneCorreoBiz = (usuario) => usuario.email.endsWith('.biz');

const aTarjetaHTML = (usuario) => `
    <article class="tarjeta">
        <h3>${usuario.name}</h3>
        <p><b>Email:</b> ${usuario.email}</p>
        <p><b>Compañia:</b> ${usuario.company.name}</p>
    </article>
`;

// Elementos del DOM
const btnCargar = document.getElementById('btnCargar');
const directorio = document.getElementById('directorio');

// Función para cargar (renderizado)
const renderizar = (htmlString) => {
    directorio.innerHTML = htmlString;
};

// Cargar Datos
btnCargar.addEventListener('click', () => {
    btnCargar.textContent = 'Cargando...';
    btnCargar.disabled = true;
    
    fetch(API_URL)
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            const directorioHTML = usuarios
                .filter(tieneCorreoBiz)
                .map(aTarjetaHTML)
                .join('');
            renderizar(directorioHTML);
            btnCargar.textContent = 'Datos Cargados';
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            btnCargar.textContent = 'Error al cargar datos';
            renderizar('<p style="color: red;">Error al cargar datos.</p>');
        });
});


