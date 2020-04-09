const posts = document.getElementById("posts");

function novoPost() {
    const titulo = document.getElementById("titulo")
    const autor = document.getElementById("autor")
    const conteudo = document.getElementById("conteudo")

    posts.innerHTML += "<div class='post-individual'><h3>" + titulo.value + "</h2><h4>Autor: " + autor.value + "</h4><p>" + conteudo.value + "</p></div>"
    // posts.innerHTML += 
    // posts.innerHTML +=  

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}