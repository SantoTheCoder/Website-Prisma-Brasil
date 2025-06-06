// Arquivo de script para interações futuras.
// Por enquanto, manteremos a simplicidade para garantir performance máxima.

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário da newsletter
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault();
            
            // Aqui, no futuro, integraremos com o serviço de e-mail marketing.
            // Por agora, apenas fornecemos um feedback visual ao usuário.
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            
            console.log(`E-mail capturado para inscrição: ${emailInput.value}`);
            
            // Simula o sucesso
            submitButton.innerText = 'Inscrito!';
            submitButton.style.backgroundColor = '#0A2240';
            submitButton.style.color = '#FFFFFF';
            emailInput.disabled = true;
            submitButton.disabled = true;

            // Poderíamos adicionar uma mensagem de agradecimento abaixo do formulário.
            alert('Obrigado pela sua inscrição! Bem-vindo(a) à Prisma Editorial.');
        });
    }

    console.log("Prisma Editorial - Script Carregado. Experiência pronta.");
});