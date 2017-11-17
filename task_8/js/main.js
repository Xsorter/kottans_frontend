'use strict'

//running the game
//TODO End game dialog
function gameRun(){
    
    var flippedArr = [];
    var hiddenArr = [];
    var render = renderCards();
    var cardsDOM = document.querySelectorAll('.main__item-box');

    //generate array with a pair of classnames with numbers from 0 to 5
    function cardsGenerate (){
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

        for(var i = 0; i < shuffledArray.length; i++){
            wrapper.insertAdjacentHTML('beforeend', 
            '<div data-num="'+shuffledArray[i]+'" class="main__item-box flipped">\
            <div class="flipper">\
            <div class="front '+shuffledArray[i]+'"></div>\
            <div class="back">\
            </div></div></div>');
        }
        return wrapper;
    }

    function resetArray(){
        cardsDOM.forEach(function(e){
            e.classList.remove('show');
            e.classList.add('flipped');
        });
        flippedArr = [];
    };

    function cardHide(){
        flippedArr.forEach(function(e){
            e.classList.add('cardhide');
            hiddenArr.push(e);
            flippedArr = [];
        })
    };

    function gameEnd(){
        alert('WIN!!')
    }
    
    //iterate over array with card items
    cardsDOM.forEach(function(e){
        e.addEventListener('click', function(){
            this.classList.remove('flipped');
            this.classList.add('show');

            if(this.classList.contains('show')){
                flippedArr.push(this)
            }
    
            /*hide pair of cards if they are identical*/
            if(flippedArr.length >= 2 && flippedArr[0].dataset.num === flippedArr[1].dataset.num){
                cardHide();
            }else if(flippedArr.length >=2){
                setTimeout(resetArray, 400)
            };
    
            /*check if array with hidden elements 
            already === array with all elements
            and fire game-end dialog*/ 
            if(cardsDOM.length === hiddenArr.length){
                setTimeout(gameEnd, 1300)
            };
        });
    });
}

gameRun();

















