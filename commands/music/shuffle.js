module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Música',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} **|** Você não está em um canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} **|** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} **|** Nenhuma música tocando no momento!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} **|** Fila embaralhada **${client.player.getQueue(message).tracks.length}** música(s) !`);
    },
};