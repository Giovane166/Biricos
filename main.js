alert('Seja bem vindo');

let nomeUsario = '';

let texto = document.querySelector('span');

while (nomeUsario == ''){
    
    nomeUsario = prompt('qual o seu nome?');
}

if (nomeUsario == null) {
    texto.textContent = 'Usario';
  } else {
    texto.textContent = nomeUsario;
  }
  