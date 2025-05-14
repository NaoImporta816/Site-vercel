// Função para animar o botão quando o usuário passar o mouse sobre ele
const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Função para abrir/fechar o menu hambúrguer(celular)
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');      // Mostra ou esconde o menu
    menuToggle.classList.toggle('open');  // Anima o ícone de hambúrguer
});