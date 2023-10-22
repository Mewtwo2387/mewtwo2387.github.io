const Discord = require('discord.js');

module.exports = {
    name: 'gamebang',
    description: 'send an embed of gamebang fanfics',
    execute(message){
        const embed = new Discord.MessageEmbed()
            .setColor('#00AA00')
            .setTitle('«« ━━ ✦・Gamebang Fanfics・✦ ━━ »»')
            .addFields({ name: "Gamebang's 2nd roleplay (Archived)", value: 'https://docs.google.com/document/d/11crS4bxfcR2Vs-1ybmRWum4B5YZeXq6y0zEva0IdBRw/edit?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Shameful Voices", value: 'https://drive.google.com/file/d/1J1OcQbLrHiriEcjXpCnAz-Fx1pMD7Y0y/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the End of Femboys", value: 'https://drive.google.com/file/d/1Itpof3KKwiTFTdUWFTmvrxLfI-foqV_v/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Last Salvation", value: 'https://drive.google.com/file/d/1J-EyRPiWMreLKfdlKJXmqVBZbuMsiRq0/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Divorce", value: 'https://drive.google.com/file/d/1IrztknsmfVjHioFcQEHHK5iXr9HLmjm7/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Kingdom of Atlantis", value: 'https://drive.google.com/file/d/1jtjdLCudVhr4bgmVrEVDDVEvA-SIzmOp/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Collapse of Time", value: 'https://drive.google.com/file/d/1AnFo0qxfTDXHtt3bv5mt-MhrkBdG3D3R/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Quiet Fallout", value: 'https://drive.google.com/file/d/11wOJRYpdvy3GJdMU-I4hmMBew-ZIp5yL/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Divine Comedy", value: 'https://drive.google.com/file/d/1l9RhvGjPrJk9taOFJZ2DNCpvwFrazJ8Z/view?usp=sharing', inline: false })
            .addFields({ name: "Gamebang and the Purge", value: 'https://drive.google.com/file/d/1cMCH9ac4MhHU-LlkXirb2kOEqXTscptI/view?usp=sharing', inline: false })
            .setFooter('holy fuck')
        message.channel.send(embed)
        return;
    }
}