function menuShow(){
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')){
     menuMobile.classList.remove('open');
     document.querySelector('.icon').src = "menu_white_36dp.svg";
   }else {
    menuMobile.classList.add('open')
    document.querySelector('.icon').src = "close_white_36dp.svg";
   }
}


// Obtém o elemento do botão e o elemento do número
var botao = document.getElementById("botao");
var numeroElemento = document.getElementById("numero");

// Inicializa um contador
var numero = 0;

// Adiciona um ouvinte de evento para o clique do botão
botao.addEventListener("click", function() {
    // Incrementa o número
    numero++;
    // Atualiza o conteúdo do elemento do número
    numeroElemento.textContent = numero;
});

