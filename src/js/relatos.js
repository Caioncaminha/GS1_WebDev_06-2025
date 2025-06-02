document.getElementById("relatoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // evita envio automático

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const data = document.getElementById("data").value;
    const severidade = document.getElementById("severidade").value;
    const descricao = document.getElementById("descricao").value.trim();
    const erro = document.getElementById("mensagemErro");

    if (!nome || !email || !cidade || !data || !severidade || !descricao) {
        erro.textContent = "Por favor, preencha todos os campos obrigatórios.";
    } else if (!validateEmail(email)) {
        erro.textContent = "E-mail inválido.";
    } else {
        erro.textContent = "";
        alert("Relato enviado com sucesso!");
        this.reset(); // limpa os campos
    }
});

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}