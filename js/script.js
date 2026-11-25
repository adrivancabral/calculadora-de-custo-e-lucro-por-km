const consumo = document.querySelector("#consumo");
const valorCombustivel = document.querySelector('#valor-combustivel');
const outrosCustos = document.querySelector('#outros-custos');
const recebido = document.querySelector('#recebido');
const botaoCalcular = document.querySelector('#btnCalcular');
const custoPorKm = document.querySelector('#custoPorKm');
const lucroPorKm = document.querySelector('#lucroPorKm');
const cada100Km = document.querySelector('#cada100Km');

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
    })
}

botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    const valor1 = Number(consumo.value);
    const valor2 = Number(valorCombustivel.value);
    const valor3 = Number(outrosCustos.value)
    const combustivelKm = valor2 / valor1;
    const somaVeiculo = combustivelKm + valor3;
    const valor4 = Number(recebido.value);

    if (valor1 <= 0) {
        alert('Informe um consumo válido!');
        return;
    }

    if (valor2 <= 0) {
        alert('Informe um valor válido para o combustível!');
        return;
    }


    if (valor3 < 0) {
        alert('Os outros custos não podem ser negativos!');
        return;
    }

     if (valor4 <= 0) {
        alert('Informe um valor recebido válido!');
        return;
    }

    const lucroPorKmTotal = (valor4 - somaVeiculo);

    const cada100KmTotal = ((valor4 - somaVeiculo)* 100);

    custoPorKm.textContent = formatarMoeda(somaVeiculo);
    lucroPorKm.textContent = formatarMoeda(lucroPorKmTotal);
    cada100Km.textContent = formatarMoeda(cada100KmTotal); 

});

const formEl = document.getElementById('formCalculo');

formEl.addEventListener('reset', () => {
    custoPorKm.textContent = 'R$ 0,00';
    lucroPorKm.textContent = 'R$ 0,00';
    cada100Km.textContent = 'R$ 0,00';
})