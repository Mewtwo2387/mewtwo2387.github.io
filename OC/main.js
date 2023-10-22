var OC,OCid;
setTimeout(function(){
    OC = document.getElementsByClassName('OC')
    OCid = [];
    for (var i=0;i<OC.length;i++) {
        OCid.push(OC[i].id)
    }
},10)

function search(){
    s = document.getElementById("searchBar").value.toLowerCase();
    for(var i=0;i<OCid.length;i++){
        if(OCid[i].toLowerCase().includes(s)){
            document.getElementById(OCid[i]).style.display = 'block'
        }else{
            document.getElementById(OCid[i]).style.display = 'none'
        }
    }
}
