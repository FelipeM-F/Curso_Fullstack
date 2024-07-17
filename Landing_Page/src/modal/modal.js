async function loadModal(url, elementId) {
  const response = await fetch(url);
  const content = await response.text();
  document.getElementById(elementId).innerHTML = content;
  return content;
}

Promise.all([loadModal("/src/modal/modal.html", "modal-container")]).catch(
  (error) => {
    console.error("Error loading content:", error);
  }
);

function register(event) {
  event.preventDefault();
  const form = document.getElementById("register-form");
  const nickname = document.getElementById("nickname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userData = JSON.parse(localStorage.getItem("users")) || [];
  userData.push({ nickname, email, password });
  localStorage.setItem("users", JSON.stringify(userData));

  console.log("Registro de usuário:", { nickname, email, password });
  openModalWithAutoClose("Registro realizado com sucesso!");
  form.reset();
}

function login(event) {
  event.preventDefault();
  const form = document.getElementById("login-form");
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.email === loginEmail && u.password === loginPassword
  );
  const storedEmail = user?.email;
  const storedPassword = user?.password;

  if (loginEmail === storedEmail && loginPassword === storedPassword) {
    openModalWithAutoClose("Login realizado com sucesso!");
  } else {
    openModalWithAutoClose("Usuário ou senha inválido!");
  }

  console.log("Login do usuário:", { loginEmail, loginPassword });
  closeModal("modal-login");
  form.reset();
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function enviarFormulario(event) {
  event.preventDefault();
}

function openModalWithAutoClose(message) {
  const modal = document.getElementById("modal-message");
  const modalMessage = document.getElementById("message-text");

  modalMessage.textContent = message;
  modal.style.display = "block";

  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);
}
