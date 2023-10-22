const Discord = require('discord.js');

module.exports = {
    name: 'gamble',
    description: 'gamble',
    execute(message,options){
        if(message.author.id=='595491647132008469'){
            var embed = new Discord.MessageEmbed()
                .setColor('#00AA00')
                .setTitle(options[0])
                .setDescription(options[1])
                .setFooter('place your mystic credits!')
            
            for(var i=2;i<options.length;i+=2){
                embed = embed.addFields({ name: options[i], value: (1+((1-options[i+1])/options[i+1])*0.95).toFixed(2), inline: true })
            }
            message.channel.send(embed)
        }else{
            message.channel.send('You dont have the permission to use this command!')
        }
        return;
    }
}