document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para o formulário de inscrição na newsletter
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

    // Função para truncar os trechos dos artigos na página /blog
    const truncateExcerpts = () => {
        const articleExcerpts = document.querySelectorAll('.article-card-blog .excerpt');
        if (!articleExcerpts.length) {
            return; // Se não estiver na página do blog, não faz nada
        }

        const maxLength = 250; // Máximo de 250 caracteres

        articleExcerpts.forEach(excerpt => {
            const fullText = excerpt.textContent;
            if (fullText.length > maxLength) {
                const truncatedText = fullText.substring(0, maxLength);
                // Adiciona o link "Leia Mais"
                const readMoreLink = document.createElement('a');
                readMoreLink.href = excerpt.closest('a.card-link').href;
                readMoreLink.className = 'read-more-link';
                readMoreLink.innerHTML = ' Leia Mais &rarr;';
                
                // Atualiza o parágrafo do excerto
                excerpt.innerHTML = `${truncatedText.trim().replace(/[\s,.;]+$/, '')}...`; // Remove pontuação solta no final
                excerpt.appendChild(readMoreLink);
            }
        });
    };

    // Executa a função de truncar os trechos
    truncateExcerpts();

    console.log("Prisma Editorial V7.0 - Todos os scripts foram carregados.");
});