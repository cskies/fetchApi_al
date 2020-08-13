

const corpoTabela = document.querySelector("[data-conteudo-tabela]")


//inserindo dados dentro da corpoTabela


//mostrar infos no html 
const ExibeCliente = (cpf, nome ) => {

    //toda vez que executa a funcao, cria uma linha <tr>
    const linha = document.createElement('tr');

    // template literals (crase) = fazer browser interpretar 
    //tag html e conteudo java script
    //$ {}
    const conteudoLinha = ` 
        <td>${cpf}</td>
        <td>${nome}</td>
    `;
    
    linha.innerHTML = conteudoLinha;

    return linha;
}

//criando loop
listarClientes().then( exibe => {
    exibe.forEach( indice => {
        corpoTabela.appendChild(ExibeCliente(indice.cpf, 
            indice.nome))
    })
}

)

