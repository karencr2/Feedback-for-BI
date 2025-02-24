document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        input.classList.add("error-border");
    }

    function clearError(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = "";
        input.classList.remove("error-border");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        const nome = document.getElementById("nome");
        const sobrenome = document.getElementById("sobrenome");
        const setor = document.getElementById("setor");
        const cargo = document.getElementById("cargo");
        const tipo = document.getElementById("tipo");
        const dashboard = document.getElementById("dashboard");
        const descricao = document.getElementById("descricao");
        const prioridade = document.getElementById("prioridade");

        if (nome.value.trim() === "") {
            showError(nome, "O nome é obrigatório.");
            isValid = false;
        } else {
            clearError(nome);
        }

        if (sobrenome.value.trim() === "") {
            showError(sobrenome, "O sobrenome é obrigatório.");
            isValid = false;
        } else {
            clearError(sobrenome);
        }

        if (setor.value.trim() === "") {
            showError(setor, "O setor é obrigatório.");
            isValid = false;
        } else {
            clearError(setor);
        }

        if (cargo.value.trim() === "") {
            showError(cargo, "O cargo é obrigatório.");
            isValid = false;
        } else {
            clearError(cargo);
        }

        if (tipo.value === "") {
            showError(tipo, "Selecione um tipo de feedback.");
            isValid = false;
        } else {
            clearError(tipo);
        }

        if (dashboard.value.trim() === "") {
            showError(dashboard, "O nome do dashboard é obrigatório.");
            isValid = false;
        } else {
            clearError(dashboard);
        }

        if (descricao.value.trim() === "") {
            showError(descricao, "A descrição do feedback é obrigatória.");
            isValid = false;
        } else {
            clearError(descricao);
        }        

        if (isValid) {
            alert("Feedback enviado com sucesso!");
            form.reset();
        }
    });
});
