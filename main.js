alert('Seja bem vindo');

let nomeUsario = '';

let texto = document.querySelector('span');

while (nomeUsario == ''){
    
    nomeUsuario = prompt('qual o seu nome?');
}

if (nomeUsuario == null) {
    texto.textContent = 'Usario';
  } else {
    texto.textContent = nomeUsario;
  }
  