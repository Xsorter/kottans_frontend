/******************************
 * Match pair game by A.Nelin *
 ******************************/

//running the game
(function (){
    'use strict'
    var DOM = {
        wrapper: document.querySelector('.main__wrapper'),
        dialog: document.querySelector('.dialog-wrapper'),
        scoreDOM: document.querySelector('.score'),
        button: document.querySelector('#button'),
        buttonQuit: document.querySelector('#button-quit'),
        dialogText: document.querySelector('.dialog-text'),
    };

    function runGame(){
        var data = {
            score: 8, //credits to game over
            flippedArr: [],
            hiddenArr: [],
            render: renderCards(6), //number of card pairs. Use even value. For now game have pictures only for 6 pairs max
            cardsDOM: document.querySelectorAll('.main__item-box'),
            //init method for new game
            newGame: function(){
                DOM.scoreDOM.innerHTML = this.score;
                this.cardsDOM.forEach(function(e){
                    e.classList.remove('show');
                    e.classList.remove('cardhide');
                    e.classList.add('flipped');
                });
                DOM.dialog.classList.add('none');
                DOM.dialogText.innerHTML = "";
            }
        }
    
        DOM.scoreDOM.innerHTML = data.score;
    
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
            var shuffledArray = [];
            shuffledArray = randomize(cardsGenerate(count));
            
            for(var i = 0; i < shuffledArray.length; i++){
                DOM.wrapper.insertAdjacentHTML('beforeend', 
                '<div data-num="'+shuffledArray[i]+'" class="main__item-box flipped">\
                <div class="flipper">\
                <div class="front '+shuffledArray[i]+'"></div>\
                <div class="back">\
                </div></div></div>');
            }
            
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
            //first  - insert text to dialog window depend on win or loose status
            if(data.score > 0){
                DOM.dialogText.insertAdjacentHTML('beforeend', '<h2>Congratulations!</h2><p>You win the game!</p>');
            }else{
                DOM.dialogText.insertAdjacentHTML('beforeend', '<h2>Game over!</h2><p>You loose</p>');
            }
            //show dialog window
            DOM.dialog.classList.remove('none');
            DOM.button.addEventListener('click', function(){
                
                data.newGame();
                DOM.wrapper.innerHTML = "";
                runGame();
            });
            DOM.buttonQuit.addEventListener('click', function(){
                window.close()
            });
        };
        
        //iterate over array with card items
        data.cardsDOM.forEach(function(e){
    
            //additionally add touchstart event for some mobile browsers
            ("click touchstart".split(" ")).forEach(function(el){
                e.addEventListener(el,cardsCheck,false);
            }); 
    
            function cardsCheck(){
                this.classList.remove('flipped');
                this.classList.add('show');
                if(this.classList.contains('show')){
                    data.flippedArr.push(this)
                }
        
                /*hide pair of cards if they are identical*/
                if(data.flippedArr.length >= 2 && data.flippedArr[0].dataset.num === data.flippedArr[1].dataset.num){
                    cardHide();
                }else if(data.flippedArr.length >=2){
                    data.score--;
                    DOM.scoreDOM.innerHTML = data.score;
                    setTimeout(resetArray, 400);
                    if(data.score <= 0){
                        setTimeout(gameEnd(data.score), 500);
                    }
                };
        
                /*check if array with hidden elements 
                already === array with all elements
                and fire game-end dialog*/ 
                if(data.cardsDOM.length === data.hiddenArr.length){
                    setTimeout(gameEnd, 1300)
                };
            }
        }); 
    }

    runGame();

})();






















