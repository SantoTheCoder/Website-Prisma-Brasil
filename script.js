document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            
            console.log(`E-mail capturado: ${emailInput.value}`);
            
            submitButton.innerText = 'Acesso Liberado!';
            submitButton.disabled = true;

            alert('Obrigado! Verifique seu e-mail para confirmar seu acesso.');
        });
    }

    console.log("Prisma Editorial V3.0 - Script Carregado. Arquitetura da Home finalizada.");
});