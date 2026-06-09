const roles = [
"Software Developer",
"Python Developer",
"Web Developer",
"Computer Science Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {

const typing = document.getElementById("typing");

if (!isDeleting) {
currentRole =
roles[roleIndex].substring(0, charIndex++);
}
else {
currentRole =
roles[roleIndex].substring(0, charIndex--);
}

typing.textContent = currentRole;

let speed = isDeleting ? 50 : 100;

if (
!isDeleting &&
charIndex === roles[roleIndex].length + 1
) {
speed = 1500;
isDeleting = true;
}

if (
isDeleting &&
charIndex === 0
) {
isDeleting = false;
roleIndex =
(roleIndex + 1) % roles.length;
}

setTimeout(typeEffect, speed);
}

typeEffect();

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document
.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));