module.exports = {
    name: 'hentai',
    description: 'send a random sauce',
    execute(message){
        var sauce = Math.ceil(400000*Math.random())
        message.channel.send('https://nhentai.net/g/' + sauce);
        message.channel.send("It is random, don't arrest me for sending loli")
    }
}