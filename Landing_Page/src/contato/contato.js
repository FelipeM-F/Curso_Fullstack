function enviarFormulario(event) {
    event.preventDefault();
    openModalWithAutoClose('Obrigado pela sua mensagem, em breve retornaremos!');
}

function openModalWithAutoClose(message) {
    const modal = document.getElementById('modal-message');
    const modalMessage = document.getElementById('message-text');

    modalMessage.textContent = message;
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}
