const btnConverter = document.getElementById('btn')

btnConverter.addEventListener('click', () => {
    let inMedicamento = document.getElementById('inMedicamento');
    let inPreco = document.getElementById('inPreco');
    let outMedicamento = document.getElementById('outMedicamento');
    let outPromocao = document.getElementById('outPromocao');

    let medicamento = inMedicamento.value;
    let preco = inPreco.value;
    let quatidadeComprada = 2
    let precoPromocional =quatidadeComprada * preco - (quatidadeComprada * preco) % 1 / 100.0
    
    outMedicamento.textContent = medicamento
    outPromocao.textContent = `Leve 2 por apenas R$ ${Math.floor(precoPromocional)}` ;


})