alert('Seja bem vindo');

let nomeUsuario = '';

let texto = document.querySelector('span');

while (nomeUsuario == ''){
    
    nomeUsuario = prompt('qual o seu nome?');
}

if (nomeUsuario == null) {
    texto.textContent = 'Usario';
  } else {
    texto.textContent = nomeUsuario;
  }
  