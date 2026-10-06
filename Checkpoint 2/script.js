
const gridAtores = document.getElementById("grid-atores");
const campoPesquisa = document.getElementById("pesquisa");
const contador = document.getElementById("contador");

// Converte a data para o formato brasileiro
function formatarData(data) {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Cria e exibe os cards na tela
function mostrarAtores(listaAtores) {
    gridAtores.innerHTML = "";

    contador.textContent =
        `${listaAtores.length} ator(es) ou atriz(es) encontrado(s)`;

    if (listaAtores.length === 0) {
        gridAtores.innerHTML =
            '<p class="sem-resultados">Nenhum ator ou atriz encontrado.</p>';
        return;
    }

    listaAtores.forEach(function (ator) {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <img
                src="${ator.foto}"
                alt="Foto de ${ator.nome}"
                loading="lazy"
            >

            <div class="card-info">
                <h2>${ator.nome}</h2>
                <p><strong>País:</strong> ${ator.pais}</p>
                <p><strong>Nascimento:</strong> ${formatarData(ator.nascimento)}</p>
            </div>
        `;

        gridAtores.appendChild(card);
    });
}

// Filtra os atores pelo nome digitado
function filtrarAtores() {
    const texto = campoPesquisa.value.toLowerCase().trim();

    const atoresFiltrados = atores.filter(function (ator) {
        return ator.nome.toLowerCase().includes(texto);
    });

    mostrarAtores(atoresFiltrados);
}

// Exibe todos os atores ao abrir a página
mostrarAtores(atores);