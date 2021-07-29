module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Música',
    utilisation: '{prefix}filter [nome do filtro]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} **|** Você não está em um canal de voz!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} **|** Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} **|** Nenhuma música tocando no momento!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} **|** Especifique um filtro válido para ativar ou desativar!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} **|** Este filtro não existe, tente por exemplo (8D, vibrato, pulsator...)!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} **|** Estou **adicionando** o filtro à música, aguarde... \n||Observação: quanto mais longa a música, mais tempo demorará.||`);
        else message.channel.send(`${client.emotes.music} **|** Estou **desativando** o filtro da música, aguarde... \n||Observação: quanto mais tempo a música tocar, mais tempo demorará.||`);
    },
};