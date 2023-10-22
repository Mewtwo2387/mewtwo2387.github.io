//oh hello. good luck reading this shit.

const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


                      //a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
var letterDifficulty = [1,3,2,3,1,3,3,2,1,5,3,2,2,1,1,3,4,1,1,1,3,4,4,4,3,4]

var hangmanWords = [ { "Word": "akagi", "Tags": "akagi member" }, { "Word": "akagers", "Tags": "akagi nickname" }, { "Word": "aircraft carrier", "Tags": "akagi" }, { "Word": "im not an aircraft carrier", "Tags": "akagi quote" }, { "Word": "ijn akagi", "Tags": "akagi" }, { "Word": "herrscher of carriers", "Tags": "akagi herrscher" }, { "Word": "keqs dum sis", "Tags": "akagi nickname" }, { "Word": "ace person in horni server", "Tags": "akagi nickname basement" }, { "Word": "ace", "Tags": "akagi" }, { "Word": "aroace", "Tags": "akagi" }, { "Word": "kaga", "Tags": "akagi alt" }, { "Word": "fit", "Tags": "fit member" }, { "Word": "fir", "Tags": "fit nickname" }, { "Word": "fit fits in the akagi", "Tags": "fit akagi" }, { "Word": "herrscher of non herrscher", "Tags": "fit herrscher" }, { "Word": "fit x akagi", "Tags": "fit akagi ship" }, { "Word": "fitkagi", "Tags": "fit akagi ship" }, { "Word": "second normalest person", "Tags": "fit nickname" }, { "Word": "dont drown", "Tags": "fit quote" }, { "Word": "dont die", "Tags": "fit quote" }, { "Word": "grass", "Tags": "grass " }, { "Word": "eat grass", "Tags": "grass akagi" }, { "Word": "burn grass", "Tags": "grass ei" }, { "Word": "touch grass", "Tags": "grass " }, { "Word": "herrscher of grasseating", "Tags": "grass akagi herrscher" }, { "Word": "mutualistic grasseating", "Tags": "grass akagi ei" }, { "Word": "allergic to grass", "Tags": "grass ei" }, { "Word": "grass allergy", "Tags": "grass ei" }, { "Word": "keq", "Tags": "keq member" }, { "Word": "keqqus", "Tags": "keq nickname" }, { "Word": "shitpost", "Tags": "keq" }, { "Word": "shitposter", "Tags": "keq" }, { "Word": "lil pussyslayer", "Tags": "nsfw keq nickname" }, { "Word": "herrscher of shitposts", "Tags": "keq herrscher" }, { "Word": "fumo", "Tags": "keq" }, { "Word": "fumo keq", "Tags": "keq" }, { "Word": "polska", "Tags": "keq" }, { "Word": "keqislaw keqowski", "Tags": "keq oc" }, { "Word": "trains", "Tags": "keq" }, { "Word": "trainspotting", "Tags": "keq" }, { "Word": "keq x ei", "Tags": "keq ei ship" }, { "Word": "keqei", "Tags": "keq ei ship" }, { "Word": "project keqei", "Tags": "keq ei  " }, { "Word": "fly me to the moon", "Tags": "ei" }, { "Word": "ei", "Tags": "ei member" }, { "Word": "missingei", "Tags": "ei oc" }, { "Word": "herrscher of horny", "Tags": "ei herrscher" }, { "Word": "shameful dreamer", "Tags": "ei nickname basement" }, { "Word": "paimon dream", "Tags": "ei" }, { "Word": "klee is pyro klee is hot", "Tags": "ei quote" }, { "Word": "keq simp", "Tags": "ei" }, { "Word": "i love keq", "Tags": "ei quote" }, { "Word": "horny", "Tags": "basement" }, { "Word": "horni", "Tags": "basement" }, { "Word": "degen", "Tags": "basement" }, { "Word": "degenerate", "Tags": "basement" }, { "Word": "degeneration", "Tags": "basement" }, { "Word": "degen server", "Tags": "basement" }, { "Word": "the basement", "Tags": "basement" }, { "Word": "genshin replace", "Tags": "basement" }, { "Word": "the attic", "Tags": "oc" }, { "Word": "incursion", "Tags": "oc" }, { "Word": "project eternity", "Tags": "oc" }, { "Word": "project eden", "Tags": "oc" }, { "Word": "eden", "Tags": "oc" }, { "Word": "baka", "Tags": "oc" }, { "Word": "nikke", "Tags": "oc" }, { "Word": "ares", "Tags": "oc" }, { "Word": "spce", "Tags": "oc" }, { "Word": "neon", "Tags": "oc" }, { "Word": "oc wiki", "Tags": "oc" }, { "Word": "genshinplace", "Tags": "tgp" }, { "Word": "the genshin place", "Tags": "tgp" }, { "Word": "sumeru akademiya", "Tags": "tgp" }, { "Word": "tgp", "Tags": "tgp" }, { "Word": "bought keepers", "Tags": "tgp" }, { "Word": "admin abooz", "Tags": "tgp" }, { "Word": "admin abuse", "Tags": "tgp" }, { "Word": "mod abooz", "Tags": "tgp" }, { "Word": "mod abuse", "Tags": "tgp" }, { "Word": "honorary travelers", "Tags": "tgp" }, { "Word": "horny travelers", "Tags": "tgp" }, { "Word": "moderator team", "Tags": "tgp" }, { "Word": "event team ", "Tags": "tgp" }, { "Word": "lore team", "Tags": "tgp" }, { "Word": "design team", "Tags": "tgp" }, { "Word": "developer team", "Tags": "tgp" }, { "Word": "marketing team", "Tags": "tgp" }, { "Word": "mystics harbingers", "Tags": "tgp" }, { "Word": "moderators", "Tags": "tgp" }, { "Word": "trail mods", "Tags": "tgp" }, { "Word": "genshinplace newsletter", "Tags": "tgp" }, { "Word": "pages of purana", "Tags": "tgp" }, { "Word": "mod abooz plz demot", "Tags": "tgp" }, { "Word": "ban hammer", "Tags": "tgp" }, { "Word": "general chaos", "Tags": "tgp" }, { "Word": "the cats tail", "Tags": "tgp" }, { "Word": "oc discussion", "Tags": "tgp" }, { "Word": "veteran", "Tags": "tgp" }, { "Word": "veteran chat", "Tags": "tgp" }, { "Word": "dead chat", "Tags": "tgp" }, { "Word": "dead chat ping", "Tags": "tgp kitty" }, { "Word": "kittycat", "Tags": "kitty" }, { "Word": "the screaming cat", "Tags": "kitty" }, { "Word": "kessho", "Tags": "kitty oc" }, { "Word": "herrscher of cats", "Tags": "kitty herrscher" }, { "Word": "hivemind", "Tags": "tgp" }, { "Word": "collective hivemind", "Tags": "tgp" }, { "Word": "we as the collective hivemind", "Tags": "tgp" }, { "Word": "tgp hivemind", "Tags": "tgp" }, { "Word": "rplace", "Tags": "place" }, { "Word": "place", "Tags": "place" }, { "Word": "pixels", "Tags": "place" }, { "Word": "placing pixels", "Tags": "place" }, { "Word": "canvas", "Tags": "place" }, { "Word": "maryland", "Tags": "place" }, { "Word": "maryland crab", "Tags": "place tgp  " }, { "Word": "crab", "Tags": "place" }, { "Word": "steam the crab", "Tags": "place tgp quote" }, { "Word": "turtle", "Tags": "tgp" }, { "Word": "steam the turtle", "Tags": "tgp quote" }, { "Word": "carl bot", "Tags": "tgp" }, { "Word": "charles the turtlemaster", "Tags": "tgp nickname" }, { "Word": "carl  ", "Tags": "tgp" }, { "Word": "gacha", "Tags": "uga" }, { "Word": "gacha alliance", "Tags": "uga place" }, { "Word": "united gacha alliance", "Tags": "uga place" }, { "Word": "united gacha hub", "Tags": "uga place" }, { "Word": "sorei", "Tags": "uga sorei member" }, { "Word": "sorei balls", "Tags": "uga sorei" }, { "Word": "shinoda", "Tags": "uga shinoda member" }, { "Word": "patosav", "Tags": "uga patosav member" }, { "Word": "gacha games", "Tags": "uga" }, { "Word": "genshin", "Tags": "uga tgp genshin" }, { "Word": "genshin impact", "Tags": "uga tgp genshin" }, { "Word": "honkai", "Tags": "uga" }, { "Word": "honkai impact", "Tags": "uga" }, { "Word": "honkai star rail", "Tags": "uga" }, { "Word": "azur lane", "Tags": "uga" }, { "Word": "blue archive", "Tags": "uga" }, { "Word": "genshit", "Tags": "tgp place genshin" }, { "Word": "genshrek", "Tags": "tgp place genshin" }, { "Word": "sexshrek", "Tags": "tgp place genshin" }, { "Word": "allies", "Tags": "place" }, { "Word": "alliances", "Tags": "place" }, { "Word": "alliance representatives", "Tags": "place tgp" }, { "Word": "osu", "Tags": "place" }, { "Word": "osuplace", "Tags": "place" }, { "Word": "project sekai", "Tags": "uga" }, { "Word": "fate", "Tags": "uga" }, { "Word": "fate grand order", "Tags": "uga" }, { "Word": "polandball", "Tags": "place" }, { "Word": "polandball gacha", "Tags": "place uga" }, { "Word": "hutaoball", "Tags": "place" }, { "Word": "polandball x hutao", "Tags": "place" }, { "Word": "ubatcha", "Tags": "member ubatcha" }, { "Word": "uncle uba", "Tags": "ubatcha nickname" }, { "Word": "btmc", "Tags": "member  " }, { "Word": "hime", "Tags": "member  " }, { "Word": "hu tao bot", "Tags": "tgp" }, { "Word": "hu tao", "Tags": "genshin" }, { "Word": "sentient", "Tags": "tgp" }, { "Word": "sentient bot", "Tags": "tgp" }, { "Word": "collei ", "Tags": "genshin" }, { "Word": "collei bot", "Tags": "tgp" }, { "Word": "keqing", "Tags": "genshin" }, { "Word": "ganyu", "Tags": "genshin" }, { "Word": "yae", "Tags": "genshin" }, { "Word": "ganqing", "Tags": "genshin ship" }, { "Word": "ganyu x keqing", "Tags": "genshin ship" }, { "Word": "raiden", "Tags": "genshin" }, { "Word": "raiden shogun", "Tags": "genshin" }, { "Word": "raiden shotgun", "Tags": "genshin" }, { "Word": "raiden ei", "Tags": "genshin" }, { "Word": "venti", "Tags": "genshin" }, { "Word": "amber", "Tags": "genshin" }, { "Word": "yanfei", "Tags": "genshin" }, { "Word": "ayaka", "Tags": "genshin" }, { "Word": "dehya", "Tags": "genshin" }, { "Word": "albedo", "Tags": "genshin" }, { "Word": "alhaitham", "Tags": "genshin" }, { "Word": "aloy", "Tags": "genshin" }, { "Word": "itto", "Tags": "genshin" }, { "Word": "beidou", "Tags": "genshin" }, { "Word": "barbara", "Tags": "genshin" }, { "Word": "bennett", "Tags": "genshin" }, { "Word": "candace", "Tags": "genshin" }, { "Word": "candace nuts", "Tags": "genshin" }, { "Word": "candace nuts fit in your mouth", "Tags": "genshin quote" }, { "Word": "chongyun", "Tags": "genshin" }, { "Word": "cyno", "Tags": "genshin" }, { "Word": "cyno jokes", "Tags": "genshin" }, { "Word": "thanks cyno", "Tags": "genshin" }, { "Word": "diluc", "Tags": "genshin" }, { "Word": "diona", "Tags": "genshin" }, { "Word": "dori", "Tags": "genshin" }, { "Word": "eula", "Tags": "genshin" }, { "Word": "faruzan", "Tags": "genshin" }, { "Word": "fischl", "Tags": "genshin" }, { "Word": "bennefischl", "Tags": "genshin" }, { "Word": "gorou", "Tags": "genshin" }, { "Word": "jean", "Tags": "genshin" }, { "Word": "kazuha", "Tags": "genshin" }, { "Word": "kaeya", "Tags": "genshin" }, { "Word": "ayato", "Tags": "genshin" }, { "Word": "klee", "Tags": "genshin" }, { "Word": "sara", "Tags": "genshin" }, { "Word": "kamisato ayaka", "Tags": "genshin" }, { "Word": "kamisato ayato", "Tags": "genshin" }, { "Word": "arataki itto", "Tags": "genshin" }, { "Word": "kujou sara", "Tags": "genshin" }, { "Word": "shinobu", "Tags": "genshin" }, { "Word": "kuki shinobu", "Tags": "genshin" }, { "Word": "layla", "Tags": "genshin" }, { "Word": "lisa", "Tags": "genshin" }, { "Word": "mona", "Tags": "genshin" }, { "Word": "nahida", "Tags": "genshin" }, { "Word": "kusanali", "Tags": "genshin" }, { "Word": "grass archon", "Tags": "genshin" }, { "Word": "nilou", "Tags": "genshin" }, { "Word": "ningguang", "Tags": "genshin" }, { "Word": "noelle", "Tags": "genshin" }, { "Word": "razor", "Tags": "genshin" }, { "Word": "rosaria", "Tags": "genshin" }, { "Word": "kokomi", "Tags": "genshin" }, { "Word": "sangonomiya kokomi", "Tags": "genshin" }, { "Word": "sayu", "Tags": "genshin" }, { "Word": "shenhe", "Tags": "genshin" }, { "Word": "heizou", "Tags": "genshin" }, { "Word": "shikanoin heizou", "Tags": "genshin" }, { "Word": "sucrose", "Tags": "genshin" }, { "Word": "childe", "Tags": "genshin" }, { "Word": "chilumi", "Tags": "genshin" }, { "Word": "childe x lumine", "Tags": "genshin" }, { "Word": "tartaglia", "Tags": "genshin" }, { "Word": "thoma", "Tags": "genshin" }, { "Word": "tighnari", "Tags": "genshin" }, { "Word": "traveler", "Tags": "genshin" }, { "Word": "aether", "Tags": "genshin" }, { "Word": "lumine", "Tags": "genshin" }, { "Word": "wanderer", "Tags": "genshin" }, { "Word": "scaramouche", "Tags": "genshin" }, { "Word": "xiangling", "Tags": "genshin" }, { "Word": "xiao", "Tags": "genshin" }, { "Word": "xingqiu", "Tags": "genshin" }, { "Word": "xinyan", "Tags": "genshin" }, { "Word": "yae miko", "Tags": "genshin" }, { "Word": "miko", "Tags": "genshin" }, { "Word": "yaoyao", "Tags": "genshin" }, { "Word": "yelan", "Tags": "genshin" }, { "Word": "yoimiya", "Tags": "genshin" }, { "Word": "yun jin", "Tags": "genshin" }, { "Word": "zhongli", "Tags": "genshin" }, { "Word": "mondstadt", "Tags": "genshin" }, { "Word": "liyue", "Tags": "genshin" }, { "Word": "inazuma", "Tags": "genshin" }, { "Word": "sumeru  ", "Tags": "genshin tgp" }, { "Word": "natlan", "Tags": "genshin" }, { "Word": "fontaine", "Tags": "genshin" }, { "Word": "snezhnaya", "Tags": "genshin" }, { "Word": "khaenriah", "Tags": "genshin" }, { "Word": "abyss", "Tags": "genshin" }, { "Word": "celestia", "Tags": "genshin" }, { "Word": "dainsleif", "Tags": "genshin" }, { "Word": "doge", "Tags": "doge member" }, { "Word": "dog ", "Tags": "gamebang" }, { "Word": "dogefei", "Tags": "doge venfei ship" }, { "Word": "doge x venfei", "Tags": "doge venfei ship" }, { "Word": "marriage on the akagi", "Tags": "doge venfei ship akagi" }, { "Word": "kita", "Tags": "doge nickname" }, { "Word": "okita", "Tags": "doge nickname" }, { "Word": "okita kaitlin", "Tags": "doge nickname" }, { "Word": "kaitlin", "Tags": "doge nickname" }, { "Word": "kate", "Tags": "doge nickname" }, { "Word": "karl", "Tags": "doge nickname" }, { "Word": "fischl simp", "Tags": "doge" }, { "Word": "fischl folder", "Tags": "doge" }, { "Word": "homework folder", "Tags": "doge" }, { "Word": "ryocord", "Tags": "jez doge" }, { "Word": "yow", "Tags": "doge nickname alt" }, { "Word": "fate gifs", "Tags": "doge" }, { "Word": "fischl gif", "Tags": "doge" }, { "Word": "fischl piss in your cereal", "Tags": "doge" }, { "Word": "fischl cereal gif", "Tags": "doge" }, { "Word": "kira", "Tags": "doge alt" }, { "Word": "venfei is a nice roommate sexually", "Tags": "doge quote venfei" }, { "Word": "venfei", "Tags": "venfei member" }, { "Word": "venfeialt", "Tags": "venfei alt" }, { "Word": "aaaaaaa", "Tags": "venfei quote" }, { "Word": "venti the bard", "Tags": "venfei nickname" }, { "Word": "kazuha simp", "Tags": "venfei" }, { "Word": "venfei under ubatcha", "Tags": "venfei" }, { "Word": "i am under ubatcha", "Tags": "venfei quote" }, { "Word": "substitude venfei or sth", "Tags": "venfei" }, { "Word": "sayu mujina", "Tags": "venfei nickname" }, { "Word": "karezi", "Tags": "karezi member" }, { "Word": "karezi fics", "Tags": "karezi" }, { "Word": "chilumi fics", "Tags": "karezi" }, { "Word": "hydro bondage", "Tags": "nsfw karezi" }, { "Word": "herrscher of childe", "Tags": "karezi herrscher" }, { "Word": "childe simp", "Tags": "karezi" }, { "Word": "karezi bot", "Tags": "basement karezi" }, { "Word": "kareezers", "Tags": "karezi nickname" }, { "Word": "karezi x quiet", "Tags": "karezi quiet ship" }, { "Word": "quietrezi", "Tags": "karezi quiet ship" }, { "Word": "quiet", "Tags": "quiet member" }, { "Word": "quietmoment", "Tags": "quiet member" }, { "Word": "felix", "Tags": "quiet alt" }, { "Word": "sleep now", "Tags": "quiet quote" }, { "Word": "enter the golden house", "Tags": "karezi fic" }, { "Word": "inktober", "Tags": "fic " }, { "Word": "events", "Tags": "tgp" }, { "Word": "stumbling into you always", "Tags": "karezi fic" }, { "Word": "the queen of snezhnaya", "Tags": "karezi fic" }, { "Word": "riptide", "Tags": "karezi fic" }, { "Word": "fox in the bunny burrow", "Tags": "karezi fic" }, { "Word": "foxtaglia", "Tags": "genshin karezi fic" }, { "Word": "lumibun", "Tags": "genshin karezi fic" }, { "Word": "nutribun", "Tags": "akagi" }, { "Word": "you take my breath away", "Tags": "karezi fic" }, { "Word": "shattering the star", "Tags": "karezi fic" }, { "Word": "the light in the abyss", "Tags": "karezi fic" }, { "Word": "hey girlie hold still", "Tags": "karezi fic" }, { "Word": "conquering the abyss", "Tags": "karezi fic" }, { "Word": "bundle of snow", "Tags": "karezi fic" }, { "Word": "qilins peace", "Tags": "karezi fic" }, { "Word": "the princess and the knight", "Tags": "karezi fic" }, { "Word": "home is wherever we are together", "Tags": "karezi fic" }, { "Word": "his prisoner", "Tags": "karezi fic" }, { "Word": "his wrath", "Tags": "karezi fic" }, { "Word": "fatherhood", "Tags": "karezi fic" }, { "Word": "shooting stars", "Tags": "karezi fic" }, { "Word": "so close", "Tags": "karezi fic" }, { "Word": "predator and prey", "Tags": "karezi fic" }, { "Word": "foul legacy", "Tags": "karezi fic" }, { "Word": "family love", "Tags": "karezi fic" }, { "Word": "birthday surprise", "Tags": "karezi fic" }, { "Word": "childe step on me", "Tags": "karezi" }, { "Word": "childe crush me under your boot", "Tags": "karezi nickname basement" }, { "Word": "karussy", "Tags": "karezi nickname redbread" }, { "Word": "moment cult", "Tags": "quiet" }, { "Word": "redbread", "Tags": "redbread member" }, { "Word": "greenbread", "Tags": "redbread alt" }, { "Word": "yellowbread", "Tags": "redbread alt" }, { "Word": "bluebread", "Tags": "redbread alt" }, { "Word": "karezi simp", "Tags": "redbread" }, { "Word": "karezi love", "Tags": "redbread" }, { "Word": "herrscher of karezi love", "Tags": "redbread herrscher" }, { "Word": "iras", "Tags": "iras member" }, { "Word": "admirs", "Tags": "iras nickname" }, { "Word": "lord commander", "Tags": "iras tgp" }, { "Word": "purplebread", "Tags": "noodle nickname" }, { "Word": "noodle", "Tags": "noodle member" }, { "Word": "nooble", "Tags": "noodle nickname" }, { "Word": "shop nooble panting", "Tags": "noodle slug quote" }, { "Word": "slug", "Tags": "slug member" }, { "Word": "slug x noodle", "Tags": "slug noodle ship" }, { "Word": "slay", "Tags": "slug" }, { "Word": "slug slay", "Tags": "slug" }, { "Word": "pickle", "Tags": "slug" }, { "Word": "slugpickle", "Tags": "slug nickname" }, { "Word": "noodleume", "Tags": "noodle nickname" }, { "Word": "bread", "Tags": "lhbread redbread" }, { "Word": "lhbread", "Tags": "lhbread member" }, { "Word": "rhbread", "Tags": "lhbread nickname" }, { "Word": "lefthandedbread", "Tags": "lhbread member" }, { "Word": "righthandedbread", "Tags": "lhbread" }, { "Word": "master of mechanics", "Tags": "lhbread tgp" }, { "Word": "gamebang", "Tags": "gamebang member" }, { "Word": "dogbang", "Tags": "gamebang nickname" }, { "Word": "shameful writer", "Tags": "gamebang nickname basement" }, { "Word": "gamebang roleplay", "Tags": "gamebang" }, { "Word": "venti simp", "Tags": "gamebang" }, { "Word": "herrscher of venti", "Tags": "gamebang herrscher" }, { "Word": "gamebang x venti", "Tags": "gamebang ship fic" }, { "Word": "astolfo simp", "Tags": "blacke" }, { "Word": "astolfo  ", "Tags": "blacke gamebang fic" }, { "Word": "the femboy above all", "Tags": "gamebang fic" }, { "Word": "femboy", "Tags": "gamebang fic" }, { "Word": "dog lover", "Tags": "gamebang fic" }, { "Word": "dog fucker", "Tags": "gamebang fic" }, { "Word": "izerak", "Tags": "gamebang fic" }, { "Word": "alizeh", "Tags": "gamebang fic" }, { "Word": "cthulhu", "Tags": "gamebang fic" }, { "Word": "time machine", "Tags": "gamebang fic" }, { "Word": "gamebang and the shameful voices", "Tags": "gamebang fic" }, { "Word": "shameful voices", "Tags": "gamebang fic" }, { "Word": "gamebang and the end of femboys", "Tags": "gamebang fic" }, { "Word": "end of femboys", "Tags": "gamebang fic" }, { "Word": "gamebang and the last salvation", "Tags": "gamebang fic" }, { "Word": "last salvation", "Tags": "gamebang fic" }, { "Word": "gamebang and the divorce", "Tags": "gamebang fic" }, { "Word": "divorce", "Tags": "gamebang fic" }, { "Word": "gamebang and the kingdom of atlantis", "Tags": "gamebang fic" }, { "Word": "kingdom of atlantis", "Tags": "gamebang fic" }, { "Word": "gamebang and the collapse of time", "Tags": "gamebang fic" }, { "Word": "collapse of time", "Tags": "gamebang fic" }, { "Word": "gamebang and the quiet fallout", "Tags": "gamebang fic" }, { "Word": "quiet fallout", "Tags": "gamebang fic" }, { "Word": "gamebang and the dog", "Tags": "gamebang fic" }, { "Word": "gamebang and the divine comedy", "Tags": "gamebang fic" }, { "Word": "divine comedy", "Tags": "gamebang fic" }, { "Word": "gamebang and the purge", "Tags": "gamebang fic" }, { "Word": "purge", "Tags": "gamebang fic" }, { "Word": "aqua", "Tags": "gamebang fic" }, { "Word": "cheating", "Tags": "gamebang fic" }, { "Word": "obama", "Tags": "gamebang fic" }, { "Word": "eren", "Tags": "gamebang fic" }, { "Word": "mikasa", "Tags": "gamebang fic" }, { "Word": "insert genshinplace character", "Tags": "gamebang fic" }, { "Word": "venti pp", "Tags": "gamebang place" }, { "Word": "venti pp guy", "Tags": "gamebang" }, { "Word": "fanfic", "Tags": "fic " }, { "Word": "family tree", "Tags": "tgp" }, { "Word": "family bush", "Tags": "tgp" }, { "Word": "family matrix", "Tags": "tgp" }, { "Word": "incest", "Tags": "tgp" }, { "Word": "incestuous family", "Tags": "tgp" }, { "Word": "mystics kids", "Tags": "tgp mystic" }, { "Word": "ships", "Tags": "ship" }, { "Word": "shipping", "Tags": "ship" }, { "Word": "astro", "Tags": "astro member" }, { "Word": "astroworld", "Tags": "astro" }, { "Word": "astronomy", "Tags": "astro member" }, { "Word": "nomy", "Tags": "astro alt" }, { "Word": "elisa sinclair", "Tags": "astro nickname alt" }, { "Word": "egirl", "Tags": "astro" }, { "Word": "egirl invasion", "Tags": "astro tgp" }, { "Word": "yoimiya dick sucker", "Tags": "nsfw astro nickname basement" }, { "Word": "astrology", "Tags": "astro alt" }, { "Word": "oomfie", "Tags": "astro" }, { "Word": "astrobenji", "Tags": "astro benji ship" }, { "Word": "astro x benji", "Tags": "astro benji ship" }, { "Word": "benji", "Tags": "benji member" }, { "Word": "local frien", "Tags": "benji nickname" }, { "Word": "horny af", "Tags": "basement  " }, { "Word": "herrscher of friendship", "Tags": "benji herrscher" }, { "Word": "herrscher of hate", "Tags": "benji herrscher" }, { "Word": "sword cutie", "Tags": "benji nickname" }, { "Word": "sword through head", "Tags": "benji" }, { "Word": "mommy benji", "Tags": "benji nickname" }, { "Word": "mommy mystic", "Tags": "mystic nickname" }, { "Word": "mommy", "Tags": "mystic " }, { "Word": "mystic", "Tags": "mystic member" }, { "Word": "mistake", "Tags": "member mistake" }, { "Word": "mystic chicken", "Tags": "mystic" }, { "Word": "owner", "Tags": "mystic tgp" }, { "Word": "hugswithmystic", "Tags": "mystic tgp" }, { "Word": "hugswithmystic invasion", "Tags": "mystic tgp" }, { "Word": "ayaka simp", "Tags": "mystic" }, { "Word": "mystichunterz", "Tags": "mystic member" }, { "Word": "mommystic", "Tags": "mystic nickname" }, { "Word": "aris", "Tags": "aris member" }, { "Word": "herrscher of eternity", "Tags": "aris herrscher " }, { "Word": "eternity", "Tags": "aris" }, { "Word": "arisa", "Tags": "aris oc" }, { "Word": "arista", "Tags": "aris nickname" }, { "Word": "arisza", "Tags": "aris nickname" }, { "Word": "town in greece", "Tags": "aris" }, { "Word": "oc", "Tags": "oc" }, { "Word": "blacke", "Tags": "blacke member" }, { "Word": "blacke the sleep deprived", "Tags": "blacke nickname" }, { "Word": "zense", "Tags": "blacke nickname" }, { "Word": "brcik wall", "Tags": "blacke tgp" }, { "Word": "brick wall", "Tags": "blacke tgp" }, { "Word": "brick  ", "Tags": "brick member" }, { "Word": "herrscher of simping", "Tags": "brick herrscher" }, { "Word": "nilou simp", "Tags": "brick" }, { "Word": "anemo", "Tags": "genshin" }, { "Word": "pyro", "Tags": "genshin" }, { "Word": "electro", "Tags": "genshin" }, { "Word": "dendro", "Tags": "genshin" }, { "Word": "hydro", "Tags": "genshin" }, { "Word": "cryo", "Tags": "genshin" }, { "Word": "geo", "Tags": "genshin" }, { "Word": "hangman", "Tags": "basement" }, { "Word": "tgp hangman", "Tags": "basement" }, { "Word": "ei bot", "Tags": "basement" }, { "Word": "jaydon", "Tags": "jaydon member" }, { "Word": "jayd owithaslashinit n", "Tags": "jaydon nickname" }, { "Word": "jaydowone", "Tags": "jaydon nickname" }, { "Word": "blank pfp", "Tags": "jaydon" }, { "Word": "herrscher of nothing", "Tags": "jaydon herrscher" }, { "Word": "qiqi", "Tags": "qiqi member" }, { "Word": "wei", "Tags": "qiqi nickname" }, { "Word": "weilody", "Tags": "qiqi melody ship" }, { "Word": "meloqiqi", "Tags": "qiqi melody ship" }, { "Word": "qiqi x melody", "Tags": "qiqi melody ship" }, { "Word": "wei x melody", "Tags": "qiqi melody ship" }, { "Word": "melody", "Tags": "melody" }, { "Word": "rhythm to her melody", "Tags": "qiqi nickname" }, { "Word": "wind songs melody", "Tags": "melody nickname" }, { "Word": "qiqifallen", "Tags": "genshin tgp" }, { "Word": "qiqi bumped into a tree", "Tags": "qiqi" }, { "Word": "qiqi forgot", "Tags": "qiqi" }, { "Word": "best mod", "Tags": "qiqi" }, { "Word": "scammed out of mod", "Tags": "qiqi nickname basement" }, { "Word": "herrscher of roles", "Tags": "qiqi herrscher" }, { "Word": "roles", "Tags": "tgp" }, { "Word": "anemo vision", "Tags": "genshin tgp" }, { "Word": "pyro vision", "Tags": "genshin tgp" }, { "Word": "hydro vision", "Tags": "genshin tgp" }, { "Word": "geo vision", "Tags": "genshin tgp" }, { "Word": "miko vision", "Tags": "genshin tgp" }, { "Word": "yanfei pink", "Tags": "genshin tgp" }, { "Word": "cryo vision", "Tags": "genshin tgp" }, { "Word": "dendro vision", "Tags": "genshin tgp" }, { "Word": "catgirl purple", "Tags": "genshin tgp" }, { "Word": "master of lore", "Tags": "tgp" }, { "Word": "lore", "Tags": "tgp" }, { "Word": "staff", "Tags": "tgp" }, { "Word": "polandball red", "Tags": "tgp" }, { "Word": "drunken bard teal", "Tags": "tgp" }, { "Word": "qiqifallen periwinkle", "Tags": "tgp" }, { "Word": "server boosters", "Tags": "tgp" }, { "Word": "nitro", "Tags": "tgp" }, { "Word": "nitro boost", "Tags": "tgp" }, { "Word": "discord", "Tags": "tgp" }, { "Word": "lore of the day", "Tags": "tgp" }, { "Word": "lore discussion", "Tags": "tgp" }, { "Word": "server announcements", "Tags": "tgp" }, { "Word": "genshin announcements", "Tags": "tgp" }, { "Word": "primogem ping", "Tags": "tgp" }, { "Word": "event announcements", "Tags": "tgp" }, { "Word": "oc makers", "Tags": "tgp" }, { "Word": "khaenriah guard", "Tags": "tgp" }, { "Word": "venti defence squad", "Tags": "tgp" }, { "Word": "venti defence  ", "Tags": "tgp" }, { "Word": "liyue yakshas", "Tags": "tgp" }, { "Word": "genshin placeholders", "Tags": "tgp" }, { "Word": "scholars", "Tags": "tgp" }, { "Word": "onduty", "Tags": "tgp place" }, { "Word": "rplace staff", "Tags": "tgp place" }, { "Word": "xqc invasion", "Tags": "tgp place" }, { "Word": "bratty streamer", "Tags": "tgp place" }, { "Word": "brat", "Tags": "tgp place" }, { "Word": "hololive", "Tags": "tgp" }, { "Word": "bad apple", "Tags": "tgp" }, { "Word": "renvi", "Tags": "renvi member" }, { "Word": "kay", "Tags": "kay member" }, { "Word": "master of artistry", "Tags": "renvi tgp" }, { "Word": "herrscher of scaramouche", "Tags": "renvi herrscher" }, { "Word": "scara ", "Tags": "renvi genshin" }, { "Word": "sumeru scarademiya", "Tags": "renvi tgp" }, { "Word": "mika", "Tags": "mika member" }, { "Word": "yelanbeloved", "Tags": "mika nickname" }, { "Word": "mikaela", "Tags": "mika nickname" }, { "Word": "yelan simp", "Tags": "mika" }, { "Word": "armpit", "Tags": "mika" }, { "Word": "armpit impact", "Tags": "mika" }, { "Word": "yelan armpit", "Tags": "mika" }, { "Word": "master of sigils", "Tags": "mika tgp" }, { "Word": "hand of the king", "Tags": "mika tgp" }, { "Word": "potato", "Tags": "potato member" }, { "Word": "potat ", "Tags": "potato nickname" }, { "Word": "smiling potato", "Tags": "potato member" }, { "Word": "baked potato", "Tags": "potato nickname" }, { "Word": "fried potato", "Tags": "potato nickname" }, { "Word": "boiled potato", "Tags": "potato nickname" }, { "Word": "zykkard", "Tags": "zykkard member" }, { "Word": "daddy zykkard", "Tags": "zykkard" }, { "Word": "zygarde", "Tags": "zykkard" }, { "Word": "xinyan milk", "Tags": "zykkard" }, { "Word": "pointy xingqiu", "Tags": "zykkard" }, { "Word": "sussy", "Tags": "zykkard" }, { "Word": "amongus", "Tags": "place" }, { "Word": "amongi", "Tags": "place" }, { "Word": "sussy baka", "Tags": "zykkard" }, { "Word": "sussy mod", "Tags": "zykkard" }, { "Word": "demoted mod", "Tags": "zykkard" }, { "Word": "zykkards hitlist", "Tags": "zykkard basement" }, { "Word": "masterred", "Tags": "masterred member" }, { "Word": "master of whispers", "Tags": "masterred tgp" }, { "Word": "keiko", "Tags": "keiko member" }, { "Word": "kei ", "Tags": "keiko nickname" }, { "Word": "kokomi simp", "Tags": "keiko" }, { "Word": "nut ", "Tags": "keiko" }, { "Word": "nuts", "Tags": "keiko quote" }, { "Word": "kokoseggs ", "Tags": "keiko" }, { "Word": "seggs ", "Tags": "basement" }, { "Word": "kokosimp", "Tags": "keiko" }, { "Word": "keikoseggs", "Tags": "keiko" }, { "Word": "choked by kokomi", "Tags": "keiko basement nickname" }, { "Word": "implicit", "Tags": "implicit member" }, { "Word": "implicit none", "Tags": "implicit member" }, { "Word": "explicit all", "Tags": "implicit nickname basement" }, { "Word": "explicit  ", "Tags": "implicit nickname basement" }, { "Word": "herrscher of none ", "Tags": "implicit herrscher" }, { "Word": "char", "Tags": "char member" }, { "Word": "herrscher of events", "Tags": "char herrscher" }, { "Word": "flaring friday", "Tags": "tgp" }, { "Word": "karaoke night", "Tags": "tgp" }, { "Word": "karezioke ", "Tags": "tgp" }, { "Word": "master of tournaments", "Tags": "tgp char 11th" }, { "Word": "photo contest", "Tags": "tgp" }, { "Word": "tgp family photo", "Tags": "tgp" }, { "Word": "elec ", "Tags": "elec member" }, { "Word": "elecwizer", "Tags": "elec member" }, { "Word": "electao ", "Tags": "elec ship" }, { "Word": "elecwizer x hutao", "Tags": "elec ship" }, { "Word": "elecwizers girlfriend", "Tags": "elec basement" }, { "Word": "maso", "Tags": "elec" }, { "Word": "masoscist", "Tags": "elec" }, { "Word": "reu", "Tags": "reu elec ship" }, { "Word": "reulec", "Tags": "reu elec ship" }, { "Word": "reu x elec", "Tags": "reu elec ship" }, { "Word": "jez", "Tags": "jez member" }, { "Word": "jeznagsepyan", "Tags": "jez member" }, { "Word": "xei", "Tags": "jez nickname" }, { "Word": "xeiris", "Tags": "jez nickname" }, { "Word": "xer", "Tags": "jez nickname" }, { "Word": "iris xe", "Tags": "jez" }, { "Word": "meltryllis", "Tags": "jez" }, { "Word": "meltryllis simp", "Tags": "jez" }, { "Word": "meltryllis bot", "Tags": "basement" }, { "Word": "mystics oomfie", "Tags": "jez" }, { "Word": "ryocord mod", "Tags": "jez" }, { "Word": "lav", "Tags": "lav member" }, { "Word": "lavender", "Tags": "lav member" }, { "Word": "smol", "Tags": "lav  " }, { "Word": "smol oomfie", "Tags": "lav nickname" }, { "Word": "the sisters", "Tags": "tgp lav keq astro kaslanass akagi" }, { "Word": "egirl cult", "Tags": "tgp lav keq astro" }, { "Word": "miquel", "Tags": "miquel member" }, { "Word": "venezuela", "Tags": "miquel  " }, { "Word": "miquelvzla", "Tags": "miquel member" }, { "Word": "herrscher of inflation", "Tags": "miquel herrscher" }, { "Word": "bomby", "Tags": "bomby member" }, { "Word": "bomby exe", "Tags": "bomby nickname" }, { "Word": "arson", "Tags": "bomby" }, { "Word": "chara", "Tags": "chara member" }, { "Word": "herrscher of dumb", "Tags": "chara herrscher" }, { "Word": "xesa", "Tags": "xesa member" }, { "Word": "exesa", "Tags": "xesa member" }, { "Word": "sexesa", "Tags": "xesa nickname" }, { "Word": "communism chat", "Tags": "xesa sideways" }, { "Word": "erosion", "Tags": "xesa" }, { "Word": "sideways", "Tags": "sideways member" }, { "Word": "thesidewaysdude", "Tags": "sideways member" }, { "Word": "cocogoat milk", "Tags": "sideways  " }, { "Word": "battle for the cocogoat milk", "Tags": "tgp sideways" }, { "Word": "cocogoat  ", "Tags": "genshin" }, { "Word": "ganyu simp", "Tags": "sideways" }, { "Word": "yae miko simp", "Tags": "aris" }, { "Word": "kaslanass", "Tags": "kaslanass member" }, { "Word": "kaslantits", "Tags": "nsfw kaslanass nickname" }, { "Word": "kaslanas ass", "Tags": "kaslanass  " }, { "Word": "kimaya", "Tags": "kimaya member" }, { "Word": "ayamik", "Tags": "kimaya nickname" }, { "Word": "ayaka milk", "Tags": "kimaya" }, { "Word": "floorfy", "Tags": "floofy nickname" }, { "Word": "floor", "Tags": "floofy  " }, { "Word": "floofy", "Tags": "floofy member" }, { "Word": "floofy fool", "Tags": "floofy nickname" }, { "Word": "father come home", "Tags": "floofy quote" }, { "Word": "went for milk", "Tags": "zykkard" }, { "Word": "kingepic", "Tags": "kingepic member" }, { "Word": "battle cats", "Tags": "kingepic uga" }, { "Word": "battle cats guy", "Tags": "kingepic" }, { "Word": "herrscher of battle cats", "Tags": "kingepic herrscher" }, { "Word": "kimg", "Tags": "kingepic nickname" }, { "Word": "zen", "Tags": "zen member" }, { "Word": "amber mains", "Tags": "zen  " }, { "Word": "baron bunny", "Tags": "zen genshin" }, { "Word": "herrscher of amber", "Tags": "zen herrscher" }, { "Word": "coast", "Tags": "coast member" }, { "Word": "master of coin", "Tags": "coast tgp" }, { "Word": "herrscher ", "Tags": "herrscher  " }, { "Word": "miku", "Tags": "miku member" }, { "Word": "grand maester", "Tags": "mika tgp" }, { "Word": "winter", "Tags": "winter member" }, { "Word": "hubble", "Tags": "hubble member" }, { "Word": "hubble telescope", "Tags": "hubble  " }, { "Word": "toast", "Tags": "toast member" }, { "Word": "toaster", "Tags": "toast nickname" }, { "Word": "toast incident", "Tags": "toast tgp" }, { "Word": "silver", "Tags": "silver member" }, { "Word": "herrscher of clones", "Tags": "silver herrscher" }, { "Word": "clones", "Tags": "silver" }, { "Word": "silver sus", "Tags": "silver" }, { "Word": "silverboom", "Tags": "silver ship hyper" }, { "Word": "silverdawn", "Tags": "silver member" }, { "Word": "hyperboom", "Tags": "hyper member" }, { "Word": "hyper ", "Tags": "hyper member" }, { "Word": "silver x hyper", "Tags": "silver ship hyper" }, { "Word": "silverdawn x hyperboom", "Tags": "silver ship hyper" }, { "Word": "hyperbloom shroom", "Tags": "hyper nickname" }, { "Word": "staff shroom rp chaos", "Tags": "tgp" }, { "Word": "staff furry rp chaos", "Tags": "tgp" }, { "Word": "furry", "Tags": "tgp" }, { "Word": "shroom", "Tags": "tgp" }, { "Word": "aranara", "Tags": "genshin" }, { "Word": "eleventh", "Tags": "11th member" }, { "Word": "the eleventh fatui harbinger", "Tags": "11th member" }, { "Word": "fatui", "Tags": "genshin" }, { "Word": "harbinger", "Tags": "genshin" }, { "Word": "fatui harbinger", "Tags": "genshin" }, { "Word": "ven", "Tags": "ven member" }, { "Word": "horny archon", "Tags": "ven basement" }, { "Word": "joelle", "Tags": "joelle member" }, { "Word": "kiya", "Tags": "kiya member" }, { "Word": "kiwi", "Tags": "kiwi member" }, { "Word": "kwizi", "Tags": "kiwi nickname" }, { "Word": "redoct", "Tags": "redoct member" }, { "Word": "least simpy person", "Tags": "redoct nickname" }, { "Word": "simpy", "Tags": "redoct nickname" }, { "Word": "noxide", "Tags": "noxide member" }, { "Word": "rom", "Tags": "rom member" }, { "Word": "valerian", "Tags": "valerian member" }, { "Word": "the tgp mascot", "Tags": "tgp oc" }, { "Word": "advena", "Tags": "oc" }, { "Word": "aizen", "Tags": "oc doge" }, { "Word": "akagi lyon nishizawa", "Tags": "oc akagi" }, { "Word": "akane murazaki", "Tags": "oc" }, { "Word": "alyona", "Tags": "oc" }, { "Word": "aster", "Tags": "oc" }, { "Word": "cipher", "Tags": "oc" }, { "Word": "chaoguang", "Tags": "oc" }, { "Word": "djamont", "Tags": "oc" }, { "Word": "kaito", "Tags": "oc kitty" }, { "Word": "higasa kaito", "Tags": "oc kitty" }, { "Word": "higasa kessho", "Tags": "oc kitty" }, { "Word": "heian", "Tags": "oc" }, { "Word": "kitty", "Tags": "kitty" }, { "Word": "enya", "Tags": "oc" }, { "Word": "shiori", "Tags": "oc aris" }, { "Word": "karezi ai", "Tags": "basement karezi" }, { "Word": "karezai", "Tags": "basement karezi" }, { "Word": "question of the day", "Tags": "tgp" }, { "Word": "spam pam", "Tags": "tgp" }, { "Word": "other games", "Tags": "tgp" }, { "Word": "memes and shitposts", "Tags": "tgp" }, { "Word": "touching grass", "Tags": "tgp" }, { "Word": "anime deliberation", "Tags": "tgp" }, { "Word": "art gallery", "Tags": "tgp" }, { "Word": "original artworks", "Tags": "tgp" }, { "Word": "house of daena", "Tags": "tgp" }, { "Word": "akasha termimal", "Tags": "tgp" }, { "Word": "the parikalpana chambers", "Tags": "tgp" }, { "Word": "genshin general", "Tags": "tgp" }, { "Word": "copium and flex", "Tags": "tgp" }, { "Word": "copium  ", "Tags": "genshin place" }, { "Word": "hopium", "Tags": "genshin place" }, { "Word": "current patch spoilers", "Tags": "tgp" }, { "Word": "genshin central", "Tags": "tgp" }, { "Word": "oc hub info bulletin", "Tags": "tgp" }, { "Word": "character ocs", "Tags": "tgp" }, { "Word": "micless hangout", "Tags": "tgp" }, { "Word": "music bot radio station", "Tags": "tgp" }, { "Word": "event chat", "Tags": "tgp" }, { "Word": "server bulletin", "Tags": "tgp" }, { "Word": "event bulletin", "Tags": "tgp" }, { "Word": "genshin bulletin", "Tags": "tgp" }, { "Word": "starboard", "Tags": "tgp" }, { "Word": "stars", "Tags": "tgp" }, { "Word": "suggestions", "Tags": "tgp" }, { "Word": "support tickets", "Tags": "tgp" }, { "Word": "affiliates", "Tags": "tgp" }, { "Word": "applications", "Tags": "tgp" }, { "Word": "rewards", "Tags": "tgp" }, { "Word": "directory", "Tags": "tgp" }, { "Word": "kofi supporter", "Tags": "tgp" }, { "Word": "click for roles", "Tags": "tgp" }, { "Word": "incoming", "Tags": "tgp" }, { "Word": "server rules", "Tags": "tgp" }, { "Word": "wish bot", "Tags": "tgp" }, { "Word": "bot commands", "Tags": "tgp" }, { "Word": "serenitea bot", "Tags": "tgp" }, { "Word": "slash snipe", "Tags": "tgp" }, { "Word": "what is this brief mortal life", "Tags": "mystic quote" }, { "Word": "wow this looks so cool", "Tags": "mystic quote" }, { "Word": "mofu", "Tags": "mofu member" }, { "Word": "mofumofu", "Tags": "mofu member" }, { "Word": "keina", "Tags": "keina member" }, { "Word": "kuzanali ", "Tags": "kuzanali member" }, { "Word": "plap", "Tags": "place " }, { "Word": "plap plap plap", "Tags": "place " }, { "Word": "getpregnant", "Tags": "place " }, { "Word": "russian spy", "Tags": "place " }, { "Word": "lily", "Tags": "gamebang fic" }, { "Word": "shub niggurath", "Tags": "gamebang fic" }, { "Word": "inferno", "Tags": "gamebang fic" }, { "Word": "paradiso", "Tags": "gamebang fic" }, { "Word": "purgatory", "Tags": "gamebang fic" }, { "Word": "beezelbub", "Tags": "gamebang fic" }, { "Word": "haruhi", "Tags": "gamebang fic" }, { "Word": "minecraft server", "Tags": "tgp" }, { "Word": "the thing i would do to drink my bfs cum during breakfast", "Tags": "melody quote" }, { "Word": "what is this brief mortal life if not the pursuit of legacy", "Tags": "mystic quote" }, { "Word": "venti harder", "Tags": "gamebang" } ]

var stages = [`\`\`\`
/---|
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   o owo
|  /|\\
|  / \\
|
\`\`\`
`];



var usedletters = ''
var hangman = false
var msg = '';
var data;
var globaldata;
var hangs = 0
var word = ''
var wordid = 0
const talkedRecently = new Set();
client.once('ready', () => {
    console.log('I love Aris');
    //client.channels.cache.get('969953667597893675').send('surely no way');
});

client.on('message', message =>{
    if(message.author.bot) return; // Mystic: Where’s the fun in that
    if(message.channel.id=='1145939189830000690') return;

    //XP system, 60s cooldown
    //See more at [XP System] below (below all commands and read/write functions)
    if (!talkedRecently.has(message.author.id)) {
        talkedRecently.add(message.author.id);
        addXP(message.author,message.channel,true,0)
        setTimeout(() => {
            talkedRecently.delete(message.author.id);
        }, 60000);
    }


    
    if(Math.random()<0.003){
        message.channel.send({ files: [{ attachment: 'mystic.png' }] });
    }

    if(message.content.startsWith('Ei, gamble ')){
        var options = message.content.slice(11).split('; ')
        client.commands.get('gamble').execute(message,options);
    }


    msg = message.content.toLowerCase();

    if(message.content.length == 1 && (/[a-zA-Z]/).test(message) && hangman){
        if(usedletters.includes(msg)){
            message.channel.send('letter is used!')
        }else{
            usedletters+=msg
            if(!word.includes(msg)){
                var title = 'Ouch'
                var color = '#FF0000'
                hangs++
                if(hangs==6){
                    var title = 'You lost. The word is ' + word + '.'
                    globaldata.lose++
                    saveData();
                    hangman = false
                }
            }else{
                var title = 'Cool'
                var color = '#00FF00'
            }
            var a = ''
            var b = ''
            for(var i=0;i<word.length;i++){
                if(word[i]==' '){
                    a+='ㅤ'
                }
                else if(usedletters.includes(word[i])){
                    a+='`' + word[i] + '` '
                }else{
                    a+="`-` "
                }
            }
            a+='\n'
            for(var i=0;i<usedletters.length;i++){
                if(!word.includes(usedletters[i])){b+=usedletters[i]+' '}
            }
            if(!a.includes('-')){
                var title = `Wow that's so cool`
                globaldata.win++
                saveData();
                hangman = false
            }
            var embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle(title)
            .setDescription(stages[hangs] + '\n' + a)
            .setFooter(b)
            message.channel.send(embed)
            if(!hangman){
                embed = new Discord.MessageEmbed()
                    .setColor('#0000FF')
                    .setTitle(word)
                    .setFooter('tags: ' + hangmanWords[wordid].Tags)
                    
                message.channel.send(embed)
            }
        }
    }


    client.commands.get('keywords').execute(message,msg);
    


    if(msg.startsWith('ei, ')){
        msg = msg.slice(4);
    }else if(msg.startsWith('ei,')){
        msg = msg.slice(3);
    }else{
        return;
    }

    client.commands.get('generate').execute(message,msg);


    switch(msg){
        case "kill yourself":
            message.channel.send(`As a Discord bot, I am unable to complete your request as I don't know how. Can you demonstrate it first?`)
            return;
        case "test":
            message.channel.send('<:keq_thumb:969975584648220672>')
            console.log(data)
            return;
        case "hi": case "hi!": case "hello": case "hello!":
            message.channel.send("Hi, and did you know that in terms of human companionship, flareon is the most huggable pokemon? Whit their maximum temperature is likely too much for must, they are capable of controlling it, so they can set themselves to the perfect temperature for you. Along whit that, they have a lot of fluff, akking them undeniably incredicle soft to touch. But thats not all… they have a very respectable special defence at 110, which means they are likely very calm and resistant to emotional damage. Because of this if you have a bad day, you can vent to it while hugging it, and it wont mind. It can make itself even more endearing whit moves like charm and baby doll eyes, ensuring that you never have a prolonged bout of depression ever again")
            return;
        case "sing a song":
            // message.channel.send("Fly me to the moon\nLet me play amongus in the stars\nLet me see what spring is like on\nA-Jupiter and Mars\nIn other words, hold my hand\nIn other words, keq, kiss me\n\nFill my heart with song and let me sing forevermore\nYou are all I long for\nAll I worship and adore\nIn other words, please be true\nIn other words, I love you, keq\n\nFill my heart with song\nLet me sing forevermore\nYou are all I long for, all I worship and adore\nIn other words, please be true\nIn other words\nIn other words\nI love you, keq")
            return;
        case "send gamebang rp": case "send gamebang fics": case "send gamebang fic": case "send gamebang roleplay": case "send gamebang fanfics": case "send gamebang fanfic":
            client.commands.get('gamebang').execute(message);
            return;
        case "send karezi fics":
            client.commands.get('karezi').execute(message);
            return;
        case "send rules":
            client.commands.get('rules').execute(message);
            return;
        case "send a random 6dig": case "send a random sauce": case "send a random hentai":
            client.commands.get('hentai').execute(message);
            return;
        case "add xp":
            addXP(message.author,message.channel,false,69)
            return;
        case "check profile":
            client.commands.get('profile').execute(message,data,client);
            return;
        case 'minecraft':
            client.commands.get('minecraft').execute(message)
            return;
        case "play tgp hangman":
            if(hangman){
                message.channel.send("Another game in process!")
                return;
            }else{
                wordid = Math.floor(Math.random()*hangmanWords.length)
                word = hangmanWords[wordid].Word
                hangman = true
                hangs = 0
                usedletters = ''
                var a = `*Current word list: ${hangmanWords.length} words*\n${stages[0]}\n`
                for(var i=0;i<word.length;i++){
                    if(word[i]==' '){
                        a+='ㅤ'
                    }else{
                        a+="`-` "
                    }
                }
                var embed = new Discord.MessageEmbed()
                    .setColor('#0000FF')
                    .setTitle('TGP Hangman')
                    .setDescription(a)
                message.channel.send(embed)
                return;
            }
            case "check hangman stats":
                client.commands.get('hangmanstats').execute(message,globaldata);
                return;
        default:
            msg = msg.split(' ')
            switch(msg[0]){
                case "pull":
                    data = client.commands.get('pull').execute(message,msg,data)
                    saveData();
                    return;
                case "roll":
                    client.commands.get('roll').execute(message,msg)
                    return;
                default:
                    return;
            }
            return;
    }

});



client.on('guildMemberAdd', member => {
    if(member.guild.id==969953667597893672){
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome");
        const welcomeEmbed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setAuthor('Ei', 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/sticker_1.png?f8ed42d2ed8045d18096507a65de914b')
            .setTitle('Welcome to this hellhole!')
            .setDescription(`${member} entered the basement`)
            .setThumbnail(member.avatarURL)
            .setFooter('wow, the bot is online and sent a welcome message. how rare.')
            .setTimestamp();

        welcomeChannel.send(welcomeEmbed);
        //member.guild.channels.cache.find(channel => channel.name === "general").send(`Welcome to the basement, ${member.toString()}! Grab the degen role in <#969963386156777482> for access to NSFW channels. Also, check out <#969954318751006770> for the absolutely fucking epic Gamebang fics!`)
    }
});

client.on('guildMemberRemove', member => {
    if(member.guild.id==969953667597893672){
        member.guild.channels.cache.find(channel => channel.name === "welcome").send(`${member.toString()} escaped this hellhole.`)
    }
});


client.login('n3v3rg0nN4g1v3uUP')


//yes it's just one big json.

function saveData(){
    fs.writeFile("data.json", JSON.stringify(data), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("saved: " + JSON.stringify(data));
    }); 
    fs.writeFile("globaldata.json", JSON.stringify(globaldata), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("saved global: " + JSON.stringify(globaldata));
    }); 
}
function readData(){
    fs.readFile('data.json', (err, d) => {
        if (err) throw err;
        let results = JSON.parse(d);
        console.log(results)
        data = results
    });
    fs.readFile('globaldata.json', (err, d) => {
        if (err) throw err;
        let results = JSON.parse(d);
        console.log(results)
        globaldata = results
    });
}


//[XP SYSTEM]
//XP per message is dependant on user's minXP and maxXP stats
//xp is removed when level up. totalXP stays.
//level up req. cost 100*(level+1)


//if chat is true, adds random xp based on user's minXP and maxXP
//if chat is false, adds xpamount amount of xp
function addXP(member,channel,chat,xpamount){
    var id = member.id
    var exist = false;
    for(var i=0;i<data.length;i++){
        if(id==data[i].id){
            exist = true;
            if(chat){
                var xpGained = data[i].minXP + Math.floor(Math.random()*(data[i].maxXP-data[i].minXP+1))
            }else{
                var xpGained = xpamount
            }
            data[i].xp = data[i].xp + xpGained 
            data[i].totalXP = data[i].totalXP + xpGained

            if(data[i].xp>=100*(data[i].level+1)){
                // -= and += doesnt work somehow
                data[i].xp = data[i].xp - 100*(data[i].level+1)
                data[i].level = data[i].level + 1
                data[i].credits = data[i].credits + data[i].level*100
                const levelEmbed = new Discord.MessageEmbed()
                    .setColor('#FF0000')
                    .setTitle('Level up!')
                    .setDescription(`${member.toString()} reached level ${data[i].level}. You gained ${data[i].level*100} credits. You now have ${data[i].credits} credits.`)
                    .setFooter("not mystic credits. and let's hope i didnt break a random chain")
                    .setTimestamp();
                channel.send(levelEmbed)
            }
            break;
        }
    }
    if(!exist){
        var xpGained = 10+Math.floor(Math.random()*6)
        data.push({"id":id,"credits":0,"fumo":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"level":0,"xp":xpGained,"totalXP":xpGained,"minXP":10,"maxXP":15});
    }
    saveData();
    return;
}



readData()
console.log(data)

