
//generate array with a pair of classnames with numbers from 0 to 5
var cardsGenerate = function (){
    var cards = [];
    for(var i=0; i<6; i++){
        cards.push('card__'+i,'card__'+i);
    }
    return cards
}

//get array with pairs of classnames and randomize index order
function randomize(cards){
    var ramdomNumber, shuffle;
    ramdomNumber = [];
    shuffle = [];
    while(cards.length > 0){
        ramdomNumber = Math.random() * cards.length;
        shuffle.push(cards.splice(ramdomNumber, 1)[0]);
    }
    return shuffle;
}

//insert divs with random classnames into DOM
function renderCards(){
    var shuffledArray = randomize(cardsGenerate());
    var wrapper = document.querySelector('.main__wrapper');

    for(i = 0; i < shuffledArray.length; i++){
        wrapper.insertAdjacentHTML('beforeend', '<div class="main__item-box '+shuffledArray[i]+'"></div>');
    }
    return wrapper;
}

var render = renderCards();

console.log(render);








