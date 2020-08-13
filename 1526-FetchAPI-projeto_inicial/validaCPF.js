function verificaCpfInvalidos(cpf){
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ]

    //metodo indexof indica, se o que eu quero tem ou nao dentro do array
    //ele retorna bool.. no caso verifica a posicao do valor passado (ex 111... posicao 0 eh diferente de -1, entao retorna false)
    return cpfsInvalidos.indexOf(cpf) === -1
}

function somaNumerosCpf(cpf, totalDeDigitos, peso) {
    let soma = 0;

    for(let indice = 1; indice <= totalDeDigitos; indice++){
        soma += parseInt(cpf.substring(indice -1, indice)) * (peso - indice)         //tem que pegar numero por numero 
    }

    return soma
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoDeVerificacao) {
    //mult por 10, div por 11 e pega o resto da div
    const soma = somaNumerosCpf(cpf, totalDeDigitos, peso)
    const resto = (soma * 10) % 11

    return resto === digitoDeVerificacao
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11
    const totalDeDigitosPrimeiraParte = 9
    const digitoDeVerificacao = parseInt(cpf.substring(9, 10))

    //return funcao
    return verificaDigito(cpf, 
        totalDeDigitosPrimeiraParte, 
        peso, 
        digitoDeVerificacao) 
}

function verificaSegundoDigito(cpf) {
    const peso = 12
    totalDeDigitosSegundaParte = 10
    const digitoDeVerificacao = parseInt(cpf.substring(10,11))

    return verificaDigito(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeVerificacao
    )
}

function validaCPF(cpf) {
    return (
        verificaPrimeiroDigito(cpf)&&
        verificaSegundoDigito(cpf)&&
        verificaCpfInvalidos(cpf)

    )
}