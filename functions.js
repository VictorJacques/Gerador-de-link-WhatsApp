let telNumberInput = document.getElementById("tel");
let messageInput = document.getElementById("message");
let botao = document.getElementById("botao");
let pLink = document.getElementById("hiperlink");
let telNumber;
let message;

const handleChangeTel = (e) => {
  telNumber = e.target.value;
};

const handleChangeMessage = (e) => {
  message = e.target.value;
};

function clicou() {
  telNumberNoSpace = telNumber.replace(/ /g, "");
  messageReplaced = message.replace(/ /g, "%20");

  let link = document.createElement("a");
  link.textContent = `api.whatsapp.com/send?phone=${telNumberNoSpace}&text=${messageReplaced}`;
  link.href = `api.whatsapp.com/send?phone=${telNumberNoSpace}&text=${messageReplaced}`;
  pLink.appendChild(link);
}

telNumberInput.addEventListener("change", handleChangeTel);
messageInput.addEventListener("change", handleChangeMessage);
botao.addEventListener("click", clicou);
