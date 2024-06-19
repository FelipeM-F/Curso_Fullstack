

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




function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    if (modalId === 'modal') {
        const userMenu = document.getElementById('user-menu');
        userMenu.classList.toggle('hidden');
        userMenu.classList.toggle('show');
    }
 
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}


