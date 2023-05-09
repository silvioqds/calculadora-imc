const readline = require('readline');
const indices = require('./indices')

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(function (res, reject) {
        rl.question('Digite sua altura: ', (altura) => {
            rl.question('Digite seu peso: ', (peso) => {
                const imc = parseFloat(peso) / (parseFloat(altura) ** 2);
                const result = indices.find(x => x.initial <= imc && x.end > imc)

                if (result) {
                    result.imc = imc
                    res(result)
                } else
                    reject('Não foi encontrado nenhum indíce')
            
            rl.close();
            })
        })        
    }).then(result => {
        console.log('Seu imc é de', result.imc.toFixed(1), '-', result.mensagem)
    }).catch(err => {
        console.log(err)
    })
}

main().then(() => {
    process.exit(1)
})
