let puntajes = document.querySelectorAll(".puntaje");

let numerosClicked = [0,0,0,0,0]; //TODO: armar lista no hardcodeada

let puntajeFinal = 0;

for(let i = 0; i < puntajes.length; i++) {
    puntajes[i].addEventListener('mouseover', function() {
        if(this.style.backgroundColor != "rgb(251, 116, 19)"){
            this.style.color = "white";
            this.style.backgroundColor = "rgb(124, 135, 152)";
        }
    });
}

for(let i = 0; i < puntajes.length; i++) {
    puntajes[i].addEventListener('mouseout', function() {
        if(this.style.backgroundColor != "rgb(251, 116, 19)"){
            this.style.color = "rgb(124, 135, 152)";
            this.style.backgroundColor = "rgb(37, 45, 55)";
        }
    });
}

for(let i=0; i<puntajes.length; i++){
    puntajes[i].addEventListener('click', function(){
        if(this.style.backgroundColor != "rgb(251, 116, 19)"){
            for(j=0; j<puntajes.length; j++){
                if(this != puntajes[j] && puntajes[j].style.backgroundColor == "rgb(251, 116, 19)"){
                    puntajes[j].style.color = "rgb(124, 135, 152)";
                    puntajes[j].style.backgroundColor = "rgb(37, 45, 55)";
                }
            }
            this.style.color = "white";
            this.style.backgroundColor = "rgb(251, 116, 19)";
            puntajeFinal = this.innerHTML;
            console.log(puntajeFinal);
        }
    });
}

document.getElementById('boton-enviar').addEventListener('mouseover', function(){
    this.style.color = "rgb(251, 116, 19)";
    this.style.backgroundColor = "white";
});

document.getElementById('boton-enviar').addEventListener('mouseout', function(){
    this.style.color = "white";
    this.style.backgroundColor = "rgb(251, 116, 19)";
});

document.getElementById('boton-enviar').addEventListener('click', function(){
    document.getElementById('puntaje-final').innerHTML = puntajeFinal;
    document.getElementById('puntuacion').style.display = 'none';
    document.getElementById('agradecimiento').style.display = 'grid';
});