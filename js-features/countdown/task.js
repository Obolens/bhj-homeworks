const countdown = function(){
    const output = document.getElementById("timer");
    if (output.textContent >= '1'){
        output.textContent --;
    }
    else if (output.textContent = '0')
    alert("Вы победили в конкурсе!");
}

setInterval(countdown, 1000)