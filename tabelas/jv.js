function calcularMedias() {
    // Seleciona todas as linhas da tabela (exceto o cabeçalho)
    const linhas = document.querySelectorAll('#tabela-notas tbody tr');

    // Loop para cada linha
    linhas.forEach(function(linha) {
        // Obtém as células das notas (index 1, 2, 3)
        const nota1 = parseFloat(linha.cells[1].textContent);
        const nota2 = parseFloat(linha.cells[2].textContent);
        const nota3 = parseFloat(linha.cells[3].textContent);
        
        // Calcula a média
        const media = (nota1 + nota2 + nota3) / 3;

        // Exibe a média na célula correspondente
        linha.cells[4].textContent = media.toFixed(2); // 2 casas decimais
    });
}
