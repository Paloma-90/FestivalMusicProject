const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
    index = n;
}

nextBtn.addEventListener("click", () => {
    let novoIndex = index + 1;
    if (novoIndex >= slides.length) {
        novoIndex = 0;
    }
    mostrarSlide(novoIndex);
});

prevBtn.addEventListener("click", () => {
    let novoIndex = index - 1;
    if (novoIndex < 0) {
        novoIndex = slides.length - 1;
    }
    mostrarSlide(novoIndex);
});