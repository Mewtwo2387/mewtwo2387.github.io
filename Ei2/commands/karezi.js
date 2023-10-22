const Discord = require('discord.js');

module.exports = {
    name: 'karezi',
    description: 'send an embed of karezi fanfics',
    execute(message){
        const embed = new Discord.MessageEmbed()
            .setColor('#00AA00')
            .setTitle('«« ━━ ✦・Karezi Fanfics・✦ ━━ »»')
            .addFields({ name: "Karezi's AO3", value: 'https://archiveofourown.org/users/Karezi413/pseuds/Karezi413', inline: false })
            .addFields({ name: "Chilumi Week 2023 (5 fics)", value: 'https://archiveofourown.org/series/3618109', inline: false })
            .addFields({ name: "TGP Inktober 2022 (31 fics)", value: 'https://archiveofourown.org/series/3145446', inline: false })
            .addFields({ name: "Enter the Golden House", value: 'https://archiveofourown.org/works/39363285', inline: false })
            .addFields({ name: "Riptide", value: `https://archiveofourown.org/works/42030864\n\njust go to his ao3 to check out the rest there's a shit ton more`, inline: false })
            .setImage('https://media.tenor.com/lnf8yDfui1QAAAAC/lumine-lick.gif')
            .setFooter('childe :lumilick:')
        message.channel.send(embed)
        return;
    }
}       