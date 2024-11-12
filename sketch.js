function calcularFrete() {
    // Obtendo valores do formulário
    const distancia = parseFloat(document.getElementById("distancia").value);
    const consumoMedio = parseFloat(document.getElementById("consumoMedio").value);
    const precoCombustivel = parseFloat(document.getElementById("precoCombustivel").value);
    const margemLucro = parseFloat(document.getElementById("margemLucro").value);
    const custoPedagio = parseFloat(document.getElementById("custoPedagio").value) || 0;
    const outrosCustos = parseFloat(document.getElementById("outrosCustos").value) || 0;
    const valorFrete = parseFloat(document.getElementById("valorFrete").value);
    const velocidadeMedia = parseFloat(document.getElementById("velocidadeMedia").value);

    // Funções de cálculo
    const calcularCustoCombustivel = (distancia, consumoMedio, precoCombustivel) => (distancia / consumoMedio) * precoCombustivel;
    const calcularValorFrete = (custoCombustivel, margemLucro, custoPedagio, outrosCustos) => custoCombustivel + custoPedagio + outrosCustos + (custoCombustivel * (margemLucro / 100));
    const calcularTempoViagem = (distancia, velocidadeMedia) => distancia / velocidadeMedia;
    const analisarViabilidade = (valorFrete, custoTotal) => valorFrete >= custoTotal ? "Frete é viável." : "Frete não é viável. Sugestão: negocie um valor maior.";

    // Cálculos
    const custoCombustivel = calcularCustoCombustivel(distancia, consumoMedio, precoCombustivel);
    const valorIdealFrete = calcularValorFrete(custoCombustivel, margemLucro, custoPedagio, outrosCustos);
    const tempoViagem = calcularTempoViagem(distancia, velocidadeMedia);
    const viabilidade = analisarViabilidade(valorFrete, valorIdealFrete);

    // Exibindo os resultados
    document.getElementById("resultados").innerHTML = `
        <p><strong>Custo de Combustível:</strong> R$ ${custoCombustivel.toFixed(2)}</p>
        <p><strong>Valor Ideal do Frete:</strong> R$ ${valorIdealFrete.toFixed(2)}</p>
        <p><strong>Tempo Estimado de Viagem:</strong> ${tempoViagem.toFixed(2)} horas</p>
        <p><strong>Análise de Viabilidade:</strong> ${viabilidade}</p>
    `;
}
