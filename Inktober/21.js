var pp = 1
var milk = 1
function load(){
    document.getElementById('pp').innerHTML = `Venti PP length: ${pp} inches`
    document.getElementById('enlarge').innerHTML = `Enlarge (Costs ${5*pp*pp} ml boy milk)`
    document.getElementById('milk').innerHTML = `Boy Milk: ${milk} ml`
}
function enlarge(){
    if(milk>=5*pp*pp){
        milk-=5*pp*pp
        pp++
        load()
    }
}
setInterval(() => {
    milk += pp
    load()
},1000)