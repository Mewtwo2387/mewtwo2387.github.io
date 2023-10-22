var emotes = ["<:keq_thumb:969975584648220672>","<:keq_think:969975584887283723>", "<:keq_sleep:969975584404963339>", "<:chenfumo:1001018092614324305>", "<:cirnofumo:1001016173288239155>", "<:eirinfumo:1001018035550826516>","<:komachifumo:1001018023781605376>",
"<:kaguyafumo:1000451188409512078>" , "<:marisafumo:1001016862240411759>", "<:mokoufumo:1001018058506244106>", "<:nitorifumo:1001016818904862800>", "<:ranfumo:1001018075811950644>" ,
"<:reimufumo:1001016143751954482>", "<:reisenfumo:1001017330568003654>", "<:sakuyafumo:1001016803901849691>", "<:sanaefumo:1001016830552453140>",
"<:youmufumo:1001017227702710342>", "<:yukarifumo:1001017059762782319>", "<:yuyufumo:1001016233858187324>"]

module.exports = {
    name: 'pull',
    description: 'pull for fumos',
    execute(message,msg,data){
        var a = Number(msg[1])
        if(isNaN(a)||a<=0||a>20||a==undefined){
            message.channel.send("Must be a number between 1 and 20");
        }else{
            var b = ''
            var c = []
            for(;a>0;a--){
                var index = Math.floor(Math.random() * 19);
                b+=emotes[index]
                c.push(index)
            }
            message.channel.send(b)
            for(var i=0;i<data.length;i++){
                if(message.author.id==data[i].id){
                    exist = true;
                    for(var j=0;j<c.length;j++){
                        data[i].fumo[c[j]]++
                    }
                }
            }
        }
        return data;
    }
}