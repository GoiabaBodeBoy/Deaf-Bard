module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <nome do comando>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Música').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#93dfc5',
                    author: { name: 'Painel de Ajuda' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Música', value: music },
                        { name: 'Filtros', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Para usar os filtros, ${client.config.discord.prefix}filter (o filtro). Exemplo: ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} **|** Eu não achei esse comando!`);

            message.channel.send({
                embed: {
                    color: '#93dfc5',
                    author: { name: 'Painel de Ajuda' },
                    fields: [
                        { name: 'Nome', value: command.name, inline: true },
                        { name: 'Categoria', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilização', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Encontre informações sobre o comando fornecido.\nArgumentos obrigatórios `[]`, argumentos opcionais `<>`.',
                }
            });
        };
    },
};