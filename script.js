
const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const mensaje = document.getElementById("mensaje");

const frasesNo = ["Ni se te ocurra!",
    "EEEEH QUE TE CREES QUE HACES?",
    "Osea que no me quieres?",
    "Vale vale... con estas vamos?", 
    "Ya le has dicho que si a la otra?", 
    "Si me odias dimelo y acabamos antes",
    "Con que me quieres dejar...",
    "Todos iguales",
    "Infiel"
]

const frasesSi = ["Ya sabia que dirias que si",
    "No he dudado en ningun momento",
    "Te amo!!!",
    "Eres el mejor novio del mundo",
    "Vamos, dale al boton, porque dudas?",
    "Solo te falta un click"
]

let escalaActual = 1;

btnNo.addEventListener("mouseenter",()=>{
    escalaActual += 0.2;
    const fraseAleatoria = frasesNo[Math.floor(Math.random() * frasesNo.length)];
    mensaje.textContent = fraseAleatoria.toUpperCase();
    btnSi.style.padding = `${10 * escalaActual}px ${20 * escalaActual}px`;
    btnSi.style.fontSize = `${1 * escalaActual}rem`;
});

btnSi.addEventListener("mouseenter", ()=>{
    escalaActual+=0.2;
    const fraseAleatoria = frasesSi[Math.floor(Math.random() * frasesSi.length)];
    mensaje.textContent = fraseAleatoria.toUpperCase();
    btnSi.style.padding = `${10 * escalaActual}px ${20 * escalaActual}px`;
    btnSi.style.fontSize = `${1 * escalaActual}rem`;
});

btnSi.addEventListener("click", ()=>{
    window.location.href = "si.html";
})

btnNo.addEventListener("click", ()=>{
    window.location.href = "no.html";
})
