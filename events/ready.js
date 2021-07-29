module.exports = async (client) => {
    console.log(`Logado como ${client.user.username}. Pronto em ${client.guilds.cache.size} servers, para um total de ${client.users.cache.size} usuários!`);

    client.user.setActivity(client.config.discord.activity);
};