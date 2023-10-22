const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: 'send this gibberish',
    execute(message){
        const embed = new Discord.MessageEmbed()
            .setColor('#00AA00')
            .setTitle('«« ━━ ✦・Rules (seriously?)・✦ ━━ »»')
            .setDescription(`1. Rules? What are they? Why are there rules here?\n2. Be horny if you're in a horny channel (Peak comedy for doge to get a warn back in May for spamming SFW in an NSFW channel)\n34. Send me keqing r34.\n621. You get a free mystic chicken if you know what this is`)
            .setFooter(`"You guys wasted minutes of your life making a rules channel, since you don't even obey the rules" - KittyCat, May 2022`)
        message.channel.send(embed)
        return;
    }
}