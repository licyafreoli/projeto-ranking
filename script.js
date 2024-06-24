document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // previne o envio padrão do formulário

    const formData = new FormData(this);
    const dadosInscrito = {};

    formData.forEach(function(value, key){
        dadosInscrito[key] = value;
    });

    fetch('http://localhost:5000/api/inscricao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosInscrito),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta do servidor:', data);
        alert('Inscrição enviada com sucesso!');
        this.reset(); // limpa formulário após envio 
    })
    .catch(error => {
        console.error('Erro ao enviar inscrição:', error);
        alert('Erro ao enviar inscrição. Por favor, tente novamente.');
    });
});
