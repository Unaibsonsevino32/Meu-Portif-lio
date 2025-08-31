


function enviarWhatsApp(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5569992966260'

    const texto = `olá! Meu nome é ${nome} e minha mensagem é: ${mensagem}`
    const msgFormada = encodeURIComponent(texto)

     const url = `https://wa.me/${telefone}?text=${msgFormada}`

    window.open(url, '_blank')
    console.log(`Mensagem enviada: ${texto}`);
}