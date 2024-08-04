let nav = document.querySelector("#navbar");
let s2 = document.querySelector("#education");
let s3 = document.querySelector("#projects");
let s4 = document.querySelector("#other");

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY;

    if (scrollY < 600) {
        navbar.style.backgroundColor = '#fff1e9'; 
    } else {
        navbar.style.backgroundColor = '#f1f1dc';
    }
});

nav.addEventListener("mouseover", () => {
    nav.style.background = "#fcfec7";
});
nav.addEventListener("mouseout", () => {
    nav.style.background = "#e9fff8";
});

s2.addEventListener("click", () => {
    s2.style.background = "#f1f1dc";
})
s3.addEventListener("click", () => {
    s3.style.background = "#edffe9";
})
s4.addEventListener("click", () => {
    s4.style.background = "#fff1e9";
})

onload = function() {
    document.body.style.height = "100%";
};
onscroll = function() {
    document.body.style.background = "#"+Math.round(scrollY*(255/(innerHeight*2))).toString(16)+"515515";
};