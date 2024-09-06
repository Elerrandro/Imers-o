function Pesquisar() {
    // Busca a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisar = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisar);

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let abreviacao = "";
    
    if (!campoPesquisar) {
        section.innerHTML = "<p><b>POR FAVOR DIGITE ALGUM JOGO!</b></p>"
        return
    }

    // Itera sobre os dados dos jogos e constrói a string HTML
    for (let dado of jogos) {
        nome = dado.nome.toLowerCase();
        abreviacao = dado.abreviacao.toLowerCase();
        // Se nome estiver incluido em campoPesquisar então...
        if (nome.includes(campoPesquisar) || (abreviacao.includes(campoPesquisar))) {
        console.log(nome.includes(campoPesquisar));
        // Cria um novo elemento HTML para cada jogo
        resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.site}" target="_blank"><b>Site do Jogo</b></a>
            </div>
        `};
    };

    if (!resultados) {
        resultados = "<p><b>NADA FOI ENCONTRADO!</b></p>"
    }


    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
};