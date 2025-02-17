let eventos = [];

let arreglos = []; // Carga de información

const eventoNombre = document.querySelector('#eventoNombre');
const eventoFecha = document.querySelector('#eventoFecha');
const botonAdd = document.querySelector('#bAdd');
const eventosConteiner = document.querySelector('#eventosConteiner');

const json = cargar();

try {
    arreglos = JSON.parse(json);
    } catch (error){ 
        arreglos = [];   
    }
    eventos = arreglos ? [...arreglos]: [];

    renderizarEventos();

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  addEvent();
})

botonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    addEvent();
  })

function addEvent(){
    if (eventoNombre.value == "" || eventoFecha.value == ""){
        return;
    }

    if (fechaDiferencia(eventoFecha.value) < 0){
        return;
    }


    const  nuevoEvento = {
        id: (Math.random() * 100). toString(36).slice(3),
        nombre: eventoNombre.value,
        fecha: eventoFecha.value,
    };

    eventos.unshift(nuevoEvento);

    guardar(JSON.stringify(eventos));


    eventoNombre.value = ""; 

    renderizarEventos();

}

function fechaDiferencia(d){
    const fechaObjetivo = new Date(d)
    const hoy = new Date()
    const diferencia = fechaObjetivo.getTime() - hoy.getTime();
    const días = Math.ceil(diferencia / (1000 * 3600 * 24));
    return días;

} 

function renderizarEventos(){
    const eventosHTML = eventos.map(evento =>{
        return ` 
        <div class ="evento">
            <div class = "días" >
                <span class= "días-numeros">${fechaDiferencia(evento.fecha)}</span>
                <span class="días-texto ">días</span>

            </div>
            <div class="evento-nombre">${evento.nombre}</div>
            <div class="evento-fecha">${evento.fecha}</div>
            <div class="acciones" >
                <button class= "bBorrar" data-id="${evento .id}">Eliminar</button>
            </div>
        </div>
        `;

      
    })
    eventosConteiner.innerHTML = eventosHTML.join("");
    document.querySelectorAll('.bBorrar').forEach(button =>{
        button.addEventListener('click', e =>{
            const id = button.getAttribute('data-id');
            eventos = eventos.filter(evento => evento.id !== id);

            renderizarEventos();
        })
    })
}


function guardar(data){
    localStorage.setItem('items',data);

}

function cargar(){
    return localStorage.getItem("items");
}