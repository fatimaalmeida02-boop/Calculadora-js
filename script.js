window.onload = function() {

    let visor = document.getElementById("visor");

    window.adicionar = function(valor) {
        if (visor.innerText === "0") {
            visor.innerText = valor;
        } else {
            visor.innerText += valor;
        }
    }

    window.limpar = function() {
        visor.innerText = "0";
    }

    window.calcular = function() {
        try {
            visor.innerText = eval(visor.innerText);
        } catch {
            visor.innerText = "Erro";
        }
    }

}
