const btnConverter = document.getElementById('btn')

btnConverter.addEventListener('click', () => {
    let inBuffet = document.getElementById('inBuffet');
    let inConsumo = document.getElementById('inConsumo');
    let outPreco = document.getElementById('outPreco');

    let buffet = inBuffet.value;
    let consumo = inConsumo.value;

    outPreco.textContent = `Valor a pagar R$  ${((consumo / 1000) * buffet).toFixed(2)}` ;

    
})