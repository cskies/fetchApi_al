const listarClientes = () => {
    //pegando do servidor via api 
    return fetch('http://localhost:4000/clientes')
    .then(resposta => { //resp soh eh executada qdo a promisse for resolvida
        return resposta.json()
    })
    .then(json => {
        return json
    })

    //then pega as info da promisse
    //o fetch tem uma promisse, que trata de maneira assincrona (exemplo lanche )

}

const cadastrarClientes = (nome, cpf) => {

    //garante que seja exatamente no formato json para passar ao body no final
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })

    return fetch('http://localhost:4000/clientes/cliente',  {
        
        method: 'POST', //tem que ser informado . o fetch por padrao entende que eh get
        headers: {
            'Content-type': 'application/json'
        },
        body: json                   
    })
    .then( resp => {
        return resp.body
    } )
}

