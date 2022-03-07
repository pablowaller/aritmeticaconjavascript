/// Sumatorio

function sumatorio() {

    let sum = 0;

    for (n = 0; n <= 4; n++) {
        sum += 3 * n;
        return sum
    }
}

/// Productorio

function productorio() {

    let prod = 1;

    for (n = 1; n <= 4; n++) {
        prod *= 2 * n;
        console.log(prod)
    }
}

/// Sucesion de Fibonacci

function sucesionDeFibonacci() {

    const num = document.getElementById("number").value

    if (!num) {
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

        $('#res3').html(`<h2 style='color: #064A86;'>La posición ${num} se trata del número ${fib(num)} de la sucesión.</h2>`)
    }
};

// iOS detection from: stackoverflow.com/a/9039885 with explanation about MSStream
if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
{
    var inputs = document.querySelectorAll('input[type="number"]');
    for(var i = inputs.length; i--;)
        inputs[i].setAttribute('pattern', '\\d*');
}
