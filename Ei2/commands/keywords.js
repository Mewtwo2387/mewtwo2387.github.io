const Discord = require('discord.js');


module.exports = {
    name: 'keywords',
    description: 'check for trigger keywords every message',
    execute(message,msg){
        if(msg.includes('passant')){
            message.channel.send('holy hell')
        }else if(msg.includes('bronya')){
            message.channel.send('bronya seggs (but not for wei/qiqi)')
        }else if(msg.includes('nya')){
            message.channel.send('https://www.mentalhealth.gov')
        }else if(msg.includes('venfei')){
            message.channel.send('aaaaaaaaaaaaaaaa')
        }else if(msg.includes('keqing')){
            message.channel.send('<:yanfeismug:1136925353651228775>')
        }else if(msg.includes('akagi lore')){
            const embed = new Discord.MessageEmbed()
                .setColor('#00AAAA')
                .setTitle('«« ━━ ✦・Akagi Lore・✦ ━━ »»')

                .setDescription('### Sentient Aircraft Carrier\nAkagi is an IJN aircraft carrier disguised as a genderbent human being. Despite being an aircraft carrier, his iconic quote is "I am not an aircraft carrier".')
                .addFields({ name: 'Timezone', value:'Phillipines (GMT+8)',inline:true})
                .addFields({ name: 'Staff', value:'Event Team\nDesign Team',inline:true})
                .addFields({ name: 'Join Date', value:`April '22`,inline:true})
                .addFields({ name: 'Veteran', value:`Yes`,inline:true})
                .addFields({ name: 'Basement Member', value:`Yes`,inline:true})
                .addFields({ name: 'Aliases', value:'Akagi\nAkagers\nAircraft Carrier\nHerrscher of Carriers\nAce person in horni server',inline:true})
                .addFields({ name: 'Matrix Relationships', value:'**Shipped with: ** Fit (Not anymore)\n**Mutualistic Grasseating: **Ei\n**Sisters: **Keq, Astro, Kaslanass, Lav\n**Alt: **Kaga',inline:true})
                .addFields({ name: 'Quotes', value:`*"I'm not an aircraft carrier"*\n*"Fit is not my alt"*\n*"Akagi is flat"*`,inline:true})
                .addFields({ name: 'Lore 1: Grasseating', value:`Akagi likes eating grass. As an aircraft carrier, he consumes grass as fuel. He helps eat all the grass which Ei is allergic to.`,inline:false})
                .addFields({ name: 'Lore 2: Dogefei Wedding', value:`The wedding between Doge and Venfei happened on The Akagi. Akagi and Fit helped clean up the carrier for the wedding.`,inline:false})
                .addFields({ name: 'Lore 3: Fitkagi', value:`Akagi was shipped with Fit as one of the 4 OG TGP ships. They both have an irl relationship person now.`,inline:false})
                .addFields({ name: 'Lore 4: Alts', value:`Everyone, including fit, is an alt of Akagi.`,inline:false})
                
                message.channel.send(embed)
        }else if(msg.includes('doge lore')){
            const embed = new Discord.MessageEmbed()
                .setColor('#00AAAA')
                .setTitle('«« ━━ ✦・Doge Lore・✦ ━━ »»')

                .setDescription('### Lover of the TGP Queen\nDoge is doge.')
                .addFields({ name: 'Timezone', value:'Vietnam (GMT+7)',inline:true})
                .addFields({ name: 'Staff', value:'None',inline:true})
                .addFields({ name: 'Join Date', value:`April '22`,inline:true})
                .addFields({ name: 'Veteran', value:`Yes`,inline:true})
                .addFields({ name: 'Basement Member', value:`Yes`,inline:true})
                .addFields({ name: 'Aliases', value:`Doge\nDoge Man\nUnlimited Doge Works\nSosuke Aizen\nKarl\nKita\nKaitlin\nOkita\nFischl Simp\nVenfei's boyfriend\nLover of the TGP Queen`,inline:true})
                .addFields({ name: 'Matrix Relationships', value:'**Shipped with: ** Venfei\n**Married on: ** The Akagi\n**Simps for: ** Fischl (Not anymore)\n**Alt: ** Kira\n**Therapist: ** Jez\n**New Wife: ** Make it a Quote Bot',inline:true})
                .addFields({ name: 'Quotes', value:`*"I love Venfei"*\n*"Venfei is a nice roommate sexually"*\n*"I want to peg Venfei"*\n*"I pissed in your cereal"*\n*"I swear if Japan wins against Germany I am going to post myself wearing a maid dress"*`,inline:true})
                .addFields({ name: 'Lore 1: Fischl Simp', value:`Doge had an homework folder containing a lot of Fischl. He was originally a Fischl simp, but abandoned Fischl for Venfei.`,inline:false})
                .addFields({ name: 'Lore 2: The tied up Fischl', value:`Ei tied up Doge's Fischl to threaten Doge when Doge wants to send Ei grass.`,inline:false})
                .addFields({ name: 'Lore 3: Dogefei', value:`The best ship of TGP, Doge x Venfei. One of the 4 OG TGP Ships. They were married on The Akagi on April 18, 2022. Doge became a skinwalker on The Akagi, and later ate all the wedding cake. Doge wants to move to Australia for Venfei.`,inline:false})
                .addFields({ name: 'Lore 4: Venfeifallen NFT', value:`Doge drew a venfeifallen and got turned into an NFT by Ei.`,inline:false})
                .addFields({ name: 'Lore 5: The bans', value:`Doge was once the most warned member due to misspelling ningguang, and was banned by mistake for that which was removed a few days later. He then proceed to get banned a second time, for real, a month later. After living in the basement and undergo character development, his appeal half a year later was a success.`,inline:false})
                .addFields({ name: 'Lore 6: The Kira alt', value:`Doge used his alt Kira everytime he is banned. Which was incredibly obvious as it aligns with the time his main was banned, the time he eats, and also uses the same +7 timezone. His alt calls Venfei "bride", and beat Childe with Fischl.`,inline:false})
                .addFields({ name: 'Lore 7: Character Development', value:`Doge character developed from refusing all horni and getting warned for spamming non-horni in basement horni channels, to a degen.`,inline:false})
                .addFields({ name: 'Lore 8: Broken Mic', value:`Doge have a shitty mic when singing in the toilet in a TGP karaoke.`,inline:false})
                .addFields({ name: 'Lore 9: Dignity Gambling', value:`"I swear if Japan wins against Germany I am going to post myself wearing a maid dress". Famous last words.`,inline:false})
                .addFields({ name: 'Lore 10: Jez therapy', value:`Doge got the worst possible self deprecation, and became the final boss of therapy. Jez tried giving him therapy in the basement.`,inline:false})
                .addFields({ name: 'Lore 11: Stockfish', value:`Cheater smh.`,inline:false})
                .addFields({ name: 'Lore 12: Renvi Appreciation', value:`Renvi loves doge's navel. That's it. I won't provide any more context.`,inline:false})

                
                
                message.channel.send(embed)
        }else if(msg.includes('implicit lore')){
            const embed = new Discord.MessageEmbed()
                .setColor('#00AAAA')
                .setTitle('«« (;  · \\\_ ·) Implicit lore (;  · \\\_ ·) »»')
                .setDescription('### (;  · \\\_ ·)\n(;  · \\\_ ·)(;  · \\\_ ·)(;  · \\\_ ·) (;  · \\\_ ·)(;  · \\\_ ·)(;  · \\\_ ·)(;  · \\\_ ·) (;  · \\\_ ·)(;  · \\\_ ·) (;  · \\\_ ·)(;  · \\\_ ·)(;  · \\\_ ·)(;  · \\\_ ·)')
                .addFields({ name: 'Lore (;  · \\\_ ·): (;  · \\\_ ·)', value:`(;  · \\\_ ·)(;  · \\\_ ·) (;  · \\\_ ·)(;  · \\\_ ·)(;  · \\\_ ·)`,inline:false})
                message.channel.send(embed)
        }
        
        
        
        else if(msg.includes('karezi lore')){
            message.channel.send('childe')
            message.channel.send({ files: [{ attachment: 'https://media.tenor.com/lnf8yDfui1QAAAAC/lumine-lick.gif' }] });
        }else if(msg.includes('water bondage')||msg.includes('hydro bondage')){
            message.channel.send(`:childepanic_Emlette: I literally was on my drive to work this morning and I couldn't stop thinking of Childe- like okay its normal for me- but like-- I started thinking about how Keiko mentioned- water bondage 👀 and it snowballed into something- lewder. And all I could think about was Tartaglia who is tall and im small; starting out with a battle or maybe like a spar, idk man he's very into fighting I wouldn't be surprised if it made him hard. And like- he obviously knows how to use things to his advantage. So like- water bondage- just not in a hot way. Or at least intended. But obviously Tartaglia plays with his opponents- like fr. And hes turned on bc hes gotten a good fight. And I can't stop imagining how grabby he'd get- im rambling ill wrap it up. I can imagine the hair pulling, maybe a smol growl, and how he'd have so little mercy, bc he is a man who destroys. Bonus points if he uses his delusion at all and sparks up the hydro. Extra bonus points if he's rough with little mercy 👀 He doesn't even need gentle aftercare or cuddling- I mean id like to cuddle him but if he doesn't; that's okay :peepoBlushShake: id be a mess after anyone. He can step on me or split me open and i'll say thank you. 

            I should write a fanfic sometime...
            
            Anyway yall im down bad... what else is new :7qiqipeek:`)
        }else if(msg.includes('turtle soup')){
            message.channel.send(`how bout we turn charles' mom into a soup too`)
        }

        return;
    }
}

