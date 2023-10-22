
$(function() {
    $(window).on('resize', function(e) {
        a();
    })
})
window.onload = (event) => {
    a();
};

function cssrules() {
    var rules = {};
    for (var i=0; i<document.styleSheets.length; ++i) {
        var cssRules = document.styleSheets[i].cssRules;
        for (var j=0; j<cssRules.length; ++j)
            rules[cssRules[j].selectorText] = cssRules[j];
    }
    return rules;
}

function css_getclass(name) {
    var rules = cssrules();
    if (!rules.hasOwnProperty(name))
        throw 'TODO: deal_with_notfound_case';
    return rules[name];
}

function linedraw(ax,ay,bx,by)
{
    if(ay>by)
    {
        bx=ax+bx;  
        ax=bx-ax;
        bx=bx-ax;
        by=ay+by;  
        ay=by-ay;  
        by=by-ay;
    }
    var calc=Math.atan((ay-by)/(bx-ax));
    calc=calc*180/Math.PI;
    var length=Math.sqrt((ax-bx)*(ax-bx)+(ay-by)*(ay-by));
    document.body.innerHTML += "<div id='line' style='height:" + length + "px;width:1px;background-color:black;position:absolute;top:" + (ay) + "px;left:" + (ax) + "px;transform:rotate(" + calc + "deg);-ms-transform:rotate(" + calc + "deg);transform-origin:0% 0%;-moz-transform:rotate(" + calc + "deg);-moz-transform-origin:0% 0%;-webkit-transform:rotate(" + calc  + "deg);-webkit-transform-origin:0% 0%;-o-transform:rotate(" + calc + "deg);-o-transform-origin:0% 0%;'></div>"
}

function a(){
    var x = $(this).width()
    var y = $(this).height()
    if(x>2*y){
        var h = y
        var w = y*2
    }else{
        var h = x/2
        var w = x
    }
    document.getElementById("main").style.height = h + 'px';
    document.getElementById("main").style.width = w + 'px';
    console.log(h + 'x' + w)

    document.getElementById("ball").style.height = h + 'px'
    document.getElementById("ball").style.width = h + 'px'
    css_getclass('h1').style.fontSize = h/20 + 'px'
    console.log(h/20 + 'px')
}

function gen(amount,dist,starProb,binProb){
    for(;amount>0;amount--){
        var theta = Math.random()*Math.PI*2
        if(dist=='polar'){
            var r = Math.random()*50
        }else if(dist=='uniform'){
            var r = Math.sqrt(Math.random())*50
        }
        console.log(theta + ',' + r)
        var x = r * Math.cos(theta)
        var y = r * Math.sin(theta)
        console.log(x + ',' + y)
        var rand = Math.random()
        for(var i=0;i<5;i++){
            if(rand<=starProb[i]){
                plot(x,y,i)
                break
            }else{
                rand -= starProb[i]
            }
        }
    }
}

function plot(x,y,star){
    document.getElementById('ball').innerHTML += `<div class='s${star}' style='top:${x + 50}%;left:${y + 50}%'></div>`
}