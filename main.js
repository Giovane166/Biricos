alert('Seja muito bem vindo');

let nomeUsario = '';
let texto = document.querySelector('span');

while (nomeUsario == ''){
    nomeUsuario = prompt('qual o seu nome?');
}


texto.textContent = nomeUsario;