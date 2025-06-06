document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            
            console.log(`E-mail capturado para inscrição na OCP: ${emailInput.value}`);
            
            submitButton.innerText = 'Acesso Liberado!';
            submitButton.disabled = true;

            alert('Obrigado! Seu acesso foi liberado. Verifique seu e-mail.');
        });
    }

    console.log("Prisma Editorial V2.0 - Script Carregado. Arquitetura sincronizada.");
});