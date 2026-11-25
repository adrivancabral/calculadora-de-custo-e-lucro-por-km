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
    const lucroPorKmTotal = (valor4 - somaVeiculo);

    const cada100KmTotal = ((valor4 - somaVeiculo)* 100);

    custoPorKm.textContent = ('R$ ' + somaVeiculo);
    lucroPorKm.textContent = ('R$ ' + lucroPorKmTotal);
    cada100Km.textContent = ('R$' + cada100KmTotal); 

    custoPorKm.textContent = formatarMoeda(somaVeiculo);
    lucroPorKm.textContent = formatarMoeda(lucroPorKmTotal);
    cada100Km.textContent = formatarMoeda(cada100KmTotal);
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