let despesas = [];

function cadastraDespesa() {
    const valor = document.getElementById("valor")
    const tipo = document.getElementById("tipo-cadastro")
    const descricao = document.getElementById("descricao")

    let despesa = {
        valor: valor.value,
        tipo: tipo.value,
        descricao: descricao.value
    }

    despesas.push(despesa)
    console.log(despesas)
}



