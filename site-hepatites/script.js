
    function showContatos(event) {
        event.stopPropagation();
        document.getElementById("contatos").classList.toggle("show");
    }

    function showHepatiteA(event) {
        event.stopPropagation();
        document.getElementById("hepatiteA").classList.toggle("show");
    }

    document.addEventListener("click", function (event) {
        var hepatiteA = document.getElementById("hepatiteA");
        hepatiteA.classList.remove("show");
    })

    function showHepatiteB(event) {
        event.stopPropagation();
        document.getElementById("hepatiteB").classList.toggle("show");
    }

    document.addEventListener("click", function (event) {
        var hepatiteB = document.getElementById("hepatiteB");
        hepatiteB.classList.remove("show");
    })

    function showHepatiteC(event) {
        event.stopPropagation();
        document.getElementById("hepatiteC").classList.toggle("show");
    }

    document.addEventListener("click", function (event) {
        var hepatiteC = document.getElementById("hepatiteC");
        hepatiteC.classList.remove("show");
    })

    function copiar() {
        var textoParaCopiar = document.getElementById("textoParaCopiar");
        var texto = textoParaCopiar.textContent || textoParaCopiar.innerText;
        var inputTemporario = document.createElement("input");

        inputTemporario.setAttribute("value", texto);
        document.body.appendChild(inputTemporario);
        inputTemporario.select();
        inputTemporario.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(inputTemporario);

        // Mostra uma mensagem de sucesso

        var tooltip = document.getElementById("tooltip");
        tooltip.classList.add("show");

        setTimeout(function () {
            tooltip.classList.remove("show");
        }, 2000); // Esconde o tooltip após 2 segundos
    }

    document.addEventListener("click", function (event) {
        var contatos = document.getElementById("contatos");
        contatos.classList.remove("show");
    });

    function abrirCRS() {
        var div = document.getElementById("divCRS");
  
        if (div.style.display === "flex") {
          div.style.display = "none";
        } else {
          div.style.display = "flex";
          div.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      function abrirMun() {
        var div = document.getElementById("divMun");
  
        if (div.style.display === "flex") {
          div.style.display = "none";
        } else {
          div.style.display = "flex";
          div.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
