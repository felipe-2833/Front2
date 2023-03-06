//declarando elementos
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let switchToggle = document.getElementById('switchToggle');

//função onchange explicada na aula
function modificacoesToggle() {

    let lista = document.querySelectorAll('.item');

    body.classList.toggle('bodyModoEscuro');
    h1.classList.toggle('h1Escuro');

    //Looping For
    for (let i = 0; i < lista.length; i++){
        let item = lista[i];
        item.classList.toggle('itemsModoEscuro');
        item.classList.toggle('textoClaro');
    };
}
