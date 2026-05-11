document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const whatsappNumber = '5513999999999'; // Provided by user

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const nome = document.getElementById('nome').value;
            const produto = document.getElementById('produto').value;
            const quantidade = document.getElementById('quantidade').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const endereco = document.getElementById('endereco').value;

            // Construct the message
            const message = `*Novo Pedido - Bia da Candys*%0A%0A` +
                            `*Nome:* ${nome}%0A` +
                            `*Produto:* ${produto}%0A` +
                            `*Quantidade/Pessoas:* ${quantidade}%0A` +
                            `*WhatsApp:* ${whatsapp}%0A` +
                            `*Endereço:* ${endereco}%0A%0A` +
                            `_Enviado via site Bia da Candys_`;

            // WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

            // Open WhatsApp in a new tab
            window.open(whatsappURL, '_blank');
        });
    }

    // Simple fade-in effect for sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.order-section, .hero-content, .hero-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});
