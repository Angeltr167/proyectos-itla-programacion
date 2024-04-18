function generarTarjetas() {
    let tarjetas = [];
    for (let i = 0; i < 40; i++) {
        let numero = ('0000' + Math.floor(Math.random() * 10000)).slice(-4);
        tarjetas.push(numero);
    }
    localStorage.setItem('tarjetas', JSON.stringify(tarjetas));
    mostrarTarjetas();
}

function mostrarTarjetas() {
    const tarjetasContainer = document.querySelector('.tarjetas-container');
    tarjetasContainer.innerHTML = '';
    const tarjetas = JSON.parse(localStorage.getItem('tarjetas'));
    tarjetas.forEach((numero, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        tarjeta.textContent = `${index + 1}: ${numero}`;
        tarjetasContainer.appendChild(tarjeta);
    });
}

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 40) + 1;
}

function validarNumero() {
    const numeroIngresado = document.getElementById('input-numero').value.trim();
    console.log("Número ingresado:", numeroIngresado);
    
    const numeroAleatorio = parseInt(document.getElementById('numero-a-validar').textContent.slice(15));
    console.log("Número aleatorio a validar:", numeroAleatorio);
    
    const tarjetaAValidar = JSON.parse(localStorage.getItem('tarjetas'))[numeroAleatorio - 1];
    console.log("Tarjeta a validar:", tarjetaAValidar);
    
    const resultado = document.getElementById('resultado');
    if (numeroIngresado === tarjetaAValidar) {
        resultado.textContent = '¡El número es válido!';
    } else {
        resultado.textContent = 'El número es inválido.';
        console.log("Comparación fallida:", numeroIngresado, "!=", tarjetaAValidar);
    }
}

window.onload = function() {
    if (!localStorage.getItem('tarjetas')) {
        generarTarjetas();
    }
    mostrarTarjetas();
    const numeroAleatorio = obtenerNumeroAleatorio();
    document.getElementById('numero-a-validar').textContent += numeroAleatorio;
}
