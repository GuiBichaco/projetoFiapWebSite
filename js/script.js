// Arquivo para Efeitos, animações, funções e etc em JS

// Fade-in ao scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Atualiza a barra de progresso com base na rolagem
document.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Modal na img 
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const imageToOpen = document.getElementById("imageToOpen");
const closeModal = document.getElementById("closeModal");

// Abre o modal
imageToOpen.onclick = function () {
  modal.style.display = "block";
  modalImage.src = this.src;
  modal.classList.add("opened");
};

// Fecha o modal ao clicar no "X"
closeModal.onclick = function () {
  modal.style.display = "none";
  modal.classList.remove("opened");
};

// Fecha o modal ao clicar fora da imagem
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("opened");
  }
};

//Fecha o modal ao clicar na imagem ampliada
modalImage.onclick = function () {
  modal.style.display = "none";
  modal.classList.remove("opened");
};