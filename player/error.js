module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} **|** A música parou porque não há mais membros no canal de voz!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} **|** Você não está conectado em um canal de voz!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} **|** Não consigo entrar no seu canal de voz, verifique minhas permissões!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} **|** ${args[0].title} não está disponível em seu país! Pulando...`);
            break;
        case 'MusicStarting':
            message.channel.send(`A música está começando ... aguarde e tente novamente!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} **|** Algo deu errado... Erro: ${error}`);
    };
};
