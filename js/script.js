// ========== SISTEMA DE NAVEGACIÓN ENTRE VISTAS ==========
"use strict";

function irVista(vista) {
    // Ocultar todas las vistas
    const vistas = document.querySelectorAll('.vista');
    vistas.forEach(v => v.classList.remove('activa'));
    
    // Mostrar la vista seleccionada
    const vistaSeleccionada = document.getElementById('vista-' + vista);
    if (vistaSeleccionada) {
        vistaSeleccionada.classList.add('activa');
        
        // Inicializar lógica específica de la vista
        if (vista === 'tarjeta2') {
            inicializarGaleriaFotos();
        } else if (vista === 'tarjeta3') {
            inicializarGaleriaCanciones();
        } else if (vista === 'tarjeta4') {
            inicializarCarrusel();
        } else if (vista === 'tarjeta5') {
            inicializarCartaVictoriana();
        }
    }
}

function volverMenu() {
    const vistas = document.querySelectorAll('.vista');
    vistas.forEach(v => v.classList.remove('activa'));
    document.getElementById('vista-menu').classList.add('activa');
    crearCorazonesFlotantes(3);
}

// ========== VISTA 2: ÁLBUM DE FOTOS ==========

// Array de fotos (placeholder - el usuario agregará las suyas)
const fotos = [
    { src: './assets/imagenes/1.jpg', mensaje: 'El primer día que te dije, te amo...' },
    { src: './assets/imagenes/2.jpg', mensaje: 'Uno besito bonito :3' },
    { src: './assets/imagenes/3.jpg', mensaje: 'Esas risas espontaneas' },
    { src: './assets/imagenes/4.jpg', mensaje: 'Contigo todo es mejor' },
    { src: './assets/imagenes/5.jpg', mensaje: 'La tranquilidad que me das' },
    { src: './assets/imagenes/6.jpg', mensaje: 'En tus brazos me siento seguro' },
    { src: './assets/imagenes/7.jpg', mensaje: 'Ese día me senti tan bien contigo, que supe que definitivamente ahi queria estar.' },
    { src: './assets/imagenes/8.jpg', mensaje: 'Te extraño incluso cuando estás aquí' },
    { src: './assets/imagenes/9.jpg', mensaje: 'Mi lugar favorito es contigo' },
    { src: './assets/imagenes/10.jpg', mensaje: 'Eres mi razón de sonreír' },
    { src: './assets/imagenes/11.jpg', mensaje: 'Tu forma de ser, tan linda y única' },
    { src: './assets/imagenes/12.jpg', mensaje: 'Esos momentos tan random que tenemos juntos' },
    { src: './assets/imagenes/13.jpg', mensaje: 'Contigo descubrí qué es amar' },
    { src: './assets/imagenes/14.jpg', mensaje: 'Eres mi mejor decisión' },
    { src: './assets/imagenes/15.jpg', mensaje: 'Juntos escribimos nuestra historia' },
    { src: './assets/imagenes/16.jpg', mensaje: 'El día que me dijiste, SI.' },
    { src: './assets/imagenes/17.jpg', mensaje: 'Te llevare mariachis con esta cancion<3' },
    { src: './assets/imagenes/18.jpg', mensaje: 'Lo único que quiero ver al despertar.' },
    { src: './assets/imagenes/19.jpg', mensaje: 'Nuestro amor es para siempre' },
    { src: './assets/imagenes/20.jpg', mensaje: 'Te amo más de lo que puedo expresar, y esos detallitos son una muestra de ello.' },
    { src: './assets/imagenes/21.jpg', mensaje: 'Mi unico ahnelo es protegerte.' },
    { src: './assets/imagenes/22.jpg', mensaje: 'Eres mi infinito' },
    { src: './assets/imagenes/23.jpg', mensaje: 'Cada momento contigo es magia, nuestro amor es atemporal.' },
    { src: './assets/imagenes/24.jpg', mensaje: 'Eres el amor de mi vida' },
    { src: './assets/imagenes/25.jpg', mensaje: 'Quiero alegrar tanto tu corazón, como tu pancita :3' },
    { src: './assets/imagenes/26.jpg', mensaje: 'Contigo descubrí el paraíso' },
    { src: './assets/imagenes/27.jpg', mensaje: 'Eres mi sueño hecho realidad' },
    { src: './assets/imagenes/28.jpg', mensaje: 'Cada segundo contigo es precioso' },
    { src: './assets/imagenes/29.jpg', mensaje: 'Te amaré por toda la eternidad, gracias por mostrarme el amor tan puro y bello.' },
    { src: './assets/imagenes/30.jpg', mensaje: 'Eres mi mayor bendición' }
];

function inicializarGaleriaFotos() {
    const galeria = document.getElementById('galeria-fotos');
    galeria.innerHTML = '';
    
    fotos.forEach((foto, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-foto';
        tarjeta.innerHTML = `
            <img src="${foto.src}" alt="Foto ${index + 1}" 
                 onerror="this.style.display='none'" 
                 onclick="mostrarMensajoFoto(${index})">
            <div style="background: #ccc; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #666; font-size: 0.9em; text-align: center; padding: 10px;">Foto ${index + 1}</div>
        `;
        galeria.appendChild(tarjeta);
    });
    
    // Mostrar primer mensaje por defecto
    mostrarMensajoFoto(0);
}

function mostrarMensajoFoto(index) {
    document.getElementById('mensaje-foto').textContent = fotos[index].mensaje;
    document.getElementById('foto-principal').src = fotos[index].src;
    // Cambiar fondo de la imagen si existe
    if (fotos[index].src !== '#') {
        document.querySelector('.fondo-fotos').style.backgroundImage = `url('${fotos[index].src}')`;
    }
}

// ========== VISTA 3: MÚSICA Y CANCIONES ==========

const canciones = [
    { nombre: 'Ya no vivo por vivir', emoji: '🎶', mensaje: 'Siempre que la escucho pienso en lo bonito que estamos haciendo, y lo lindo que fue este proceso' },
    { nombre: 'Eres', emoji: '🎵', mensaje: 'Eres esto y mas, te amo mucho' },
    { nombre: 'Esos ojitos negros', emoji: '🎼', mensaje: 'Siempre pienso en tus ojitos cuando suena esta cancion' },
    { nombre: 'Cada dia que pasa', emoji: '🎹', mensaje: 'Cada día que pasa, mi amor por ti crece más y más' },
    { nombre: 'Nuestro sueño', emoji: '🎸', mensaje: 'Espero que podamos estar juntos y realizar nuestro sueño, juntitos' },
    { nombre: 'Amame', emoji: '🥁', mensaje: 'Amame con todo tu ser, asi como yo lo hago contigo <3' },
    { nombre: 'Tu y yo', emoji: '🎺', mensaje: 'Tu y yo estamos destinados a tener el amor mas lindo' },
    { nombre: 'Only you', emoji: '🎷', mensaje: 'You are my one and only great love, the love of my life' },
    { nombre: 'Tengo ganas', emoji: '🎤', mensaje: 'Tengo muchas ganas de amarte, darte mi amor y mi cariño' },
    { nombre: 'Besame', emoji: '🎧', mensaje: 'Caigamos en un beso profundo, sin fin' },
    { nombre: 'Reina Pepiada', emoji: '🎶', mensaje: 'Eres todo lo que quiero o(〃＾▽＾〃)o' },
    { nombre: 'Kitipun', emoji: '🎵', mensaje: 'Contigo todo suena a amor' },
    { nombre: 'Not By The Moon', emoji: '🎼', mensaje: 'Mi compromiso contigo es eterno' },
    { nombre: 'How deep is your love', emoji: '🎹', mensaje: 'No puedes imaginar lo profundo que es mi amor por ti' },
    { nombre: 'Piel canela', emoji: '🎸', mensaje: 'Tu piel canela me pone bien lokotron' },
    { nombre: 'La gloria eres tú', emoji: '🥁', mensaje: 'Los boleros siempre me recuerdan a ti, mi amor' },
    { nombre: 'Sabes una cosa', emoji: '🎺', mensaje: 'Te lleavre unos mariachis con esta cancion, no se te olvide jjjj' },
    { nombre: 'Do better', emoji: '🎷', mensaje: 'Siempre quiero hacerlo mejor por ti' },
    { nombre: 'Como abeja al panal', emoji: '🎤', mensaje: 'Cuando la escucho siento que estoy viviendola contigo' },
    { nombre: 'My one and only love', emoji: '🎧', mensaje: 'Nuestro amor es una canción sin fin, eres lo que siempre yo soñé' },
    { nombre: 'Cama y mesa', emoji: '🎶', mensaje: 'Quiero ser tu cancion desde el principio al fin' },
    { nombre: 'Hopelessly devoted to you', emoji: '🎵', mensaje: 'Contigo descubrí la música del amor, y lo bonito que se siente amar tan sincera y devotamente a alguien' },
    { nombre: 'For life', emoji: '🎼', mensaje: 'I will love you for life' },
    { nombre: 'O tú o ninguna', emoji: '🎹', mensaje: 'Nuestro amor suena a eternidad, y no quiero a nadie más, o tú o ninguna' }
];

// Rutas de las imágenes de las canciones (Cancion1..Cancion24) en assets/Canciones
const imagenesCanciones = [
    './assets/Canciones/Cancion1.jpg',
    './assets/Canciones/Cancion2.jpg',
    './assets/Canciones/Cancion3.jpg',
    './assets/Canciones/Cancion4.jpg',
    './assets/Canciones/Cancion5.png',
    './assets/Canciones/Cancion6.webp',
    './assets/Canciones/Cancion7.jpg',
    './assets/Canciones/Cancion8.jpg',
    './assets/Canciones/Cancion9.png',
    './assets/Canciones/Cancion10.jpg',
    './assets/Canciones/Cancion11.jpg',
    './assets/Canciones/Cancion12.jpg',
    './assets/Canciones/Cancion13.jpg',
    './assets/Canciones/Cancion14.jpg',
    './assets/Canciones/Cancion15.jpg',
    './assets/Canciones/Cancion16.jpg',
    './assets/Canciones/Cancion17.jpg',
    './assets/Canciones/Cancion18.jpg',
    './assets/Canciones/Cancion19.jpg',
    './assets/Canciones/Cancion20.jpg',
    './assets/Canciones/Cancion21.jpg',
    './assets/Canciones/Cancion22.jpg',
    './assets/Canciones/Cancion23.jpg',
    './assets/Canciones/Cancion24.jpg'
];

// Asignar la ruta de imagen a cada objeto de la lista de canciones
canciones.forEach((c, i) => {
    c.imagen = imagenesCanciones[i] || '';
});

function inicializarGaleriaCanciones() {
    const galeria = document.getElementById('galeria-canciones');
    const buscador = document.getElementById('buscador-canciones');
    const imgCentral = document.getElementById('img-portada-central');

    // renderiza la galería según un filtro (nombre contiene query)
    function render(query = '') {
        galeria.innerHTML = '';
        const q = query.trim().toLowerCase();
        const lista = canciones.filter(c => c.nombre.toLowerCase().includes(q));

        lista.forEach((cancion, index) => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-cancion';
            tarjeta.innerHTML = `
                <div class="portada-cancion">
                    <img src="${cancion.imagen}" alt="${cancion.nombre}" onerror="this.style.display='none'; this.parentElement.querySelector('.emoji').style.display='block';">
                    <div class="emoji" style="display:none">${cancion.emoji}</div>
                </div>
                <div class="nombre-cancion">${cancion.nombre}</div>
            `;
            tarjeta.onclick = () => {
                const idx = canciones.indexOf(cancion);
                mostrarMensajeCancion(idx);
                // mostrar portada en área central
                if (cancion.imagen) {
                    imgCentral.src = cancion.imagen;
                    imgCentral.style.display = 'block';
                } else {
                    imgCentral.style.display = 'none';
                }
            };
            galeria.appendChild(tarjeta);
        });

        // Si hay elementos y no hay filtro, mostrar el primero por defecto
        if (lista.length > 0 && q === '') {
            const firstIdx = canciones.indexOf(lista[0]);
            mostrarMensajeCancion(firstIdx);
            if (lista[0].imagen) {
                imgCentral.src = lista[0].imagen;
                imgCentral.style.display = 'block';
            }
        } else if (lista.length === 0) {
            document.getElementById('mensaje-cancion').textContent = 'No se encontraron canciones.';
            imgCentral.style.display = 'none';
        }
    }

    // Attach buscador listener una vez
    if (buscador && !buscador.dataset.listener) {
        buscador.addEventListener('input', (e) => render(e.target.value));
        buscador.dataset.listener = '1';
    }

    render('');
}

function mostrarMensajeCancion(index) {
    document.getElementById('mensaje-cancion').textContent = canciones[index].mensaje;
}

// ========== VISTA 4: CARRUSEL Y CARTA ==========

const fotosCarrusel = Array(10).fill().map((_, i) => `./assets/imagenes/${i + 1}.jpg`);
let indiceCarrusel = 0;

function inicializarCarrusel() {
    cambiarCarrusel(0);
}

function cambiarCarrusel(direccion) {
    indiceCarrusel += direccion;
    if (indiceCarrusel < 0) indiceCarrusel = fotosCarrusel.length - 1;
    if (indiceCarrusel >= fotosCarrusel.length) indiceCarrusel = 0;
    
    const carrusel = document.getElementById('carrusel-fotos');
    carrusel.style.backgroundImage = `url('${fotosCarrusel[indiceCarrusel]}')`;
}

function abrirCarta() {
    const cartaCerrada = document.getElementById('carta-cerrada');
    const cartaAbierta = document.getElementById('carta-abierta');
    
    cartaCerrada.style.display = 'none';
    cartaAbierta.classList.add('abierta');
    crearCorazonesFlotantes(20);
}

// ========== VISTA 5: CARTA VICTORIANA ==========

const textoVictoriano = `Mi amor eterno,

Mi amor, quiero apoyarte en tus metas, en tu vida, estar ahí para ti y ser tu apoyo incondicional.

Llora en mis brazos, ríe a mi lado, exploremos el mundo de la mano, quiero que además de ser mi novia, seas mi compañera.
Mi mejor amiga y esa luz en los días oscuros.

Las palabras no son suficientes para mostrarte todo el amor que te tengo, le doy gracias a Dios por ponerme en tu camino y por lo bonito que se siente amarte.


Perdón por los malos momentos y gracias por todos lo buenos, gracias por entenderme, por acariciarme, por siempre estar para mi y subirme el ánimo.
Quiero ver contigo el amanecer, pasar contigo un atardecer y ver juntos las estrellas, quiero ir a cenar luego de un día largo.

Quiero pasar por ti, ir a nuestro mundo, donde estemos solos tu y yo, cocinar algo y bailar mientras nuestros corazones se tocan en el calor de un abrazo.
Tengo mil planes para hacer, contigo. Mil momentos y experiencias que quiero vivir, solo que ahora algo cambio, y tú estás en esos planes.
Quiero vivir todo,  contigo, tu y yo, juntos contra el mundo.
Te amo más de lo que las palabras pueden expresar, y aunque no lo diga tan seguido, quiero que sepas que eres mi todo, mi razón de ser, mi felicidad.
Eres mi amor eterno, mi compañera de vida, mi mejor amiga, mi todo. Te amo con todo mi corazón, y siempre lo haré.

Con todo mi amor,
Tu punquinia.`;

let indiceTextoVictoriano = 0;

function inicializarCartaVictoriana() {
    const textoElement = document.getElementById('texto-victoriano');
    textoElement.innerHTML = '';
    indiceTextoVictoriano = 0;
    escribirCartaVictoriana();
}

function escribirCartaVictoriana() {
    const textoElement = document.getElementById('texto-victoriano');
    const velocidadEscritura = 30; // ms por carácter
    
    if (indiceTextoVictoriano < textoVictoriano.length) {
        textoElement.innerHTML += textoVictoriano[indiceTextoVictoriano].replace(/\n/g, '<br>');
        indiceTextoVictoriano++;
        setTimeout(escribirCartaVictoriana, velocidadEscritura);
    }
}

// ========== CORAZONES FLOTANTES ==========

function crearCorazonesFlotantes(cantidad = 1) {
    const contenedor = document.getElementById('contenedor-corazones-flotantes');
    if (!contenedor) return;
    
    const corazones = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-flotante';
        corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        corazon.style.left = Math.random() * window.innerWidth + 'px';
        corazon.style.animationDuration = (3 + Math.random() * 2) + 's';
        corazon.style.animationDelay = Math.random() * 0.5 + 's';
        
        contenedor.appendChild(corazon);
        
        setTimeout(() => corazon.remove(), 5000);
    }
}

// Crear corazones automáticamente en el menú
setInterval(() => {
    if (document.getElementById('vista-menu').classList.contains('activa')) {
        crearCorazonesFlotantes(1);
    }
}, 2000);

// ========== INICIO ==========

// Mensaje de autor eliminado para limpieza antes de subir a repositorio
