let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let switchToggle = document.getElementById('switchToggle');

function modificacoesToggle() {

    let lista = document.querySelectorAll('.item');

    body.classList.toggle('bodyModoEscuro');
    h1.classList.toggle('h1Escuro');

    for (let i = 0; i < lista.length; i++){
        let item = lista[i];
        item.classList.toggle('itemsModoEscuro');
        item.classList.toggle('textoClaro');
    };
}
//declaraçao das variaveis
let div1 = 0;
let div2 = 0;
let div3 = 0;
let div4 = 0;
let div5 = 0;
let div6 = 0;

//declaração de cada felino
let felino1 = {
    img: "./imagens/tiger.jpg",
    titulo: 'O tigre',
    descricao:  ' O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predadorcarnívoro eé a maior espécie de felino do mundo junto com o leão.',
}

let felino2 = {
    img: "./imagens/leon.jpg",
    titulo: 'O leão',
    descricao: ' O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênerogênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na Áfricasubsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
}

let felino3 = {
    img: './imagens/leopardo.jpg',
    titulo: 'O leopardo',
    descricao: ' O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outrosfelinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do ossohióide que lhes permite rugir.É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra(melanista).'
}

let felino4 = {
    img: './imagens/pantera-negra.jpg',
    titulo: 'A pantera negra',
    descricao: ' A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente oleopardo (Panthera pardus) e a onça-pintada (Panthera onca).Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente umavariação negra destes animais.'
}

let felino5 = {
    img: './imagens/jaguar.jpg',
    titulo: 'O jaguar',
    descricao: ' O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e dogênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Tambémé o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Pantheraleo).'
}

let felino6 = {
    img: './imagens/chita.jpg',
    titulo: 'O guepardo',
    descricao: ' O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o únicorepresentante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestremais rápidodo mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
}

//declaração das listas
let listaDivs = [div1,div2,div3,div4,div5,div6]
let listaFelinos = [felino1,felino2,felino3,felino4,felino5,felino6];

//looping para construçao das divs e seus conteudos
for(let i = 0; i < listaDivs.length; i++){
    //criaçao das divs
    listaDivs[i] = document.createElement("div");
    listaDivs[i].classList.add("item");
    //implementação dos conteudos
    listaDivs[i].innerHTML = `
                <img src="${listaFelinos[i].img}">
                <h2>${listaFelinos[i].titulo}</h2>
                <p>
                    ${listaFelinos[i].descricao}
                </p>
                `;
    containerFelinos.appendChild(listaDivs[i]);
};

