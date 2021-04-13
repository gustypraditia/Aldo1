const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')

exports.run = async (client, message, args) => {
    
        let region;
        switch (message.guild.region) {
            case "brazil":
                region = '🇧🇷 Brazil'
                break;
            case "hongkong":
                region = '🇭🇰 Hong Kong'
                break;
            case "india":
                region = '🇮🇳 India'
                break;
            case "japan":
                region = '🇯🇵 Japan'
                break;
            case "russia":
                region = '🇷🇺 Russia'
                break;
            case "singapore":
                region = '🇸🇬 Singapore'
                break;
            case "southafrica":
                region = '🇿🇦 South Africa'
                break;
            case "sydney":
                region = '🇦🇺 Sydney'
                break;
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 US-East'
                break;
            case "us-west":
                region = '🇺🇸 us-West';
                break;
            case "us-south":
                region = 'us US-South'
                break;
            case "us-central":
                region = '🇺🇸 US-Central'
                break;
        }

        
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        const ava = message.author.displayAvatarURL({ size: 4096, dynamic: true });



        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('#F3A537')
            .setTitle(`Informasi Tentang ${message.guild.name}`)
            .setFooter(`${message.author.username}`, ava)
            .setTimestamp()
            .addFields({
                name: "🔐 Owner ",
                value: `${message.guild.owner} (\`${message.guild.owner.user.tag}\`)`,
                inline: true
            }, {
                name: "👥 Members ",
                value: `${message.guild.memberCount} Users`,
            }, {
                name: "📈 Members Online ",
                value: `**${members.filter(member => member.presence.status === 'online').size}** Users Online!`,
                inline: true
            }, {
                name: "💻 Bots ",
                value: `**${members.filter(member => member.user.bot).size}** Bots`,
                inline: true
            }, {
                name: `🎫 Channels `,
                value: `${channels.size} Channels`,
            }, {
                name: "📊 Roles ",
                value: `${roles.length} Roles`,
                inline: true,
            }, {
                name: '🚀 Boosters ',
                value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} Boosters` : `No Boosters`,
            }, {
                name: "➕ Creation Date ",
                value: `${moment(message.guild.createdAt).format('DD MMM YYYY, hh:mm:ss')}`,
            }, {
                name: `🏴 Region `,
                value: region,
                inline: true
            }, {
                name: "👍 Emojis ",
                value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size} Emojis!` : 'No Emojis',
            })
        message.channel.send(embed)
}

exports.help = {
  name: "serverinfo",
  description: "Info Tentang Server !",
  usage: "tlh!serverinfo",
  example: "serverinfo"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
};