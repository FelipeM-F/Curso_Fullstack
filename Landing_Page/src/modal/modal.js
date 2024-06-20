function openModal(modalId) {

    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    if (modalId === 'modal-login') {
        const userMenu = document.getElementById('user-menu');
        if (modal.style.display === 'block') {
            userMenu.classList.add('hidden');
            userMenu.classList.remove('show');
        }
    }

}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}