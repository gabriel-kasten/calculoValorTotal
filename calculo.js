(function () {
    const nivelTecnologiaEmpresa = {
        niveis: [
            {
                nome: 'Pequeno',
                horas: [3, 5, 10, 30, 50, 100],
                precos: [150, 140, 120, 110, 95, 80]
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

    const outsourcingOpcoes = {
        planos: [
            {
                nome: 'N1',
                valor: 6700
            },
            {
                nome: 'N1 com Gestão',
                valor: 8200
            },
            {
                nome: 'N2 com Gestão',
                valor: 12800
            }
        ]
    }

    function calcularPrecoHora(horasParam, nivel) {
        let preco = 0;
        let horasEscolhidas = Math.ceil(horasParam);

        const faixasHorarios = nivelTecnologiaEmpresa.niveis.find(n => n.nome === nivel);
        if (!faixasHorarios) {
            console.log(`Confira as informações fornecidas`);
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

    function calcularPrecoOutsourcing(escolha) {
        let preco = outsourcingOpcoes.planos.find(p => p.nome === escolha);
        return preco.valor;
    }

    function calcularPrecoMaquinas(quantidadeMaquinas = 0, quantidadeServidoresFisicos = 0, quantidadeServidoresVirtuais = 0) {
        let preco = (quantidadeMaquinas * 89.90) + ([quantidadeServidoresFisicos + quantidadeServidoresVirtuais] * 280);
        return preco;
    }

    const horasEscolhidas = Number('100 Horas');
    const nivelTecnologia = 'Grande';

    const outsourcing = 'N1';

    const quantidadeMaquinas = Number('1');
    const quantidadeServidoresFisicos = Number('1');
    const quantidadeServidoresVirtuais = Number('2');

    let preco = calcularPrecoHora(horasEscolhidas, nivelTecnologia) + calcularPrecoOutsourcing(outsourcing) + calcularPrecoMaquinas(quantidadeMaquinas, quantidadeServidoresFisicos, quantidadeServidoresVirtuais);
    console.log(preco);
    return preco;;
})();
