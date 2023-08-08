document.getElementById('boton-enviar').addEventListener('click', function(){
    //let puntaje (obtener elemento seleccionado)
    document.getElementById('puntuacion').style.display = 'none';
    document.getElementById('agradecimiento').style.display = 'grid';
});

/*document.getElementById('circulo-1').addEventListener('mouseover', cambiarColorNumeroMouseOver(this));
document.getElementById('circulo-2').addEventListener('mouseover', cambiarColorNumeroMouseOver(this));
document.getElementById('circulo-3').addEventListener('mouseover', cambiarColorNumeroMouseOver(this));
document.getElementById('circulo-4').addEventListener('mouseover', cambiarColorNumeroMouseOver(this));
document.getElementById('circulo-5').addEventListener('mouseover', cambiarColorNumeroMouseOver(this));
document.getElementById('circulo-1').addEventListener('mouseover', cambiarColorNumeroMouseOut(this));
document.getElementById('circulo-2').addEventListener('mouseover', cambiarColorNumeroMouseOut(this));
document.getElementById('circulo-3').addEventListener('mouseover', cambiarColorNumeroMouseOut(this));
document.getElementById('circulo-4').addEventListener('mouseover', cambiarColorNumeroMouseOut(this));
document.getElementById('circulo-5').addEventListener('mouseover', cambiarColorNumeroMouseOut(this));*/

function cambiarColorNumeroMouseOver(numero){
    numero.style.color = "white";
    numero.style.backgroundColor = "rgb(124, 135, 152)";
}

function cambiarColorNumeroMouseOut(numero){
    numero.style.color = "rgb(124, 135, 152)";
    numero.style.backgroundColor = "rgb(37, 45, 55)";
}

/*onmouseover="cambiarColorNumeroMouseOver(this)" onmouseout="cambiarColorNumeroMouseOut(this)"*/

/*const demoClasses = document.querySelectorAll('.demo-class');

demoClasses.values*/