function atualizarTempo(){
    var display = document.querySelector('.display');

    var agora = new Date();

    horario = agora.getHours()  + ':' + corrigirNumero(agora.getMinutes()) + ':' + corrigirNumero(agora.getSeconds());
    
    display.textContent = horario;
}

function corrigirNumero(numero){
    if(numero < 10){
        numero = '0' + numero; 
    }

    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);