module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} **|** Tocando agora ${track.title} em ${message.member.voice.channel.name}...`);
};