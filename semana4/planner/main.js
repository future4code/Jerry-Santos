
function adicionaTarefa() {
    let entrada = document.getElementById("tarefa")
    let tarefa = entrada.value;
    const seletorDias = document.getElementById("dias-da-semana")
    const diaDaSemana = document.getElementById(seletorDias.value)
    if(entrada.value !== ""){
        diaDaSemana.innerHTML += "<li>" + entrada.value + "</li>"
    } else {
        alert("Você deve digitar uma tarefa")
    }
    
    entrada.value = ""
    entrada.focus();
}
