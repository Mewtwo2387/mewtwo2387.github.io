const Discord = require('discord.js');
var emotes = ["<:keq_thumb:969975584648220672>","<:keq_think:969975584887283723>", "<:keq_sleep:969975584404963339>", "<:chenfumo:1001018092614324305>", "<:cirnofumo:1001016173288239155>", "<:eirinfumo:1001018035550826516>","<:komachifumo:1001018023781605376>",
"<:kaguyafumo:1000451188409512078>" , "<:marisafumo:1001016862240411759>", "<:mokoufumo:1001018058506244106>", "<:nitorifumo:1001016818904862800>", "<:ranfumo:1001018075811950644>" ,
"<:reimufumo:1001016143751954482>", "<:reisenfumo:1001017330568003654>", "<:sakuyafumo:1001016803901849691>", "<:sanaefumo:1001016830552453140>",
"<:youmufumo:1001017227702710342>", "<:yukarifumo:1001017059762782319>", "<:yuyufumo:1001016233858187324>"]

module.exports = {
    name: 'profile',
    description: 'send profile',
    execute(message,data,client){

        for(var i=0;i<data.length;i++){
            if(message.author.id==data[i].id){
                var a = ''
                for(var j=0;j<19;j++){
                    a+=emotes[j]+': ' + data[i].fumo[j]+'\n'
                }
                const embed = new Discord.MessageEmbed()
                    .setColor('#0000AA')
                    .setTitle(`«« ━━ ✦・Profile of ${client.users.cache.get(message.author.id).tag}・✦ ━━ »»`)
                    .addFields({ name: "Credits", value: data[i].credits, inline: false })
                    .addFields({ name: "Level", value: `Level ${data[i].level}, ${data[i].totalXP} XP (${(data[i].level+1)*100-data[i].xp} XP to next level)`, inline: false })
                    .addFields({ name: "Fumo Inventory", value: a, inline: false })
                message.channel.send(embed)
            }
        }
    }
}