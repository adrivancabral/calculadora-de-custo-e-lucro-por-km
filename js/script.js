const consumo = document.querySelector("#consumo");
const valorCombustivel = document.querySelector('#valor-combustivel');
const outrosCustos = document.querySelector('#outros-custos');
const recebido = document.querySelector('#recebido');
const botaoCalcular = document.querySelector('#btnCalcular');
const custoPorKm = document.querySelector('#custoPorKm');
const lucroPorKm = document.querySelector('#lucroPorKm');
const cada100Km = document.querySelector('#cada100Km');

botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    const valor1 = Number(consumo.value);
    const valor2 = Number(valorCombustivel.value);
    const valor3 = Number(outrosCustos.value)
    const combustivelKm = valor2 / valor1;
    const somaVeiculo = combustivelKm + valor3;
    custoPorKm.textContent = ('R$ ' + somaVeiculo.toFixed(2));

    const valor4 = Number(recebido.value);
    lucroPorKm.textContent = ('R$ ' + (valor4 - somaVeiculo.toFixed(2)));

    cada100Km.textContent = ('R$ ' + ((valor4 - somaVeiculo)* 100).toFixed(2));
});

const formEl = document.getElementById('formCalculo');
const custoPorKmEl = document.getElementById('custoPorKm');
const lucroPorKmEl = document.getElementById('lucroPorKm');
const cada100KmEl = document.getElementById('cada100Km');

formEl.addEventListener('reset', () => {
    custoPorKmEl.textContent = 'R$ 0,00';
    lucroPorKmEl.textContent = 'R$ 0,00';
    cada100KmEl.textContent = 'R$ 0,00';
})