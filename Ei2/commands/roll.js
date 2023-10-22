const Discord = require('discord.js');
module.exports = {
    name: 'roll',
    description: 'roll dice',
    execute(message,msg){
        var a = Number(msg[1])
        var embed;
        if(isNaN(a)||a==undefined){
            embed = new Discord.MessageEmbed()
            .setColor('#AA0000')
            .setDescription(`### You tried rolling a ${msg[1]}-sided die.\nIt landed on a ${msg[1]}. Pretty cool, huh?`)
        }else if(a==0){
            embed = new Discord.MessageEmbed()
            .setColor('#AA0000')
            .setDescription(`### You tried rolling a 0-sided die.\nWait, where did it go?`)
        }else if(a==1){
            embed = new Discord.MessageEmbed()
            .setColor('#00AA00')
            .setDescription(`### You tried rolling a 1-sided die.\nOr, a sphere. It landed on a 1. Like, what did you expect?`)
        }else if(a==2){
            if(Math.random()<0.2){
                embed = new Discord.MessageEmbed()
                .setColor('#AA0000')
                .setDescription(`### You tried rolling a 2-sided die.\nOr let's call it a coin. And it landed on the edge.`)
            }else{
                var result = Math.ceil(Math.random()*a)
                embed = new Discord.MessageEmbed()
                .setColor('#00AA00')
                .setDescription(`### You tried rolling a 2-sided die.\nOr let's call it a coin. It landed on a ${result}.`)
            }
        }
        else if(a!=Math.round(a)){
            embed = new Discord.MessageEmbed()
            .setColor('#AA0000')
            .setDescription(`### You tried rolling a ${a}-sided die.\nIt landed on an edge with an incomplete side.`)
        }
        else if(a<0){
            var result = -Math.ceil(Math.random()*-a)
            embed = new Discord.MessageEmbed()
            .setColor('#00AA00')
            .setDescription(`### You rolled a ${a}-sided die.\nI dont know how, but apparently it worked. It landed on a ${result}.`)
        }else{
            var result = Math.ceil(Math.random()*a)
            embed = new Discord.MessageEmbed()
            .setColor('#00AA00')
            .setDescription(`### You rolled a ${a}-sided die.\nIt landed on a ${result}. Boring.`)
        }
        message.channel.send(embed)
    }
}