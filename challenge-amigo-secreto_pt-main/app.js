let amigos = [];
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sertear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    exibirResultado(amigoSorteado);
}
function exibirResultado(amigoSorteado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; // Limpa o resultado anterior

    const li = document.createElement("li");
    li.textContent = `🎉 O amigo secreto sorteado é: ${amigoSorteado}`;
    listaResultado.appendChild(li);
}
