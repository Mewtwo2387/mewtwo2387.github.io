const ws = new WebSocket('wss://server-mewtwo2387.pagekite.me');
ws.onmessage = event => {
    var message = event.data + '';
    let cutMessage = message.split('~')
        switch(cutMessage[0]){
            case 'LOGIN':
                if(cutMessage[1]=='error'){
                    loginError(cutMessage[2])
                }else{
                    loginSuccess(cutMessage[2])
                }
                return;
            case 'SIGNUP':
                if(cutMessage[1]=='error'){
                    signupError(cutMessage[2])
                }else{
                    signupSuccess()
                }
                return;
            case 'CHAT':
                byId('chat').innerHTML += '\n' + cutMessage[1]
                return;
            default:
                return;
        }
}
