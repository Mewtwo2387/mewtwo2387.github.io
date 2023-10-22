// v 5.1

function log(str,css){
    var d = new Date();
    var n = d.toLocaleTimeString();
    console.log(`%c[${n}] %c${str}`,'color:#555',css)
}

IdlePixelPlus.sendMessage = function(message){
    if(typeof message !== "string"){
        throw new TypeError("IdlePixelPlus.sendMessage takes the following arguments: (message:string)");
    }
    if(window.websocket && window.websocket.connected_socket && window.websocket.connected_socket.readyState==1) {
        if(message=='TAB_OFF'||message=='TAB_ON'){
            log('Stopped ' + message + ' message (from IDP)','color:red')
        }else{
            log('Sent using IDP+: ' + message,'color:#333')
            window.websocket.connected_socket.send(message);
        }
    }
}

websocket.send = function(message){
    if(message=='TAB_OFF'||message=='TAB_ON'){
        log('Stopped ' + message + ' message','color:red')
    }else{
        log('Sent: ' + message,'color:#333')
        this.connected_socket.send(message);
    }
}

var number;
var initxp;
function fight(){
    setTimeout(function(){
        number++;
        IdlePixelPlus.plugins.slapchop.quickFight('field');
        log(`Fight ${number}`,'font-weight:bolder')
        setTimeout(function(){
            websocket.send("SPELL=heal");
            log('Casted Heal','color:green')
        },normal(100,30))
        setTimeout(function(){
            websocket.send("SPELL=invisibility");
            log('Casted Invis','color:green')
        },normal(100,30))
        setTimeout(function(){
            websocket.send("SPELL=reflect");
            log('Casted Reflect','color:green')
        },normal(100,30))
        setTimeout(function(){
            websocket.send("SPELL=fire");
            log('Casted Fire','color:green')
        },normal(200,50))
    },normal(0,3000))
    setTimeout(function(){check(false);},12000)
}


function check(reflect){
    if(var_fight_points<300){
        log('Not enough fight points!','color:red')
        log(`XP: ${var_magic_xp}`)
        log(`XP Earned: ${var_magic_xp - initxp}`)
    }else if(var_energy<50){
        log('Not enough energy!','color:red')
        log(`XP: ${var_magic_xp}`)
        log(`XP Earned: ${var_magic_xp - initxp}`)
    }else{
        log('continue...','color:green')
        log(`XP: ${var_magic_xp}`)
        if(reflect){
            setTimeout(function(){number++;
            IdlePixelPlus.plugins.slapchop.quickFight('field');
            log(`Fight ${number}`,'font-weight:bolder');

            websocket.send('PRESET_LOAD=2~0')
            log('Switched to empty bow','color:green');fightref();},5000*Math.random())
        }else{fight();}
    }
}

function fightref(){
    websocket.send("SPELL=reflect");
    log('Casted Reflect','color:green')
    setTimeout(function(){
        websocket.send("SPELL=invisibility");
        log('Casted Invis','color:green')
    },normal(100,50))
    setTimeout(function(){ 
        log(`Mana: ${var_mana}`,'color:blue')
        if(var_mana==0){
            log('Not enough mana! Switching to regular gear','color:red')
            websocket.send('PRESET_LOAD=1~0')
            setTimeout(function(){
                setTimeout(function(){check(true);},5000)
            },10000)
        }else if(var_monster_hp<=0){
            log('Mob died','color:red')
            setTimeout(function(){
                setTimeout(function(){check(true);},5000)
            },3000)
        }else{
            setTimeout(function(){
                fightref()
            },normal(30000,2000))
        }
    },1000)
}

function autofight(reflect){
    number = 0
    log(`XP: ${var_magic_xp}`)
    initxp = var_magic_xp
    check(reflect)
    if(!reflect){
        websocket.send('PRESET_LOAD=1~0')
        log('Switched to melee','color:green');
    }
}

function boxMullerTransform() {
    const u1 = Math.random();
    const u2 = Math.random();
    
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
    
    return { z0, z1 };
}

function normal(mean, stddev) {
    const { z0, _ } = boxMullerTransform();
    return Math.abs(z0) * stddev + mean;
}
