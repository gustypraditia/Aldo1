

module.exports = client => {
  console.log("The bot is ready!");
  

    const guild = client.guilds.cache.get('768719993939689512')

    client.user.setActivity(`The Little Heaven 2021 | ${guild.memberCount} Members`, {
        type: "LISTENING"
    }).catch(console.error)
}
