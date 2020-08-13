//o form pega atraves do data-atrib, no caso data-form
const formCadastroCliente = document.querySelector('[data-form]')

formCadastroCliente.addEventListener('submit', event => {
    // previne o comportamento padrao (enviar logo que clica no button)
    event.preventDefault()

    //pegar o campos pelo data-atrib
    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value

    if (validaCPF(cpf)) {
        //chama funcao de cadastrar clientes
        cadastrarClientes(nome, cpf)
        alert('Cadastrado com sucesso')
    }else{
        alert('cpf nao eh valido')
    }
})