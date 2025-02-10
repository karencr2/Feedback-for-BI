document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const sobrenome = document.getElementById("sobrenome").value.trim();
        const setor = document.getElementById("setor").value.trim();
        const cargo = document.getElementById("cargo").value.trim();
        const tipo = document.getElementById("tipo").value;
        const dashboard = document.getElementById("dashboard").value.trim();
        const descricao = document.getElementById("descricao").value.trim();
        const visualizacao = document.getElementById("visualizacao").value.trim();
        const prioridade = document.getElementById("prioridade").value;

        // Validação dos campos obrigatórios
        if (nome === "" || sobrenome === "" || setor === "" || cargo === "" ||
            tipo === "" || dashboard === "" || descricao === "" || prioridade === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        alert("Feedback enviado com sucesso! Obrigado por contribuir.");

        form.reset();
    });
});
