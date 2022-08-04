let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

//MENU FUNCTIONALLITY

boton.addEventListener("click", function() {
    if (contador == 0) {
        enlaces.className = ('enlaces dos');
        contador = 1;
        const menu = document.querySelector(".menu");
        menu.classList.add("menunegro");
        const tel = document.querySelector(".tel");
        tel.classList.add("negro");
        setTimeout(function() {
            const imagen = document.querySelector(".flecha");
            const padre = imagen.parentNode;
            padre.removeChild(imagen);
        }, 280);
        const contenedor = document.querySelector(".desaparecer");
        contenedor.classList.add("borrar");
    } else {
        cerrarMenu()
    }
})

const link1 = document.querySelector(".link1");
link1.addEventListener("click", function() {
    if (contador !== 0) { cerrarMenu(); }
});

const link2 = document.querySelector(".link2");
link2.addEventListener("click", function() {
    if (contador !== 0) { cerrarMenu(); }
});

const link3 = document.querySelector(".link3");
link3.addEventListener("click", function() {
    if (contador !== 0) { cerrarMenu(); }
});

function cerrarMenu() {
    enlaces.classList.remove('dos');
    enlaces.className = ('enlaces uno');
    contador = 0;

    const tel = document.querySelector(".tel");
    tel.classList.remove("negro");
    const contenedor = document.querySelector(".desaparecer");
    contenedor.classList.remove("borrar");
    setTimeout(function() {
        const menu = document.querySelector(".menu");
        menu.classList.remove("menunegro");
        const img = document.createElement("img");
        img.src = "./img/arrow-down-solid.svg";
        img.className = "flecha";
        const enlaceflecha = document.querySelector(".enlaceflecha");
        enlaceflecha.appendChild(img);
    }, 200);

}

//SCROOLL UP FUNCTIONALLITY
//Get the button:
mybutton = document.querySelector(".scrollup");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };
mybutton.style.display = "none";

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function() {
    topFunction()
})

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// OPEN AND CLOSE MENU
for (let i = 0; i <= 9; i++) {
    menu(i);
}
let cont = 0;

function menu(nro) {
    $("#menu" + nro).hide();
    $("#menu-btn" + nro).click(function() {
        $("#menu" + nro).slideToggle();
        const flecha = document.querySelectorAll(".desplegar");
        if (cont < 1) {
            flecha[nro].style.transform = "rotate(180deg)";
            cont = 1;
        } else {
            flecha[nro].style.transform = "rotate(0deg)";
            cont = 0;
        }


    })
};


// UPDATE YEAR
const date = new Date();

console.log(date.getFullYear());

const footer = document.querySelector("footer");
const data = "<p>&#169 Nueva Lupe " + date.getFullYear() + ". Todos los Derechos Reservados </p>";
footer.innerHTML = data;