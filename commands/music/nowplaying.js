module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Música',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} **|** Você não está em um canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} **|** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} **|** Nenhuma música tocando no momento!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: '#93dfc5',
                author: { name: track.title },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Pedido por', value: track.requestedBy.username, inline: true },
                    { name: 'Da playlist', value: track.fromPlaylist ? 'Sim' : 'Não', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duração', value: track.duration, inline: true },
                    { name: 'Filtros ativados', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Modo de loop', value: client.player.getQueue(message).repeatMode ? 'Sim' : 'Não', inline: true },
                    { name: 'Atualmente em pausa', value: client.player.getQueue(message).paused ? 'Sim' : 'Não', inline: true },

                    { name: 'Progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};