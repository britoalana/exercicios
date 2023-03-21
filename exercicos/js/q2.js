const btnConverter = document.getElementById('btn')

btnConverter.addEventListener('click', () => {
    let inVeiculo = document.getElementById('inVeiculo');
    let inPreco = document.getElementById('inPreco');
    let outVeiculo = document.getElementById('outVeiculo');
    let outEntrada = document.getElementById('outEntrada');
    let outParcela = document.getElementById('outParcela');

    let veiculo = inVeiculo.value;
    let preco = inPreco.value;

    outVeiculo.textContent = veiculo;
    outEntrada.textContent = ` Entrada de R$${(preco * 0.5).toFixed(2)}  `
    outParcela.textContent = `12x ${((preco * 0.5)  / 12).toFixed(2)}`
})