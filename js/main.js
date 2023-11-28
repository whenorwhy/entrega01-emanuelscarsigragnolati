function convertir() {
    const monto = Number(document.getElementById("monto").value);
    let miMoneda = document.getElementById("miMoneda").value;
    let moneda = document.getElementById("moneda").value;


    function dolares() {
        if (moneda == "usd") {
            document.getElementById('resultado').innerText = ("son " + resul.toFixed(2) + " USD")
        }
    }

    if (monto == 0) {
        alert("introduzca un numero para hacer la conversion");
    } else if (moneda == miMoneda) {
        alert("no pudes cambiar dos divisas iguales");
    } else if (miMoneda == "usd") {
        var resul = monto;
    } else if (miMoneda == "eur") {
        var resul = monto / 0.91;
        dolares();
    } else if (miMoneda == "ars") {
        var resul = monto / 955;
        dolares();
    } else if (miMoneda == "clp") {
        var resul = monto / 869;
        dolares();
    } else if (miMoneda == "btc") {
        var resul = monto / 0.000027;
        dolares();
    } else if (miMoneda == "ltc") {
        var resul = monto / 0.014;
        dolares();
    } else if (miMoneda == "slp") {
        var resul = monto / 445;
        dolares();
    }

    if (monto == 0 || moneda == miMoneda) {} else if (moneda == "eur") {
        resultado = resul / 1.10;
        document.getElementById('resultado').innerText = ("son " + resultado.toFixed(2) + " EUR");
    } else if (moneda == "ars") {
        resultado = resul / 0.0010;
        document.getElementById('resultado').innerText = ("son " + resultado.toFixed(2) + " ARS");
    } else if (moneda == "clp") {
        resultado = resul / 0.0011;
        document.getElementById('resultado').innerText = ("son " + resultado.toFixed(2) + " CLP");
    } else if (moneda == "btc") {
        resultado = resul / 37445;
        document.getElementById('resultado').innerText = ("son " + resultado.toFixed(5) + " BTC");
    } else if (moneda == "ltc") {
        resultado = resul / 68;
        document.getElementById('resultado').innerText = ("son " + resultado.toFixed(5) + " LTC");
    } else if (moneda == "slp") {
        resultado = resul / 0.0025;
        document.getElementById('resultado').innerText = ("son " + resultado.toFixed(5) + " SLP");
    }
}