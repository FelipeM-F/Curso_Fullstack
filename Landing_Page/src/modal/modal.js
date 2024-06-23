async function loadModal(url, elementId) {
    const response = await fetch(url);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
    return content;
}

Promise.all([
    loadModal('/src/modal/modal.html', 'modal-container'),

]).catch(error => {
    console.error('Error loading content:', error);
});

function register(event) {
    event.preventDefault();
    
    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    console.log("Registro de usuário:", { nickname, email, password });
    closeModal("modal-login");
}

function login(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    console.log('Login do usuário:', { loginEmail, loginPassword });
    closeModal('modal-login');
}


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