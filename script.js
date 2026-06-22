// ===============================
// ПЛАВНАЯ ПРОКРУТКА
// ===============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetID = this.getAttribute('href');

        const section = document.querySelector(targetID);

        if(section){

            window.scrollTo({

                top: section.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});




// ===============================
// АКТИВНЫЙ ПУНКТ МЕНЮ
// ===============================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current = "";


sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;

const sectionHeight = section.clientHeight;


if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});


});






// ===============================
// АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКОВ
// ===============================


const observer = new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


},{


threshold:0.2

});



const hiddenElements = document.querySelectorAll(

'.about, .card, .project-card, .contact'

);


hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});







// ===============================
// ИЗМЕНЕНИЕ HEADER ПРИ СКРОЛЛЕ
// ===============================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 80){


header.style.padding = "15px 70px";

header.style.boxShadow =

"0 10px 30px rgba(0,0,0,0.35)";


}


else{


header.style.padding = "25px 70px";

header.style.boxShadow = "none";

}


});








// ===============================
// АНИМАЦИЯ КАРТОЧЕК ПРОЕКТА
// ===============================


const projects = document.querySelectorAll(".project-card");


projects.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform =

"translateY(-10px)";


card.style.transition = "0.3s";


});


card.addEventListener("mouseleave",()=>{


card.style.transform =

"translateY(0)";


});


});







// ===============================
// АНИМАЦИЯ SKILLS
// ===============================


const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform = "translateY(-8px)";


card.style.transition = "0.3s";


});


card.addEventListener("mouseleave",()=>{


card.style.transform = "translateY(0)";


});


});








// ===============================
// ДОБАВЛЯЕМ CSS КЛАССЫ ИЗ JS
// ===============================


const style = document.createElement("style");


style.innerHTML = `


.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}


.show{

opacity:1;

transform:translateY(0);

}



nav a.active{

color:white;

font-weight:700;

}



.project-card{

transition:.3s;

}



.card{

transition:.3s;

}



header{

transition:.3s;

}



`;


document.head.appendChild(style);