module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#93dfc5',
            author: { name: `Aqui estão os resultados da sua pesquisa para ${query}` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** **|** ${t.title}`).join('\n')}`,
        },
    });
};