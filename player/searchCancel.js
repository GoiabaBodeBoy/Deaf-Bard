module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} **|** Você não forneceu uma resposta válida... Envie o comando novamente!`);
};