function Pesquisar() {
    // Busca a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre os dados dos jogos e constrói a string HTML
    for (let dado of jogos) {
        // Cria um novo elemento HTML para cada jogo
        resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.site}" target="_blank"><b>Site do Jogo</b></a>
            </div>
        `;
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}