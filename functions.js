let telNumber = prompt("Digite o número de telefone");
let message = prompt("Digite a mensagem");
let pLink = document.getElementById("hiperlink");

telNumberNoSpace = telNumber.replace(/ /g, "");
messageReplaced = message.replace(/ /g, "%20");

let link = document.createElement("a");
link.textContent = `api.whatsapp.com/send?phone=${telNumberNoSpace}&text=${messageReplaced}`;
link.href = `api.whatsapp.com/send?phone=${telNumberNoSpace}&text=${messageReplaced}`;
pLink.appendChild(link);
