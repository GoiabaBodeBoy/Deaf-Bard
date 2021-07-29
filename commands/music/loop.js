module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Música',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} **|** Você não está em um canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} **|** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} **|** Nenhuma música tocando no momento!`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} **|** Modo de loop **desativado**!`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} **|** Modo de loop **habilitado** toda a fila será repetida infinitamente!`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} **|** Modo de loop **desativado**!`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} **|** Modo de loop **habilitado** a música atual será repetida infinitamente!`);
            };
        };
    },
};