const btnConverter = document.getElementById('myBtn')

btnConverter.addEventListener('click', () => {
    let inName = document.getElementById('inName');
    let inTime = document.getElementById('inTime');
    let outName = document.getElementById('outName');
    let outTime = document.getElementById('outTime');

    let name = inName.value;
    let time = inTime.value;

    outName.textContent = name;
    outTime.textContent = `${Math.floor(time/60)} Hora(s) e ${time%60} minuto(s) `
})

 