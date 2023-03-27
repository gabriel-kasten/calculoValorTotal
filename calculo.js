const nivelTecnologiaEmpresa = {
    niveis: [
        {
            nome: 'Pequeno',
            horas: [3, 5, 10, 30, 50],
            precos: [150, 140, 120, 110, 95]
        },
        {
            nome: 'Médio',
            horas: [20, 50, 100, 145],
            precos: [120, 110, 100, 95]
        },
        {
            nome: 'Grande',
            horas: [3, 10, 50, 130, 450],
            precos: [180, 160, 130, 110, 95]
        }
    ]
}

function calcularPreco(horasParam, nivel) {
    let preco = 0;
    let horasEscolhidas = Math.ceil(horasParam);

    const faixasHorarios = nivelTecnologiaEmpresa.niveis.find(n => n.nome === nivel);
    if (!faixasHorarios) {
        console.log(`Nível de tecnologia ${nivel} não encontrado!`);
        return preco;
    }

    const horas = faixasHorarios.horas;
    const precos = faixasHorarios.precos;
    const ultimaFaixa = horas.length - 1;
    if (horasEscolhidas < 1) {
        preco = precos[0];
    } else if (horasEscolhidas >= horas[ultimaFaixa]) {
        preco = precos[ultimaFaixa] * horasEscolhidas;
    } else {
        for (let i = 0; i < ultimaFaixa; i++) {
            if (horasEscolhidas >= horas[i] && horasEscolhidas < horas[i + 1]) {
                preco = precos[i] * horasEscolhidas;
                break;
            }
        }
    }

    return preco;
}

const horasEscolhidas = 100;
const nivelTecnologia = 'Pequeno';
const preco = calcularPreco(horasEscolhidas, nivelTecnologia);
console.log(`Com ${horasEscolhidas} horas no nível de tecnologia ${nivelTecnologia} o preço a ser pago será: R$ ${preco.toFixed(2)}`);
