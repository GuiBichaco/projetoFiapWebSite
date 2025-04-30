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

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.estrutura-item');

    items.forEach(item => {
        const button = item.querySelector('.toggle-button');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fecha todos
            items.forEach(i => {
                i.classList.remove('active');
                setIcon(i, false); // seta ícone para +
            });

            if (!isActive) {
                item.classList.add('active');
                setIcon(item, true); // seta ícone para -
            }
        });
    });

    function setIcon(item, opened) {
        const iconSpan = item.querySelector('.icon');
        if (opened) {
            // Ícone de menos
            iconSpan.innerHTML = `
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M5 12h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>`;
        } else {
            // Ícone de mais
            iconSpan.innerHTML = `
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>`;
        }
    }
});

// Seleciona o botão
const scrollButton1 = document.getElementById("scrollToTop");

// Detecta o scroll na página
window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) { // Aparece após scrollar 100vh
        scrollButton1.style.display = "block"; // Mostra o botão
    } else {
        scrollButton1.style.display = "none"; // Esconde o botão
    }
});

// Adiciona funcionalidade para voltar ao topo
scrollButton1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Scroll suave até o topo
    });
});