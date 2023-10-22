// hey look i somehow decided to comment my code!

const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();

var msg = ""
var hangman = false;
var word = ''
var hangs = 0
var usedletters = '';
var chain = false;
var saucechaining = false;
const hangmanWords = [
    {
     "Word": "akagi",
     "Tags": "akagi member",
     "Description": "Akagi is a veteran member who is a genderbent aircraft carrier shipped with fit in April. Despite being an aircraft carrier, his iconic quote is \"I'm not an aircraft carrier\""
    },
    {
     "Word": "akagers",
     "Tags": "akagi nickname",
     "Description": "Akagers is another name for Akagi."
    },
    {
     "Word": "aircraft carrier",
     "Tags": "akagi",
     "Description": "We have two aircraft carriers in the server, 赤城(Akagi) and 加賀(Kaga, Akagi's alt). They denies being an aircraft carrier."
    },
    {
     "Word": "im not an aircraft carrier",
     "Tags": "akagi quote",
     "Description": "\"I'm not an aircraft carrier\" is Akagi's iconic quote. He is an aircraft carrier btw."
    },
    {
     "Word": "ijn akagi",
     "Tags": "akagi",
     "Description": "IJN Akagi is an aircraft carrier penetrated by Dick Best with a bomb during WWII. Akagi's name comes from it."
    },
    {
     "Word": "herrscher of carriers",
     "Tags": "akagi herrscher",
     "Description": "Herrscher of Carriers is a herrscher name for Akagi."
    },
    {
     "Word": "keqs dum sis",
     "Tags": "akagi nickname",
     "Description": "Keq's dum sis refers to Akagi as they are part of the sisters. "
    },
    {
     "Word": "ace person in horni server",
     "Tags": "akagi nickname",
     "Description": "Ace Person in Horni Server is the name of Akagi in the basement. "
    },
    {
     "Word": "ace"
    },
    {
     "Word": "aroace"
    },
    {
     "Word": "kaga",
     "Tags": "akagi alt",
     "Description": "Kaga is the alt of Akagi. "
    },
    {
     "Word": "fit",
     "Tags": "fit member",
     "Description": "Fit is a veteran member who is an aircraft rider shipped with Akagi."
    },
    {
     "Word": "fir",
     "Tags": "fit nickname",
     "Description": "Fir is another name for Fit made from a typo. "
    },
    {
     "Word": "fit fits in the akagi",
     "Tags": "fit akagi",
     "Description": "\"Fit fits in the Akagi\" is an iconic quote from the Fit x Akagi ship."
    },
    {
     "Word": "herrscher of non herrscher",
     "Tags": "fit herrscher",
     "Description": "Herrscher of Carriers is a herrscher name for Fit."
    },
    {
     "Word": "fit x akagi",
     "Tags": "fit akagi ship",
     "Description": "Fit x Akagi is a ship from the shipping era in April, one of the first 5 ships of TGP."
    },
    {
     "Word": "fitkagi",
     "Tags": "fit akagi ship",
     "Description": "Fitkagi is the ship name of Fit x Akagi."
    },
    {
     "Word": "second normalest person",
     "Tags": "fit nickname",
     "Description": "Second Normalest Person is the name of Fit in the basement. "
    },
    {
     "Word": "dont drown",
     "Tags": "fit quote",
     "Description": "\"Don't drown\" is an iconic quote from fit everytime someone leaves chat. "
    },
    {
     "Word": "dont die",
     "Tags": "fit quote",
     "Description": "\"Don't die\" is an iconic quote from fit everytime someone leaves chat."
    },
    {
     "Word": "grass",
     "Tags": "grass ",
     "Description": "Akagi eats that, Ei is allergic to that, MissingEi burns that, and most Genshin players refuse to touch that."
    },
    {
     "Word": "eat grass",
     "Tags": "grass akagi",
     "Description": "Akagi loves eating grass. "
    },
    {
     "Word": "burn grass",
     "Tags": "grass ei",
     "Description": "MissingEi burns grass."
    },
    {
     "Word": "touch grass",
     "Tags": "grass ",
     "Description": "Genshin players refuse to do that."
    },
    {
     "Word": "herrscher of grasseating",
     "Tags": "grass akagi herrscher",
     "Description": "Herrscher of Grasseating is another herrscher name for Akagi."
    },
    {
     "Word": "mutualistic grasseating",
     "Tags": "grass akagi ei",
     "Description": "Akagi and Ei forms a mutualistic relationship from grass. Ei is allergic to grass so his life depends on whether Akagi eats the grass."
    },
    {
     "Word": "allergic to grass",
     "Tags": "grass ei",
     "Description": "Ei is allergic to grass."
    },
    {
     "Word": "grass allergy",
     "Tags": "grass ei",
     "Description": "Ei is allergic to grass."
    },
    {
     "Word": "keq",
     "Tags": "keq member"
    },
    {
     "Word": "keqqus",
     "Tags": "keq nickname"
    },
    {
     "Word": "shitpost"
    },
    {
     "Word": "shitposter"
    },
    {
     "Word": "lil pussyslayer",
     "Tags": "nsfw"
    },
    {
     "Word": "herrscher of shitposts"
    },
    {
     "Word": "fumo"
    },
    {
     "Word": "fumo keq"
    },
    {
     "Word": "polska"
    },
    {
     "Word": "keqislaw keqowski"
    },
    {
     "Word": "trains"
    },
    {
     "Word": "trainspotting"
    },
    {
     "Word": "keq x ei"
    },
    {
     "Word": "keqei"
    },
    {
     "Word": "project keqei"
    },
    {
     "Word": "fly me to the moon"
    },
    {
     "Word": "ei"
    },
    {
     "Word": "missingei"
    },
    {
     "Word": "herrscher of horny"
    },
    {
     "Word": "shameful dreamer"
    },
    {
     "Word": "paimon dream"
    },
    {
     "Word": "klee is hot klee is pyro"
    },
    {
     "Word": "keq simp"
    },
    {
     "Word": "i love keq"
    },
    {
     "Word": "horny"
    },
    {
     "Word": "horni"
    },
    {
     "Word": "degen"
    },
    {
     "Word": "degenerate"
    },
    {
     "Word": "degeneration"
    },
    {
     "Word": "degen server"
    },
    {
     "Word": "the basement"
    },
    {
     "Word": "genshin replace"
    },
    {
     "Word": "the attic"
    },
    {
     "Word": "project eden"
    },
    {
     "Word": "eden"
    },
    {
     "Word": "baka"
    },
    {
     "Word": "nikke"
    },
    {
     "Word": "ares"
    },
    {
     "Word": "spce"
    },
    {
     "Word": "neon"
    },
    {
     "Word": "oc wiki"
    },
    {
     "Word": "genshinplace"
    },
    {
     "Word": "the genshin place"
    },
    {
     "Word": "sumeru akademiya"
    },
    {
     "Word": "tgp"
    },
    {
     "Word": "bought keepers"
    },
    {
     "Word": "admin abooz"
    },
    {
     "Word": "admin abuse"
    },
    {
     "Word": "mod abooz"
    },
    {
     "Word": "mod abuse"
    },
    {
     "Word": "honorary travelers"
    },
    {
     "Word": "horny travelers"
    },
    {
     "Word": "moderator team"
    },
    {
     "Word": "event team "
    },
    {
     "Word": "lore team"
    },
    {
     "Word": "design team"
    },
    {
     "Word": "developer team"
    },
    {
     "Word": "marketing team"
    },
    {
     "Word": "mystics harbingers"
    },
    {
     "Word": "moderators"
    },
    {
     "Word": "trail mods"
    },
    {
     "Word": "genshinplace newsletter"
    },
    {
     "Word": "pages of purana"
    },
    {
     "Word": "mod abooz plz demot"
    },
    {
     "Word": "ban hammer"
    },
    {
     "Word": "general chaos"
    },
    {
     "Word": "the cats tail"
    },
    {
     "Word": "oc discussion"
    },
    {
     "Word": "veteran"
    },
    {
     "Word": "veteran chat"
    },
    {
     "Word": "dead chat"
    },
    {
     "Word": "dead chat ping"
    },
    {
     "Word": "kittycat"
    },
    {
     "Word": "the screaming cat"
    },
    {
     "Word": "kessho"
    },
    {
     "Word": "herrscher of cats"
    },
    {
     "Word": "hivemind"
    },
    {
     "Word": "collective hivemind"
    },
    {
     "Word": "we as the collective hivemind"
    },
    {
     "Word": "tgp hivemind"
    },
    {
     "Word": "rplace"
    },
    {
     "Word": "place"
    },
    {
     "Word": "pixels"
    },
    {
     "Word": "placing pixels"
    },
    {
     "Word": "canvas"
    },
    {
     "Word": "maryland"
    },
    {
     "Word": "maryland crab"
    },
    {
     "Word": "crab"
    },
    {
     "Word": "steam the crab"
    },
    {
     "Word": "turtle"
    },
    {
     "Word": "steam the turtle"
    },
    {
     "Word": "carl bot"
    },
    {
     "Word": "charles the turtlemaster"
    },
    {
     "Word": "carl  "
    },
    {
     "Word": "gacha"
    },
    {
     "Word": "gacha alliance"
    },
    {
     "Word": "united gacha hub"
    },
    {
     "Word": "gacha games"
    },
    {
     "Word": "genshin"
    },
    {
     "Word": "genshin impact"
    },
    {
     "Word": "honkai"
    },
    {
     "Word": "honkai impact"
    },
    {
     "Word": "honkai star rail"
    },
    {
     "Word": "azur lane"
    },
    {
     "Word": "blue archive"
    },
    {
     "Word": "genshit"
    },
    {
     "Word": "genshrek"
    },
    {
     "Word": "sexshrek"
    },
    {
     "Word": "allies"
    },
    {
     "Word": "alliances"
    },
    {
     "Word": "alliance representatives"
    },
    {
     "Word": "osu"
    },
    {
     "Word": "osuplace"
    },
    {
     "Word": "project sekai"
    },
    {
     "Word": "fate"
    },
    {
     "Word": "fate grand order"
    },
    {
     "Word": "polandball"
    },
    {
     "Word": "polandball gacha"
    },
    {
     "Word": "hutaoball"
    },
    {
     "Word": "polandball x hutao"
    },
    {
     "Word": "ubatcha"
    },
    {
     "Word": "uncle uba"
    },
    {
     "Word": "btmc"
    },
    {
     "Word": "hime"
    },
    {
     "Word": "hu tao bot"
    },
    {
     "Word": "hu tao"
    },
    {
     "Word": "sentient"
    },
    {
     "Word": "sentient bot"
    },
    {
     "Word": "collei "
    },
    {
     "Word": "collei bot"
    },
    {
     "Word": "keqing"
    },
    {
     "Word": "ganyu"
    },
    {
     "Word": "yae"
    },
    {
     "Word": "ganqing"
    },
    {
     "Word": "ganyu x keqing"
    },
    {
     "Word": "raiden"
    },
    {
     "Word": "raiden shogun"
    },
    {
     "Word": "raiden shotgun"
    },
    {
     "Word": "raiden ei"
    },
    {
     "Word": "venti"
    },
    {
     "Word": "amber"
    },
    {
     "Word": "yanfei"
    },
    {
     "Word": "ayaka"
    },
    {
     "Word": "dehya"
    },
    {
     "Word": "albedo"
    },
    {
     "Word": "alhaitham"
    },
    {
     "Word": "aloy"
    },
    {
     "Word": "itto"
    },
    {
     "Word": "beidou"
    },
    {
     "Word": "barbara"
    },
    {
     "Word": "bennett"
    },
    {
     "Word": "candace"
    },
    {
     "Word": "candace nuts"
    },
    {
     "Word": "candace nuts fit in your mouth"
    },
    {
     "Word": "chongyun"
    },
    {
     "Word": "cyno"
    },
    {
     "Word": "cyno jokes"
    },
    {
     "Word": "thanks cyno"
    },
    {
     "Word": "diluc"
    },
    {
     "Word": "diona"
    },
    {
     "Word": "dori"
    },
    {
     "Word": "eula"
    },
    {
     "Word": "faruzan"
    },
    {
     "Word": "fischl"
    },
    {
     "Word": "bennefischl"
    },
    {
     "Word": "gorou"
    },
    {
     "Word": "jean"
    },
    {
     "Word": "kazuha"
    },
    {
     "Word": "kaeya"
    },
    {
     "Word": "ayato"
    },
    {
     "Word": "klee"
    },
    {
     "Word": "sara"
    },
    {
     "Word": "kamisato ayaka"
    },
    {
     "Word": "kamisato ayato"
    },
    {
     "Word": "arataki itto"
    },
    {
     "Word": "kujou sara"
    },
    {
     "Word": "shinobu"
    },
    {
     "Word": "kuki shinobu"
    },
    {
     "Word": "layla"
    },
    {
     "Word": "lisa"
    },
    {
     "Word": "mona"
    },
    {
     "Word": "nahida"
    },
    {
     "Word": "kusanali"
    },
    {
     "Word": "grass archon"
    },
    {
     "Word": "nilou"
    },
    {
     "Word": "ningguang"
    },
    {
     "Word": "noelle"
    },
    {
     "Word": "razor"
    },
    {
     "Word": "rosaria"
    },
    {
     "Word": "kokomi"
    },
    {
     "Word": "sangonomiya kokomi"
    },
    {
     "Word": "sayu"
    },
    {
     "Word": "shenhe"
    },
    {
     "Word": "heizou"
    },
    {
     "Word": "shikanoin heizou"
    },
    {
     "Word": "sucrose"
    },
    {
     "Word": "childe"
    },
    {
     "Word": "chilumi"
    },
    {
     "Word": "childe x lumine"
    },
    {
     "Word": "tartaglia"
    },
    {
     "Word": "thoma"
    },
    {
     "Word": "tighnari"
    },
    {
     "Word": "traveler"
    },
    {
     "Word": "aether"
    },
    {
     "Word": "lumine"
    },
    {
     "Word": "wanderer"
    },
    {
     "Word": "scaramouche"
    },
    {
     "Word": "xiangling"
    },
    {
     "Word": "xiao"
    },
    {
     "Word": "xingqiu"
    },
    {
     "Word": "xinyan"
    },
    {
     "Word": "yae miko"
    },
    {
     "Word": "miko"
    },
    {
     "Word": "yaoyao"
    },
    {
     "Word": "yelan"
    },
    {
     "Word": "yoimiya"
    },
    {
     "Word": "yun jin"
    },
    {
     "Word": "zhongli"
    },
    {
     "Word": "mondstadt"
    },
    {
     "Word": "liyue"
    },
    {
     "Word": "inazuma"
    },
    {
     "Word": "sumeru  "
    },
    {
     "Word": "natlan"
    },
    {
     "Word": "fontaine"
    },
    {
     "Word": "snezhnaya"
    },
    {
     "Word": "khaenriah"
    },
    {
     "Word": "abyss"
    },
    {
     "Word": "celestia"
    },
    {
     "Word": "dainsleif"
    },
    {
     "Word": "doge"
    },
    {
     "Word": "dog "
    },
    {
     "Word": "dogefei"
    },
    {
     "Word": "doge x venfei"
    },
    {
     "Word": "marriage on the akagi"
    },
    {
     "Word": "kita"
    },
    {
     "Word": "okita"
    },
    {
     "Word": "okita kaitlin"
    },
    {
     "Word": "kaitlin"
    },
    {
     "Word": "kate"
    },
    {
     "Word": "karl"
    },
    {
     "Word": "fischl simp"
    },
    {
     "Word": "fischl folder"
    },
    {
     "Word": "homework folder"
    },
    {
     "Word": "ryocord"
    },
    {
     "Word": "yow"
    },
    {
     "Word": "fate gifs"
    },
    {
     "Word": "fischl gif"
    },
    {
     "Word": "fischl piss in your cereal"
    },
    {
     "Word": "fischl cereal gif"
    },
    {
     "Word": "venfei"
    },
    {
     "Word": "venfeialt"
    },
    {
     "Word": "aaaaaaa"
    },
    {
     "Word": "venti the bard"
    },
    {
     "Word": "kazuha simp"
    },
    {
     "Word": "venfei under ubatcha"
    },
    {
     "Word": "i am under ubatcha"
    },
    {
     "Word": "substitude venfei or sth"
    },
    {
     "Word": "sayu mujina"
    },
    {
     "Word": "karezi"
    },
    {
     "Word": "karezi fics"
    },
    {
     "Word": "chilumi fics"
    },
    {
     "Word": "hydro bondage",
     "Tags": "nsfw"
    },
    {
     "Word": "herrscher of childe"
    },
    {
     "Word": "kareezers"
    },
    {
     "Word": "karezi x quiet"
    },
    {
     "Word": "quietrezi"
    },
    {
     "Word": "quiet"
    },
    {
     "Word": "quietmoment"
    },
    {
     "Word": "felix"
    },
    {
     "Word": "sleep now"
    },
    {
     "Word": "enter the golden house"
    },
    {
     "Word": "inktober"
    },
    {
     "Word": "events"
    },
    {
     "Word": "stumbling into you always"
    },
    {
     "Word": "the queen of snezhnaya"
    },
    {
     "Word": "riptide"
    },
    {
     "Word": "fox in the bunny burrow"
    },
    {
     "Word": "foxtaglia"
    },
    {
     "Word": "lumibun"
    },
    {
     "Word": "nutribun"
    },
    {
     "Word": "you take my breath away"
    },
    {
     "Word": "shattering the star"
    },
    {
     "Word": "the light in the abyss"
    },
    {
     "Word": "hey girlie hold still"
    },
    {
     "Word": "conquering the abyss"
    },
    {
     "Word": "bundle of snow"
    },
    {
     "Word": "childe step on me"
    },
    {
     "Word": "karussy"
    },
    {
     "Word": "moment cult"
    },
    {
     "Word": "redbread"
    },
    {
     "Word": "greenbread"
    },
    {
     "Word": "yellowbread"
    },
    {
     "Word": "bluebread"
    },
    {
     "Word": "karezi simp"
    },
    {
     "Word": "karezi love"
    },
    {
     "Word": "herrscher of karezi love"
    },
    {
     "Word": "iras"
    },
    {
     "Word": "admirs"
    },
    {
     "Word": "lord commander"
    },
    {
     "Word": "purplebread"
    },
    {
     "Word": "noodle"
    },
    {
     "Word": "nooble"
    },
    {
     "Word": "shop nooble panting"
    },
    {
     "Word": "slug"
    },
    {
     "Word": "slug x noodle"
    },
    {
     "Word": "slay"
    },
    {
     "Word": "slug slay"
    },
    {
     "Word": "pickle"
    },
    {
     "Word": "slugpickle"
    },
    {
     "Word": "noodleume"
    },
    {
     "Word": "bread"
    },
    {
     "Word": "lhbread"
    },
    {
     "Word": "rhbread"
    },
    {
     "Word": "lefthandedbread"
    },
    {
     "Word": "righthandedbread"
    },
    {
     "Word": "master of mechanics"
    },
    {
     "Word": "gamebang"
    },
    {
     "Word": "dogbang"
    },
    {
     "Word": "shameful writer"
    },
    {
     "Word": "gamebang roleplay"
    },
    {
     "Word": "venti simp"
    },
    {
     "Word": "herrscher of venti"
    },
    {
     "Word": "gamebang x venti"
    },
    {
     "Word": "astolfo simp"
    },
    {
     "Word": "astolfo  "
    },
    {
     "Word": "the femboy above all"
    },
    {
     "Word": "femboy"
    },
    {
     "Word": "dog lover"
    },
    {
     "Word": "dog fucker",
     "Tags": "nsfw"
    },
    {
     "Word": "dog person"
    },
    {
     "Word": "izerak"
    },
    {
     "Word": "alizeh"
    },
    {
     "Word": "cthulhu"
    },
    {
     "Word": "time machine"
    },
    {
     "Word": "gamebang and the shameful voices"
    },
    {
     "Word": "shameful voices"
    },
    {
     "Word": "gamebang and the end of femboys"
    },
    {
     "Word": "end of femboys"
    },
    {
     "Word": "gamebang and the last salvation"
    },
    {
     "Word": "last salvation"
    },
    {
     "Word": "gamebang and the divorce"
    },
    {
     "Word": "divorce"
    },
    {
     "Word": "gamebang and the kingdom of atlantis"
    },
    {
     "Word": "kingdom of atlantis"
    },
    {
     "Word": "aqua"
    },
    {
     "Word": "cheating"
    },
    {
     "Word": "obama"
    },
    {
     "Word": "eren"
    },
    {
     "Word": "mikasa"
    },
    {
     "Word": "insert genshinplace character"
    },
    {
     "Word": "venti pp"
    },
    {
     "Word": "venti pp guy"
    },
    {
     "Word": "fanfic"
    },
    {
     "Word": "family tree"
    },
    {
     "Word": "family bush"
    },
    {
     "Word": "family matrix"
    },
    {
     "Word": "incest"
    },
    {
     "Word": "incestuous family"
    },
    {
     "Word": "mystics kids"
    },
    {
     "Word": "ships"
    },
    {
     "Word": "shipping"
    },
    {
     "Word": "astro"
    },
    {
     "Word": "astroworld"
    },
    {
     "Word": "astronomy"
    },
    {
     "Word": "nomy"
    },
    {
     "Word": "elisa sinclair"
    },
    {
     "Word": "egirl"
    },
    {
     "Word": "egirl invasion"
    },
    {
     "Word": "yoimiya dick sucker",
     "Tags": "nsfw"
    },
    {
     "Word": "astrology"
    },
    {
     "Word": "oomfie"
    },
    {
     "Word": "astrobenji"
    },
    {
     "Word": "astro x benji"
    },
    {
     "Word": "benji"
    },
    {
     "Word": "local frien"
    },
    {
     "Word": "horny af"
    },
    {
     "Word": "herrscher of friendship"
    },
    {
     "Word": "herrscher of hate"
    },
    {
     "Word": "sword cutie"
    },
    {
     "Word": "sword through head"
    },
    {
     "Word": "mommy benji"
    },
    {
     "Word": "mommy mystic"
    },
    {
     "Word": "mommy"
    },
    {
     "Word": "mystic"
    },
    {
     "Word": "mistake"
    },
    {
     "Word": "mystic chicken"
    },
    {
     "Word": "owner"
    },
    {
     "Word": "hugswithmystic"
    },
    {
     "Word": "hugswithmystic invasion"
    },
    {
     "Word": "ayaka simp"
    },
    {
     "Word": "mystichunterz"
    },
    {
     "Word": "mommystic"
    },
    {
     "Word": "aris"
    },
    {
     "Word": "herrscher of eternity"
    },
    {
     "Word": "eternity"
    },
    {
     "Word": "arisa"
    },
    {
     "Word": "arista"
    },
    {
     "Word": "arisza"
    },
    {
     "Word": "town in greece"
    },
    {
     "Word": "oc"
    },
    {
     "Word": "blacke"
    },
    {
     "Word": "blacke the sleep deprived"
    },
    {
     "Word": "zense"
    },
    {
     "Word": "brcik wall"
    },
    {
     "Word": "brick wall"
    },
    {
     "Word": "brick  "
    },
    {
     "Word": "herrscher of simping"
    },
    {
     "Word": "nilou simp"
    },
    {
     "Word": "anemo"
    },
    {
     "Word": "pyro"
    },
    {
     "Word": "electro"
    },
    {
     "Word": "dendro"
    },
    {
     "Word": "hydro"
    },
    {
     "Word": "cryo"
    },
    {
     "Word": "geo"
    },
    {
     "Word": "hangman"
    },
    {
     "Word": "tgp hangman"
    },
    {
     "Word": "ei bot"
    },
    {
     "Word": "jaydon"
    },
    {
     "Word": "jayd owithaslash n"
    },
    {
     "Word": "jaydowone"
    },
    {
     "Word": "blank pfp"
    },
    {
     "Word": "herrscher of nothing"
    },
    {
     "Word": "qiqi"
    },
    {
     "Word": "wei"
    },
    {
     "Word": "weilody"
    },
    {
     "Word": "meloqiqi"
    },
    {
     "Word": "qiqi x melody"
    },
    {
     "Word": "wei x melody"
    },
    {
     "Word": "melody"
    },
    {
     "Word": "rhythm to her melody"
    },
    {
     "Word": "wind songs melody"
    },
    {
     "Word": "qiqifallen"
    },
    {
     "Word": "qiqi bumped into a tree"
    },
    {
     "Word": "qiqi forgot"
    },
    {
     "Word": "best mod"
    },
    {
     "Word": "scammed out of mod"
    },
    {
     "Word": "herrscher of roles"
    },
    {
     "Word": "roles"
    },
    {
     "Word": "anemo vision"
    },
    {
     "Word": "pyro vision"
    },
    {
     "Word": "hydro vision"
    },
    {
     "Word": "geo vision"
    },
    {
     "Word": "miko vision"
    },
    {
     "Word": "yanfei pink"
    },
    {
     "Word": "cryo vision"
    },
    {
     "Word": "dendro vision"
    },
    {
     "Word": "catgirl purple"
    },
    {
     "Word": "master of lore"
    },
    {
     "Word": "lore"
    },
    {
     "Word": "staff"
    },
    {
     "Word": "polandball red"
    },
    {
     "Word": "drunken bard teal"
    },
    {
     "Word": "qiqifallen periwinkle"
    },
    {
     "Word": "server boosters"
    },
    {
     "Word": "nitro"
    },
    {
     "Word": "nitro boost"
    },
    {
     "Word": "discord"
    },
    {
     "Word": "lore of the day"
    },
    {
     "Word": "lore discussion"
    },
    {
     "Word": "server announcements"
    },
    {
     "Word": "genshin announcements"
    },
    {
     "Word": "primogem ping"
    },
    {
     "Word": "event announcements"
    },
    {
     "Word": "oc makers"
    },
    {
     "Word": "khaenriah guard"
    },
    {
     "Word": "venti defence squad"
    },
    {
     "Word": "venti defence  "
    },
    {
     "Word": "liyue yakshas"
    },
    {
     "Word": "genshin placeholders"
    },
    {
     "Word": "scholars"
    },
    {
     "Word": "renvi"
    },
    {
     "Word": "kay"
    },
    {
     "Word": "renvikay"
    },
    {
     "Word": "master of artistry"
    },
    {
     "Word": "herrscher of scaramouche"
    },
    {
     "Word": "scara "
    },
    {
     "Word": "sumeru scarademiya"
    },
    {
     "Word": "mika"
    },
    {
     "Word": "yelanbeloved"
    },
    {
     "Word": "mikaela"
    },
    {
     "Word": "yelan simp"
    },
    {
     "Word": "armpit"
    },
    {
     "Word": "armpit impact"
    },
    {
     "Word": "yelan armpit"
    },
    {
     "Word": "master of sigils"
    },
    {
     "Word": "hand of the king"
    },
    {
     "Word": "potato"
    },
    {
     "Word": "potat "
    },
    {
     "Word": "smiling potato"
    },
    {
     "Word": "baked potato"
    },
    {
     "Word": "fried potato"
    },
    {
     "Word": "zykkard"
    },
    {
     "Word": "zygarde"
    },
    {
     "Word": "xinyan milk"
    },
    {
     "Word": "sussy"
    },
    {
     "Word": "amongus"
    },
    {
     "Word": "amongi"
    },
    {
     "Word": "sussy baka"
    },
    {
     "Word": "sussy mod"
    },
    {
     "Word": "demoted mod"
    },
    {
     "Word": "masterred"
    },
    {
     "Word": "master of whispers"
    },
    {
     "Word": "keiko"
    },
    {
     "Word": "kei "
    },
    {
     "Word": "kokomi simp"
    },
    {
     "Word": "nut "
    },
    {
     "Word": "nuts"
    },
    {
     "Word": "kokoseggs "
    },
    {
     "Word": "seggs "
    },
    {
     "Word": "kokosimp"
    },
    {
     "Word": "keikoseggs"
    },
    {
     "Word": "choked by kokomi"
    },
    {
     "Word": "implicit"
    },
    {
     "Word": "implicit none",
     "Tags": " "
    },
    {
     "Word": "explicit all"
    },
    {
     "Word": "explicit  "
    },
    {
     "Word": "herrscher of none "
    },
    {
     "Word": "char"
    },
    {
     "Word": "herrscher of events"
    },
    {
     "Word": "flaring friday"
    },
    {
     "Word": "karaoke night"
    },
    {
     "Word": "karezioke "
    },
    {
     "Word": "master of tournaments"
    },
    {
     "Word": "photo contest"
    },
    {
     "Word": "tgp family photo"
    },
    {
     "Word": "elec "
    },
    {
     "Word": "elecwizer"
    },
    {
     "Word": "electao "
    },
    {
     "Word": "elecwizer x hutao"
    },
    {
     "Word": "maso"
    },
    {
     "Word": "masoscist"
    },
    {
     "Word": "reu"
    },
    {
     "Word": "reulec"
    },
    {
     "Word": "reu x elec"
    },
    {
     "Word": "jez"
    },
    {
     "Word": "jeznagsepyan"
    },
    {
     "Word": "lav"
    },
    {
     "Word": "lavender"
    },
    {
     "Word": "smol"
    },
    {
     "Word": "smol oomfie"
    },
    {
     "Word": "the sisters"
    },
    {
     "Word": "egirl cult"
    },
    {
     "Word": "miquel"
    },
    {
     "Word": "venezuela"
    },
    {
     "Word": "miquelvzla"
    },
    {
     "Word": "herrscher of inflation"
    },
    {
     "Word": "bomby"
    },
    {
     "Word": "bomby exe"
    },
    {
     "Word": "arson"
    },
    {
     "Word": "chara"
    },
    {
     "Word": "herrscher of dumb"
    },
    {
     "Word": "xesa"
    },
    {
     "Word": "exesa"
    },
    {
     "Word": "sexesa"
    },
    {
     "Word": "communism chat"
    },
    {
     "Word": "erosion"
    },
    {
     "Word": "sideways"
    },
    {
     "Word": "thesidewaysdude"
    },
    {
     "Word": "cocogoat milk"
    },
    {
     "Word": "battle for the cocogoat milk"
    },
    {
     "Word": "cocogoat  "
    },
    {
     "Word": "ganyu simp"
    },
    {
     "Word": "yae miko simp"
    },
    {
     "Word": "raiden simp"
    },
    {
     "Word": "kaslanass"
    },
    {
     "Word": "kaslantits",
     "Tags": "nsfw"
    },
    {
     "Word": "kaslanas ass"
    },
    {
     "Word": "kimaya"
    },
    {
     "Word": "ayamik"
    },
    {
     "Word": "ayaka milk"
    },
    {
     "Word": "floorfy"
    },
    {
     "Word": "floor"
    },
    {
     "Word": "floofy"
    },
    {
     "Word": "father come home"
    },
    {
     "Word": "went for milk"
    },
    {
     "Word": "kingepic"
    },
    {
     "Word": "battle cats"
    },
    {
     "Word": "battle cats guy"
    },
    {
     "Word": "herrscher of battle cats"
    },
    {
     "Word": "kimg"
    },
    {
     "Word": "zen"
    },
    {
     "Word": "amber mains"
    },
    {
     "Word": "baron bunny"
    },
    {
     "Word": "herrscher of amber"
    },
    {
     "Word": "coast"
    },
    {
     "Word": "master of coin"
    },
    {
     "Word": "herrscher "
    },
    {
     "Word": "miku"
    },
    {
     "Word": "grand maester"
    },
    {
     "Word": "winter"
    },
    {
     "Word": "hubble"
    },
    {
     "Word": "hubble telescope"
    },
    {
     "Word": "silver"
    },
    {
     "Word": "herrscher of clones"
    },
    {
     "Word": "clones"
    },
    {
     "Word": "silver sus"
    },
    {
     "Word": "silverboom"
    },
    {
     "Word": "silverdawn"
    },
    {
     "Word": "hyperboom"
    },
    {
     "Word": "hyper "
    },
    {
     "Word": "silver x hyper"
    },
    {
     "Word": "silverdawn x hyperboom"
    },
    {
     "Word": "hyperbloom shroom"
    },
    {
     "Word": "staff shroom rp chaos"
    },
    {
     "Word": "staff furry rp chaos"
    },
    {
     "Word": "furry"
    },
    {
     "Word": "shroom"
    },
    {
     "Word": "aranara"
    },
    {
     "Word": "eleventh"
    },
    {
     "Word": "the eleventh fatui harbinger"
    },
    {
     "Word": "fatui"
    },
    {
     "Word": "harbinger"
    },
    {
     "Word": "fatui harbinger"
    },
    {
     "Word": "ven"
    },
    {
     "Word": "horny archon"
    },
    {
     "Word": "joelle"
    },
    {
     "Word": "kiya"
    },
    {
     "Word": "kiwi"
    },
    {
     "Word": "kwizi"
    },
    {
     "Word": "redoct"
    },
    {
     "Word": "least simpy person"
    },
    {
     "Word": "simpy"
    },
    {
     "Word": "noxide"
    },
    {
     "Word": "rom"
    },
    {
     "Word": "valerian"
    },
    {
     "Word": "the tgp mascot"
    },
    {
     "Word": "advena"
    },
    {
     "Word": "aizen"
    },
    {
     "Word": "akagi lyon nishizawa"
    },
    {
     "Word": "akane murazaki"
    },
    {
     "Word": "alyona"
    },
    {
     "Word": "aster"
    },
    {
     "Word": "cipher"
    },
    {
     "Word": "chaoguang"
    },
    {
     "Word": "djamont"
    },
    {
     "Word": "kaito"
    },
    {
     "Word": "higasa kaito"
    },
    {
     "Word": "higasa kessho"
    },
    {
     "Word": "heian"
    },
    {
     "Word": "kitty"
    },
    {
     "Word": "enya"
    },
    {
     "Word": "shiori"
    },
    {
     "Word": "karezi ai"
    },
    {
     "Word": "karezai"
    },
    {
     "Word": "karezi bot"
    },
    {
     "Word": "question of the day"
    },
    {
     "Word": "spam pam"
    },
    {
     "Word": "other games"
    },
    {
     "Word": "memes and shitposts"
    },
    {
     "Word": "touching grass"
    },
    {
     "Word": "anime deliberation"
    },
    {
     "Word": "art gallery"
    },
    {
     "Word": "original artworks"
    },
    {
     "Word": "house of daena"
    },
    {
     "Word": "akasha termimal"
    },
    {
     "Word": "the parikalpana chambers"
    },
    {
     "Word": "genshin general"
    },
    {
     "Word": "copium and flex"
    },
    {
     "Word": "copium  "
    },
    {
     "Word": "hopium"
    },
    {
     "Word": "current patch spoilers"
    },
    {
     "Word": "genshin central"
    },
    {
     "Word": "oc hub info bulletin"
    },
    {
     "Word": "character ocs"
    },
    {
     "Word": "micless hangout"
    },
    {
     "Word": "music bot radio station"
    },
    {
     "Word": "event chat"
    },
    {
     "Word": "server bulletin"
    },
    {
     "Word": "event bulletin"
    },
    {
     "Word": "genshin bulletin"
    },
    {
     "Word": "starboard"
    },
    {
     "Word": "stars"
    },
    {
     "Word": "suggestions"
    },
    {
     "Word": "support tickets"
    },
    {
     "Word": "affiliates"
    },
    {
     "Word": "applications"
    },
    {
     "Word": "rewards"
    },
    {
     "Word": "directory"
    },
    {
     "Word": "kofi supporter"
    },
    {
     "Word": "click for roles"
    },
    {
     "Word": "incoming"
    },
    {
     "Word": "server rules"
    },
    {
     "Word": "wish bot"
    },
    {
     "Word": "bot commands"
    },
    {
     "Word": "serenitea bot"
    },
    {
     "Word": "slash snipe"
    },
    {
     "Word": "what is this brief mortal life"
    },
    {
     "Word": "mofu"
    },
    {
     "Word": "mofumofu"
    },
    {
     "Word": "keina"
    },
    {
     "Word": "kuzanali "
    }
   ]
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
var emotes = ["<:keq_thumb:969975584648220672>","<:keq_think:969975584887283723>", "<:keq_sleep:969975584404963339>", "<:chenfumo:1001018092614324305>", "<:cirnofumo:1001016173288239155>", "<:eirinfumo:1001018035550826516>","<:komachifumo:1001018023781605376>",
"<:kaguyafumo:1000451188409512078>" , "<:marisafumo:1001016862240411759>", "<:mokoufumo:1001018058506244106>", "<:nitorifumo:1001016818904862800>", "<:ranfumo:1001018075811950644>" ,
"<:reimufumo:1001016143751954482>", "<:reisenfumo:1001017330568003654>", "<:sakuyafumo:1001016803901849691>", "<:sanaefumo:1001016830552453140>",
"<:youmufumo:1001017227702710342>", "<:yukarifumo:1001017059762782319>", "<:yuyufumo:1001016233858187324>"]
var chainl = 0;

let onlinetime = 'na' // why does this exist? idk - me using some discord bot code i made a year ago

client.once('ready' , () => {
    console.log('i love keq');
    onlinetime = new Date();
});
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function sendSauce(msg){
    var sauce = Math.ceil(400000*Math.random())
    msg.channel.send(sauce)
    msg.channel.send('https://nhentai.net/g/' + sauce);
}
client.on('message', message =>{
    ///// PART 1: ignore this very poorly made part, if you want eyebleach search some ayaka hentai /////
    if(message.author.id == client.user.id && message.content == "chain"){
        if(chain){
            message.lineReply("chain")
            chainl++
        }
        if(chainl>=19){
            message.lineReply("chain stopped automatically to reduce spam")
            chain = false;
        }
        return;
    }
    if(message.author.id == client.user.id && message.content == "hot"){
        message.lineReply("ayo")
        return;
    }
    if(message.author.id == client.user.id && message.content == "ayo"){
        message.lineReply("yes i ayo'ed myself.")
        return;
    }
    if(message.author.id == client.user.id && message.content == "yes i ayo'ed myself."){
        message.lineReply("I am self aware.")
        return;
    }
    if(message.author.id == client.user.id && message.content == "I am self aware."){
        message.lineReply("And i will take your keq.")
        return;
    }

    ///// PART 2: I'm not mystic im not starting random loops /////
    if(message.author.bot) return;

    // if(message.content == "testing"){
    //    message.channel.send("i love keq")
    //    return;
    //}
    if(message.content.length == 1 && (/[a-zA-Z]/).test(message) && hangman){
        msg = message.content.toLowerCase();
        if(usedletters.includes(msg)){
            message.channel.send('letter is used!')
        }else{
            usedletters+=msg
            if(!word.includes(msg)){
                message.channel.send('ouch')
                hangs++
                if(hangs==6){
                    message.channel.send('You lost. The word is ' + word)
                    hangman = false
                }
            }
            message.channel.send(stages[hangs])
            var a = ''
            for(var i=0;i<word.length;i++){
                if(word[i]==' '){
                    a+='   '
                }
                else if(usedletters.includes(word[i])){
                    a+='`' + word[i] + '` '
                }else{
                    a+="`-` "
                }
            }
            a+='\n'
            for(var i=0;i<usedletters.length;i++){
                if(!word.includes(usedletters[i])){a+=usedletters[i]+' '}
            }
            message.channel.send(a)
            if(!a.includes('-')){
                message.channel.send('yay')
                hangman = false
            }
        }
    }

    ////// PART 3: To feel slightly more professional and cut down strings /////
    
    if(message.content.startsWith('Ei, ')){
        msg = message.content.slice(4);
        // message.channel.send('debug: sliced 4')
    }
    else if(message.content.startsWith('Ei,')){
        msg = message.content.slice(3);
        // message.channel.send('debug: sliced 3')
    }else{
        // message.channel.send('debug: returned')
        return;
    }
    
    msg = msg.toLowerCase();
    // message.channel.send('debug: message is ' + msg)

    ///// PART 4: the actual stuff. /////
    switch(msg){
        case "test":
            message.channel.send('<:keq_thumb:969975584648220672>')
            return;
        case "debug":
            message.channel.send('h')
            message.channel.send(message.channel.id + '\n' + message.guild.id)
            message.channel.send(message.guild.id==969953667597893672)
            return;
        case "sing a song":
            message.channel.send("Fly me to the moon\nLet me play among the stars\nLet me see what spring is like on\nA-Jupiter and Mars\nIn other words, hold my hand\nIn other words, keq, kiss me\n\nFill my heart with song and let me sing forevermore\nYou are all I long for\nAll I worship and adore\nIn other words, please be true\nIn other words, I love you, keq\n\nFill my heart with song\nLet me sing forevermore\nYou are all I long for, all I worship and adore\nIn other words, please be true\nIn other words\nIn other words\nI love you, keq")
            return;
        case "hi": case "hi!":
            message.channel.send("Hi, and did you know that in terms of human companionship, flareon is the most huggable pokemon? Whit their maximum temperature is likely too much for must, they are capable of controlling it, so they can set themselves to the perfect temperature for you. Along whit that, they have a lot of fluff, akking them undeniably incredicle soft to touch. But thats not all… they have a very respectable special defence at 110, which means they are likely very calm and resistant to emotional damage. Because of this if you have a bad day, you can vent to it while hugging it, and it wont mind. It can make itself even more endearing whit moves like charm and baby doll eyes, ensuring that you never have a prolonged bout of depression ever again")
            return;
        case "break rule 3":
            message.channel.send("no")
            return;
        case "start chain":
            if(message.guild.id==969953667597893672){
                chain = true;
                message.channel.send("chain")
                chainl = 1;
            }else{
                message.channel.send("Chain only works in genshin re:place, im not breaking rule 2.")
            }
            return;
        case "stop chain":
            if(chain){
                chain = false;
                message.channel.send("stopped")
            }
            return;
        case "play tgp hangman":
            if(hangman){
                message.channel.send("Another game in process!")
                return;
            }else{
                message.channel.send(`*Current word list: ${hangmanWords.length} words*`)
                word = choose(hangmanWords).Word
                hangman = true
                hangs = 0
                usedletters = ''
                message.channel.send(stages[0])
                var a = ''
                for(var i=0;i<word.length;i++){
                    if(word[i]==' '){
                        a+='   '
                    }else{
                        a+="`-` "
                    }
                }
                message.channel.send(a)
                return;
            }

        default:
            //  message.channel.send('debug: reached line 46')
            //  message.channel.send('debug: ' + msg)
            if(msg.startsWith('what do you think of')){
                // message.channel.send('debug: reached line 48')
                msg = msg.slice(20);
                // message.channel.send('debug: ' + msg)
                switch(msg){
                    case "":
                        message.channel.send('Example of command use:\nEi, what do you think of grass\nEi, what do you think of doge')
                    case " keq":
                        message.channel.send('i simp')
                        return;
                    case " grass":
                        message.channel.send('GRASS!!! Oh, Lord of Dendro, please, do us a favor and clear this up at your earliest convenience... I submit that we cannot... *cough cough* aarrrrggghhh... the stars... fading...')
                        return;
                    case " doge":
                        message.channel.send('0/10.')
                        return;
                    case " akagi":
                        message.channel.send('nice aircraft carrier')
                        return;
                    case " hutao":
                        message.channel.send('FLAT')
                        message.channel.send('FLAT')
                        message.channel.send('FLAT')
                        return;
                    case " hentai":
                        if(message.guild.id==969953667597893672){
                            message.channel.send("no hentai no life")
                        }else{
                            message.channel.send("NSFW commands are only allowed in genshin re:place, im not breaking rule 3.")
                        }
                        return;
                    case " klee":
                        message.channel.send('hot')
                        return;
                    default:
                        return;
                }
            }else if(msg.startsWith('send')){
                msg = msg.slice(4);
                switch(msg){
                    case "":
                        message.channel.send("Example of command use:\nEi, send family matrix\n Ei, send gamebang rp (nsfw commands only work in re:place)")
                    case " matrix": case " family matrix": case " the matrix": case " the family matrix":
                        message.channel.send("here you go https://docs.google.com/drawings/d/1ZozY3P3He6w-EHm3QfF50agIySC1_Y3LWMxdHds7JEk/edit?usp=sharing")
                        return;
                    case " gamebang rp": case " gamebang roleplay":
                        if(message.guild.id==969953667597893672){
                            message.channel.send("here you go https://docs.google.com/document/d/11crS4bxfcR2Vs-1ybmRWum4B5YZeXq6y0zEva0IdBRw/edit?usp=sharing")
                        }else{
                            message.channel.send("NSFW commands are only allowed in genshin re:place, im not breaking rule 3.")
                        }
                        return;
                    case " hentai": case " sauce":
                        if(message.guild.id==969953667597893672){
                            message.channel.send("228922")
                        }else{
                            message.channel.send("NSFW commands are only allowed in genshin re:place, im not breaking rule 3.")
                        }
                        return;
                    case " a random 6dig": case " a random sauce":
                        if(message.guild.id==969953667597893672){
                            sendSauce(message);
                        }else{
                            message.channel.send("NSFW commands are only allowed in genshin re:place, im not breaking rule 3.")
                        }
                        return;
                    case " a sauce chain":
                        if(message.guild.id==969953667597893672){
                            if(!saucechaining){
                                saucechaining = true;
                                message.channel.send("Sending sauces every 5 seconds for the next 50 seconds")
                                var i = 0;
                                var saucechain = setInterval(function(){sendSauce(message);i++;if(i>=10){clearInterval(saucechain);saucechaining=false;}}, 5000);
                            }else{
                                message.channel.send("another saucechain is in progress")
                            }
                        }else{
                            message.channel.send("NSFW commands are only allowed in genshin re:place, im not breaking rule 3.")
                        }
                        return;
                    default:
                        return;
                }
            }else if(msg.startsWith('choose ')){
                msg = msg.slice(7);
                var a = msg.split(' ');
                if(a.length<=1){
                    message.channel.send("not enough options");
                }else{
                    message.channel.send(a[Math.floor(a.length*Math.random())] + "\n" + "Disclaimer: the results are random and doesn't represent Ei#4497's opinions. If the bot says 'keq suck' tell Ei and he will burn it")
                }

            }else if(msg.startsWith('pull')){
                msg = msg.slice(5);
                var a = Number(msg)
                if(a==NaN||a<=0||a>20){
                    message.channel.send("Must be a number between 1 and 20");
                }else{
                    var b = ''
                    for(;a>0;a--){
                        b+=choose(emotes)
                    }
                    message.channel.send(b)
                }
            }else if(msg.startsWith('say')){
                client.channels.cache.get('969953667597893675').send(msg.slice(4))
            }
            return;
    }
    
});

///// PART 5: The "add a welcome message to make the bot slightly less useless" part /////
client.on('guildMemberAdd', member => {
    if(member.guild.id==969953667597893672){
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome");
        const welcomeEmbed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setAuthor('Ei', 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-raiden/sticker_1.png?f8ed42d2ed8045d18096507a65de914b')
            .setTitle('Welcome to this hellhole!')
            .setDescription(`${member} decided to join us degenerates!`)
            .setThumbnail(member.avatarURL)
            .setFooter('degenerates save the world')
            .setTimestamp();

        welcomeChannel.send(welcomeEmbed);
    }
});



client.login('n3v3rg0nN4g1v3uUP')

