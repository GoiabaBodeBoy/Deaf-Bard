module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Música',
    utilisation: '{prefix}play [nome/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} **|** Você não está em um canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} **|** Você não está no mesmo canal de voz!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} **|** Por favor, indique o título de uma música!`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};