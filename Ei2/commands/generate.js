const Discord = require('discord.js');

module.exports = {
    name: 'generate',
    description: 'generate with replicate',
    execute(message,msg){
        if(msg.startsWith('imagine')){
            msg = msg.slice(7)
            generate(message,msg,'sd')
        }

        if(msg.startsWith('generate')){
            msg = msg.slice(8)
            generate(message,msg,'oj')
        }

        if(msg.startsWith('music generate')){
            msg = msg.slice(14)
            generate(message,msg,'mg')
        }

        if(msg.startsWith('high quality waifu generate')){
            msg = msg.slice(27)
            generate(message,' masterpiece, best quality, illustration, beautiful detailed, finely detailed,'+ msg,'vae')
        }

        if(msg.startsWith('high quality generate')){
            msg = msg.slice(21)
            generate(message,' masterpiece, best quality, beautiful detailed, finely detailed, realistic,'+ msg,'sdxl')
        }
    }
}


async function generate(message,prompt,s){
    const { default: Replicate } = await import('replicate');
    const replicate = new Replicate({
        auth: 'r8_FOLT7FegRMAKUac00j2K5xJghxsMaDI22aN7U'
      });
    var model;
    var modelname;
    var input;
    if(s=='sd'){
        model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
        modelname = " (stable diffusion)"
        input = { prompt: prompt };
    }else if(s=='sdxl'){
        model = "stability-ai/sdxl:d830ba5dabf8090ec0db6c10fc862c6eb1c929e1a194a5411852d25fd954ac82";
        modelname = " (sdxl)\nThis will take a while."
        input = { prompt: prompt,num_inference_steps: 300 };
    }else if(s=='oj'){
        model = "prompthero/openjourney:9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb"
        modelname = " (openjourney)"
        input = { prompt: prompt };
    }else if(s=='vae'){
        model = "cjwbw/anything-v3-better-vae:09a5805203f4c12da649ec1923bb7729517ca25fcac790e640eaa9ed66573b65"
        modelname = " (better vae)\nThis will take a while."
        input = { prompt: prompt,
            negative_prompt: "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name",
            num_inference_steps: 200
        };
    }else if(s=='mg'){
        model = "facebookresearch/musicgen:7a76a8258b23fae65c5a22debb8841d1d7e816b75c2f24218cd2bd8573787906"
        modelname = " (musicgen)\nThis will take a while. Also note that naming a song does not work, you have to describe it."
        input = { prompt: prompt , model_version: 'large'};
    }

    message.channel.send('generating:'+prompt+modelname)
    const output = await replicate.run(model, { input });
    
    if(s=='sd'||s=='oj'||s=='sdxl'){
        const embed = new Discord.MessageEmbed()
                .setColor('#00AA00')
                .setDescription('### ' + prompt)
                .setImage(output[0])
                .setFooter('just some goofy low steps stuff')
        message.channel.send(embed)
    }else if(s=='vae'){
        const embed = new Discord.MessageEmbed()
                .setColor('#00AA00')
                .setDescription('### ' + prompt)
                .setImage(output[0])
                .setFooter('just some slightly less goofy high steps stuff')
        message.channel.send(embed)
    }else{
        const embed = new Discord.MessageEmbed()
                .setColor('#00AA00')
                .setDescription('### ' + prompt)
                .setFooter('just some extremely inaccurate moosic generation')
        file = new Discord.MessageAttachment(output, 'moosic.mp3');
        message.channel.send({embed,files: [file]})
    }
}