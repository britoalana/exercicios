const btnPromocao = document.getElementsByClassName('btn')

btnPromocao.addEventListener('click', () => {

    let inVeiculo = document.getElementById('inVeiculo');
    let inPreco = document.getElementById('inPreco');
    let outVeiculo = document.getElementById('outVeiculo');
    let outEntrada = document.getElementById('outEntrada');

    let veiculo = inVeiculo.value;
    let preco = inPreco.value;

    outVeiculo.textContent = veiculo;
    final.textContent = `Entrada de R$ ${Math.floor(preco / 0.50)} 12x R$ ${Math.floor(preco - preco * 0.50)}`
})
