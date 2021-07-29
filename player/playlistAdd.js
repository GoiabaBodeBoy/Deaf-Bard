module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} **|** ${playlist.title} foi adicionado à fila (**${playlist.tracks.length}** músicas)!`);
};