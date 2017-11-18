'use strict'

/*************************
 * Match pair by A.Nelin *
 *************************/

//running the game
function gameRun(){

    var data = {
        flippedArr: [],
        hiddenArr: [],
        render: renderCards(6), //Number of card pairs. Use even value. For now game have pictures only for 6 pairs max
        cardsDOM: document.querySelectorAll('.main__item-box'),
        dialog: document.querySelector('.dialog-wrapper'),
        button: document.querySelector('#button'),
        buttonQuit: document.querySelector('#button-quit'),
        //init method for new game
        newGame: function(){
            this.cardsDOM.forEach(function(e){
                e.classList.remove('show');
                e.classList.remove('cardhide');
                e.classList.add('flipped');
            });
            this.flippedArr = [];
            this.hiddenArr = [];
            this.dialog.classList.add('none');
        }
    }

    //generate array with a pair of classnames with numbers from 0 to 5
    function cardsGenerate (count){
        var cards = [];
        for(var i=0; i<count; i++){
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
    function renderCards(count){
        var shuffledArray = randomize(cardsGenerate(count));
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
        data.cardsDOM.forEach(function(e){
            e.classList.remove('show');
            e.classList.add('flipped');
        });
        data.flippedArr = [];
    };

    function cardHide(){
        data.flippedArr.forEach(function(e){
            e.classList.add('cardhide');
            data.hiddenArr.push(e);
            data.flippedArr = [];
        })
    };

    function gameEnd(){
        data.dialog.classList.remove('none');
        data.button.addEventListener('click', function(){
            data.newGame()
        });
        data.buttonQuit.addEventListener('click', function(){
            window.close()
        });
    };
    
    //iterate over array with card items
    data.cardsDOM.forEach(function(e){
        e.addEventListener('click', function(){
            this.classList.remove('flipped');
            this.classList.add('show');

            if(this.classList.contains('show')){
                data.flippedArr.push(this)
            }
    
            /*hide pair of cards if they are identical*/
            if(data.flippedArr.length >= 2 && data.flippedArr[0].dataset.num === data.flippedArr[1].dataset.num){
                cardHide();
            }else if(data.flippedArr.length >=2){
                setTimeout(resetArray, 400)
            };
    
            /*check if array with hidden elements 
            already === array with all elements
            and fire game-end dialog*/ 
            if(data.cardsDOM.length === data.hiddenArr.length){
                setTimeout(gameEnd, 1300)
            };
        });
    });
}

gameRun();

















