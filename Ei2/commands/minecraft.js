const Discord = require('discord.js');
const util = require('minecraft-server-util');
// i just spammed async and await, and it worked, so whatever.
module.exports = {
    name: 'minecraft',
    description: 'tgp & basement server status',
    async execute(message){
        message.channel.send('searching...')
        var basement, tgp;
        basement = await util.status('basementrtqT.aternos.me', 35405).then((response) =>{
            console.log(response);
            if(response.players.max==0){
                return 'Offline'
            }else{
                return `${response.players.online}/${response.players.max} Online`
            }
        })
        .catch ((error) =>{
            return 'there was an error finding this server'
        })

        tgp = await util.status('135.148.58.39', 25588).then((response) =>{
            console.log(response);
            if(response.players.max==0){
                return 'Offline'
            }else{
                return `${response.players.online}/${response.players.max} Online`
            }
        })
        .catch ((error) =>{
            return 'there was an error finding this server'
        })
        const embed = new Discord.MessageEmbed()
        .setColor('#00AA00')
        .setTitle('«« ━━ ✦・Minecraft Server Status・✦ ━━ »»')
        .addFields({ name: "Basement (basementrtqT.aternos.me:35405)", value: await basement, inline: false })
        .addFields({ name: "TGP (135.148.58.39:25588)", value: await tgp, inline: false })
        message.channel.send(await embed)
    }
}