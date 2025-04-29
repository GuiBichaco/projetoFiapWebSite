// Arquivo para Efeitos, animações, funções e etc em JS

// Atualiza a barra de progresso com base na rolagem
document.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});