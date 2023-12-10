//alert('JScarregado');

//Váriáveis no JS

//Seleção de elementos HTML (manipulação de DOM)
// = atribuição

//variação btnMenu recebe a seleção do elemento HTML que tem a classe btn-menu
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

//eventos do Javascript
//Ao clicar no botão do menu iniciar
btnMenu.addEventListener('click', function () {
    //menu.style.display = 'block';

    //menu.classList.add('menu-open')
    //menu.classList.remove('test')

    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

menu.addEventListener('click', function(){

    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})

})