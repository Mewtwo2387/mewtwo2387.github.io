titles = ['Redoctify','M4sterify','Ei-ify','Millionify','Uwufy','Egirlify','Mirror Text','Text to Binary','Text to Non-Binary','Message Joiner','Randomizer']
descs = ["Redoct's computer keyboard is missing the 'a' key.",
"M4ster's keyboard's fff key malfffunctions",
"Ei's phone keyboard repeats the previous letters if it goes from a non-letter to a letter, if the word ends in a letter. For example, 100hkd becomes 100100hkd, can't becomes can'can't, while hkd100 or can't' is not affected.",
"Million's keyboard somehow have jammed up the s key with 9 key, and the [ key with space bar. Typing s gives 's9', typing 9 gives '9s', typing space gives ' [', typing [ gives '[ '",
"uwufies the uwuords, hewwo! ",
"oomfie!!!!! This uwuorks best twogethew with uwufy,,,,,",
'Flip text from left to right, thgir ot tfel morf txet pilF',
"Does the 01000001 01010011 01000011 01001001 01001001 stuff",
"Does the 41 53 43 49 49 stuff",
"When you are doing the each-person-write-one-letter-at-a-time thing on discord but too lazy to put them together manually after writing a long paragraph so you write a program to do the job. It removes every other line and spaces, then joins the rest together."
,"Makes complete gibberish, just like me writing all these useless programs"]
usages = ['','','','','','','','','',"Copy the messages from discord and paste it here. Keqboard will remove the names for you. Note that you cannot highlight too many messages at once on discord so separate it into multiple sections if too long.",'']
function tooltip(id,e){
    if(id>=0){
        document.getElementById('tooltip').style.display = 'inline';
        if(e.clientX<=document.documentElement.clientWidth*0.7){
            document.getElementById('tooltip').style.left = e.clientX;
            document.getElementById('tooltip').style.right = null;
        }else{
            document.getElementById('tooltip').style.left = null;
            document.getElementById('tooltip').style.right = document.documentElement.clientWidth - e.clientX;
        }
        document.getElementById('tooltip').style.top = e.clientY;
        document.getElementById('title').innerHTML = titles[id];
        document.getElementById('desc').innerHTML = descs[id];
        if(usages[id]!=''){
            document.getElementById('usage').style.display = 'block'
            document.getElementById('usage').innerHTML = "Usage: " + usages[id];
        }else{
            document.getElementById('usage').style.display = 'none'
        }

    }else{
        document.getElementById('tooltip').style.display = 'none';
    }
}
function calc(){
    var input = ''
    var output = document.getElementById('input').value
    if(document.getElementById('0').checked){
        input = output
        output = ''
        for(var i=0;i<input.length;i++){
            if(input[i]!='a' && input[i]!='A'){
                output+=input[i]
            }
        }
    }
    if(document.getElementById('1').checked){
        input = output
        output = ''
        for(var i=0;i<input.length;i++){
            if(input[i]=='f' || input[i]=='F'){
                output+=input[i].repeat(3)
            }else{
                output+=input[i]
            }
        }
    }
    if(document.getElementById('2').checked){
        input = output
        output = ''
        line = input.split('\n')
        for(var i=0;i<line.length;i++){
            line[i] = line[i].split(' ')
            for(var j=0;j<line[i].length;j++){
                if(/[A-Za-z]/.test(line[i][j][line[i][j].length-1])){
                    for(var k=line[i][j].length-1;k>=0;k--){
                        if(!(/[A-Za-z]/.test(line[i][j][k]))){
                            for(var l=0;l<=k;l++){
                                output+=line[i][j][l]
                            }
                            break;
                        }
                    }
                }
                output+=line[i][j]
                if(j!=line[i].length-1){
                    output+=' '
                }
            }
            if(i!=line.length-1){
                output+='\n'
            }
        }
    }
    if(document.getElementById('3').checked){
        input = output
        output = ''
        for(var i=0;i<input.length;i++){
            if(input[i]=='s'){
                output+='s9'
            }else if(input[i]=='9'){
                output+='9s'
            }else if(input[i]=='['){
                output+='[ '
            }else if(input[i]==' '){
                output+=' ['
            }else{
                output+=input[i]
            }
        }
    }
    if(document.getElementById('4').checked){
        input = output
        output = ''
        for(var i=0;i<input.length;i++){
            if(input[i]=='l' || input[i]=='r'){
                output+='w'
            }else if(input[i]=='w' || input[i]=='u'){
                if(input[i-1]!='w' && input[i-1]!='u'){
                    output+='uwu'
                }else{
                    output+=input[i]
                }
            }else if(input[i]=='y'){
                if(/[\!\?\,\. ]/.test(input[i+1]) || input[i+1]=='\n' || i==input.length-1){
                    output+='ie'
                }else{
                    output+=input[i]
                }
            }else{
                output+=input[i]
            }
        }
    }
    if(document.getElementById('5').checked){
        input = output
        output = "hai oomfie!!!,,, "
        for(var i=0;i<input.length;i++){
            if(input[i]=='\n'){
                output+=',,,\n'
            }else if(input[i]=='.'){
                output+=',,,'
            }else if(input[i]=='!' || input[i]=='?'){
                output+=input[i].repeat(3)
            }else{
                output+=input[i]
            }
        }
        output+=",,,,,,"
    }
    if(document.getElementById('6').checked){
        input = output
        output = input.split("").reverse().join("");
    }
    if(document.getElementById('7').checked){
        input = output
        output = ''
        for(var i=0;i<input.length;i++){
            output+=input[i].charCodeAt(0).toString(2)+' '
        }
    }
    if(document.getElementById('8').checked){
        input = output
        output = ''
        for(var i=0;i<input.length;i++){
            output+=input[i].charCodeAt(0).toString(16)+' '
        }
    }
    if(document.getElementById('9').checked){
        input = output
        output = ''
        var line = 0;
        for(var i=0;i<input.length;i++) {
            if(input[i]=='\n'){
                line++;
            }else if(line%2==1&&input[i]!=' '){
                output+=input[i];
            }
        }   
    }
    if(document.getElementById('10').checked){
        input = output
        output = ''
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(var i=0;i<input.length;i++) {
            if(input[i]==' ' || input[i]=='\n'){
                output+=input[i]
            }else{
                output += chars.charAt(Math.floor(Math.random()*chars.length));
            }
        }   
    }
    document.getElementById('output').value = output
}