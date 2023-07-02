const { Client } = require('whatsapp-web.js');

// Criação do cliente
const client = new Client();

// Evento de autenticação
client.on('qr', (qr) => {
    console.log('Faça o scan deste QR code com o seu telefone: ', qr);
});

// Evento de conexão bem-sucedida
client.on('ready', () => {
    console.log('Conexão estabelecida com o WhatsApp');
});

// Evento de recebimento de mensagem
client.on('message', async (message) => {
    // Verifica se a mensagem não foi enviada pelo próprio bot
    if (!message.fromMe) {
        const resposta = inteligenciaArtificial(message.body); // Chame sua função de IA aqui para gerar uma resposta
        await message.reply(resposta); // Envia a resposta para o remetente
    }
});

// Inicia o cliente
client.initialize();
