/// Sumatorio

function sumatorioSigma() {
 
    const num1 = document.getElementById("number1").value

    if (!num1) {
        alert("Debe ingresar un valor.");
        return false
    }

    let sum = 0;

    for (n = 0; n <= 4; n++) {
        sum += 3 * n;
        return sum
    }

    
    $('#res1').html
}

/// Productorio

function productorioPi() {

    const num2 = document.getElementById("number2").value

    if (!num2) {
        alert("Debe ingresar un valor.");
        return false
    }

    let prod = 1;

    for (n = 1; n <= 4; n++) {
        prod *= 2 * n;
        console.log(prod)
    }

    
    $('#res2').html
}

/// Sucesion de Fibonacci

function sucesionDeFibonacci() {

    const num3 = document.getElementById("number3").value

    if (!num3) {
        alert("Debe ingresar un valor.");
        return false
    }

    else {

        function fib(n) {

            if (n < 2) {
                return n;
            }

            return fib(n - 1) + fib(n - 2);
        }

        $('#res3').html(`<h2 style='color: #064A86;'>La posición ${num3} se trata del número ${fib(num3)} de la sucesión.</h2>`)
    }
};

// Algoritmo para la funcionalidad del input type number en dispositivos móviles

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    var inputs = document.querySelectorAll('input[type="number"]');
    for (var i = inputs.length; i--;)
        inputs[i].setAttribute('pattern', '\\d*');
}