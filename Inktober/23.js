function pull(){
    var v = document.getElementById('videoContainer')
    var q = document.getElementById('qiqiContainer')
    var b = document.getElementById('pull')
    v.style.display='block'
    q.style.display='none'
    b.disabled = true
    b.innerHTML = 'Pulling...'
    setTimeout(function() {
        q.style.display='block'
        v.style.display='none'
        b.innerHTML = 'Congrats! You got 10 qiqis!'
    }, 6500);
}