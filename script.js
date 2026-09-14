window.addEventListener("load", function(){

const loader = document.querySelector(".page-loader");

setTimeout(function(){

loader.style.opacity = "0";

setTimeout(function(){
loader.style.display = "none";
},400);

},500);

});


const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click",function(){

navMenu.classList.toggle("active");

const icon = menuBtn.querySelector("i");

if(navMenu.classList.contains("active")){

icon.classList.remove("fa-bars");
icon.classList.add("fa-xmark");

}else{

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

}

});


document.querySelectorAll("#navMenu a").forEach(function(link){

link.addEventListener("click",function(){

navMenu.classList.remove("active");

const icon = menuBtn.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

});

});


function openProject(title,image,description,technology){

const modal = document.getElementById("projectModal");

document.getElementById("modalProjectTitle").textContent = title;

document.getElementById("modalProjectImage").src = image;

document.getElementById("modalProjectDescription").textContent = description;

document.getElementById("modalProjectTech").textContent = technology;

modal.classList.add("active");

document.body.classList.add("no-scroll");

}


function closeProject(){

const modal = document.getElementById("projectModal");

modal.classList.remove("active");

document.body.classList.remove("no-scroll");

}


document.getElementById("projectModal").addEventListener("click",function(event){

if(event.target === this){

closeProject();

}

});


function openCertificate(image,title,issuer){

const modal = document.getElementById("certModal");

document.getElementById("certModalImage").src = image;

document.getElementById("certModalTitle").textContent = title;

document.getElementById("certModalIssuer").textContent = issuer;

modal.classList.add("active");

document.body.classList.add("no-scroll");

}


function closeCertificate(){

const modal = document.getElementById("certModal");

modal.classList.remove("active");

document.body.classList.remove("no-scroll");

}


document.getElementById("certModal").addEventListener("click",function(event){

if(event.target === this){

closeCertificate();

}

});


document.addEventListener("keydown",function(event){

if(event.key === "Escape"){

closeProject();
closeCertificate();

}

});


const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",function(){

let current = "";

sections.forEach(function(section){

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(function(link){

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
