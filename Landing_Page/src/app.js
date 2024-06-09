const games = [
    { title: 'Red Dead Redemption II', cover: 'images/Red_Dead_Redemption_II.capa.jpg', prices: { Steam: 'R$ 119,96', 'Epic Games': 'R$ 119,96' } },
    { title: 'GTA V', cover: 'images/Grand_Theft_Auto_V_capa.png', prices: { Steam: 'R$ 99,99', 'Epic Games': 'R$ 79,99' } },
    { title: 'Minecraft', cover: 'caminho/para/capa_minecraft.jpg', prices: { 'Minecraft.net': 'R$ 119,99', 'Microsoft Store': 'R$ 99,99' } },
    { title: 'The Witcher 3', cover: 'caminho/para/capa_witcher3.jpg', prices: { Steam: 'R$ 39,99', 'GOG': 'R$ 29,99' } },
    { title: 'Cyberpunk 2077', cover: 'caminho/para/capa_cyberpunk2077.jpg', prices: { Steam: 'R$ 199,99', 'GOG': 'R$ 179,99' } },
    { title: 'Hades', cover: 'caminho/para/capa_hades.jpg', prices: { Steam: 'R$ 47,99', 'Epic Games': 'R$ 45,99' } },
    { title: 'Celeste', cover: 'caminho/para/capa_celeste.jpg', prices: { Steam: 'R$ 36,99', 'GOG': 'R$ 33,99' } },
    { title: 'Stardew Valley', cover: 'caminho/para/capa_stardewvalley.jpg', prices: { Steam: 'R$ 24,99', 'GOG': 'R$ 22,99' } },
    { title: 'Hollow Knight', cover: 'caminho/para/capa_hollowknight.jpg', prices: { Steam: 'R$ 27,99', 'GOG': 'R$ 25,99' } },
    { title: 'Sekiro: Shadows Die Twice', cover: 'caminho/para/capa_sekiro.jpg', prices: { Steam: 'R$ 199,99', 'Epic Games': 'R$ 179,99' } },
    { title: 'Dark Souls III', cover: 'caminho/para/capa_darksouls3.jpg', prices: { Steam: 'R$ 159,99', 'GOG': 'R$ 149,99' } },
    { title: 'DOOM Eternal', cover: 'caminho/para/capa_doometernal.jpg', prices: { Steam: 'R$ 199,99', 'Epic Games': 'R$ 189,99' } },
    { title: 'Among Us', cover: 'caminho/para/capa_amongus.jpg', prices: { Steam: 'R$ 10,89', 'Epic Games': 'R$ 9,99' } },
    { title: 'Fall Guys', cover: 'caminho/para/capa_fallguys.jpg', prices: { Steam: 'R$ 79,99', 'Epic Games': 'R$ 74,99' } },
    { title: 'Terraria', cover: 'caminho/para/capa_terraria.jpg', prices: { Steam: 'R$ 19,99', 'GOG': 'R$ 18,99' } },
    { title: 'Cuphead', cover: 'caminho/para/capa_cuphead.jpg', prices: { Steam: 'R$ 36,99', 'GOG': 'R$ 33,99' } },
    { title: 'Ori and the Blind Forest', cover: 'caminho/para/capa_ori.jpg', prices: { Steam: 'R$ 29,99', 'GOG': 'R$ 27,99' } },
    { title: 'Control', cover: 'caminho/para/capa_control.jpg', prices: { Steam: 'R$ 149,99', 'Epic Games': 'R$ 139,99' } },
    { title: 'Resident Evil 2', cover: 'caminho/para/capa_re2.jpg', prices: { Steam: 'R$ 159,99', 'Epic Games': 'R$ 149,99' } },
    { title: 'Subnautica', cover: 'caminho/para/capa_subnautica.jpg', prices: { Steam: 'R$ 55,99', 'Epic Games': 'R$ 49,99' } }
];

const itemsPerPage = 5;
let currentPage = 1;

function displayGames(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const gamesToDisplay = games.slice(start, end);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    gamesToDisplay.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';

        const img = document.createElement('img');
        img.className = 'capa';
        img.src = game.cover;
        img.alt = `Capa do ${game.title}`;

        const gameDetails = document.createElement('div');
        gameDetails.className = 'game-details';

        const starIcon = document.createElement('i');
        starIcon.className = 'fas fa-star';
        starIcon.addEventListener('click', () => toggleFavorite(starIcon));
        
        const gameTitle = document.createElement('h2');
        gameTitle.className = 'game-title';
        gameTitle.textContent = game.title;

        const gamePrices = document.createElement('ul');
        gamePrices.className = 'game-prices';
        for (const [store, price] of Object.entries(game.prices)) {
            const li = document.createElement('li');
            li.textContent = `${store}: ${price}`;
            gamePrices.appendChild(li);
        }

        
        gameDetails.appendChild(gameTitle);
        gameDetails.appendChild(starIcon);
        gameDetails.appendChild(gamePrices);
        gameCard.appendChild(img);
        gameCard.appendChild(gameDetails);
        resultado.appendChild(gameCard);
    });

    displayPagination();
}

function toggleFavorite(icon) {
    icon.classList.toggle('favorite');
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(games.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.className = i === currentPage ? 'active' : '';

        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayGames(currentPage);
        });

        pagination.appendChild(pageLink);
    }
}

document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = document.getElementById('nome-jogo').value.toLowerCase();
    const filteredGames = games.filter(game => game.title.toLowerCase().includes(searchQuery));
    
    if (filteredGames.length > 0) {
        games.length = 0; // Clear the current games array
        games.push(...filteredGames); // Add the filtered games to the array
        currentPage = 1; // Reset to the first page
        displayGames(currentPage);
    } else {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '<p>Nenhum jogo encontrado.</p>';
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';
    }
});

document.getElementById('user-icon').addEventListener('click', () => {
    const userMenu = document.getElementById('user-menu');
    userMenu.classList.toggle('hidden');
    userMenu.classList.toggle('show');
});

// Inicializa a exibição com a primeira página
displayGames(currentPage);
