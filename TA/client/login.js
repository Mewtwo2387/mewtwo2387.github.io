function login(){
    if(val('loginUsername')==''||val('loginPassword')==''){
        loginError('Fill in all boxes smh')
    }else{
        ws.send(`LOGIN~${val('loginUsername')}~${val('loginPassword')}`)
    }
}

function signup(){
    if(val('signupUsername')==''||val('signupPassword')==''||val('signupPassword2')==''){
        signupError('Fill in all boxes smh')
    }else if(val('signupPassword')!=val('signupPassword2')){
        signupError('Password does not match smh')
    }else{
        ws.send(`SIGNUP~${val('signupUsername')}~${val('signupPassword')}`)
    }
}



function loginError(error){
    byId('loginError').innerHTML = error;
}

function loginSuccess(data){
    var gameData = JSON.parse(data)
    console.log(gameData)
    byId('chatDiv').style.display = 'block'
    byId('mainDiv').style.display = 'none'
}

function signupError(error){
    byId('signupError').innerHTML = error;
}

function signupSuccess(){
    byId('signupError').innerHTML = 'Signup Successful. You may now log in.';
}

function chat(){
    if(val('chatInput')!=''){
        ws.send(`CHAT~${val('chatInput')}`)
        byId('chatInput').value = ''
    }
}