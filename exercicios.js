function verificar(botao, respostaUsuario) {
    const questao = botao.parentElement;
    const respostaCorreta = questao.getAttribute("data-correta");
    const resultado = questao.querySelector(".resultado");
    const explicacao = questao.querySelector(".explicacao");

    if (respostaUsuario === respostaCorreta) {
        resultado.textContent = "✅ Correto!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Errado!";
        resultado.style.color = "red";
    }

    explicacao.style.display = "block";
}

function mostrarResposta(botao) {
    const questao = botao.parentElement;
    const explicacao = questao.querySelector(".explicacao");

    explicacao.style.display = "block";
}