const jogadoras = [
    {
        id: 25,
        elenco: "feminino",
        nome: "Valéria",
        posicao: "Atacante",
        imagem: "https://botafogo-atletas.mange.li/static/2023-2-2/25.png",
        descricao: "Atacante de muita velocidade e agilidade para buscar a finalização. Valéria é do interior do Acre e iniciou sua carreira vestindo a camisa do Assermurb por 8 anos, após esse período passou por diversos clubes no Brasil até chegar na Europa, onde atuou por 4 temporadas. Em 2022, chegou ao Botafogo e agrega valor à equipe.",
        nome_completo: "Valéria Paula de Lima",
        nascimento: "08/07/1993, Plácido de Castro (AC)",
        altura: "1,70"
    },
    // Adicione mais objetos para cada jogadora
];

function exibirJogadoras() {
    const container = document.getElementById('container');

    jogadoras.forEach(jogadora => {
        const div = document.createElement('div');

        div.innerHTML = `
            <img src="${jogadora.imagem}" alt="${jogadora.nome}">
            <h2>${jogadora.nome}</h2>
            <p>Posição: ${jogadora.posicao}</p>
            <p>Descrição: ${jogadora.descricao}</p>
            <p>Data de Nascimento: ${jogadora.nascimento}</p>
            <p>Altura: ${jogadora.altura}</p>
        `;

        container.appendChild(div);
    });
}

window.onload = exibirJogadoras;function exibirJogadoras() {
    const container = document.getElementById('container');

    jogadoras.forEach(jogadora => {
        const div = document.createElement('div');

        div.innerHTML = `
            <img src="${jogadora.imagem}" alt="${jogadora.nome}">
            <h2>${jogadora.nome}</h2>
            <p>Posição: ${jogadora.posicao}</p>
            <p>Descrição: ${jogadora.descricao}</p>
            <p>Data de Nascimento: ${jogadora.nascimento}</p>
            <p>Altura: ${jogadora.altura}</p>
        `;

        container.appendChild(div);
    });
}

window.onload = exibirJogadoras;

