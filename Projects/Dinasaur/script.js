var char = document.getElementById('character');
var block = document.getElementById('block');

function jump(){
    if (char.classList != 'animate'){
        char.classList.add('animate');
        setTimeout(function(){
            char.classList.remove('animate');
        }, 500)
    }
}

// Add event listener
document.addEventListener('click', jump);
