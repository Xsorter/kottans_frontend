/******************************************
 * 2017.Weather application by Alex Nelin *
 * Based on weatherbit.io API             *
 ******************************************/

(function(){
    'use strict'

    //get current url
    let parsedUrl = new URL(window.location.href);
    
    //object with DOM elements
    const dataDOM = {
        formDOM : document.querySelector('#searchForm'),
        inputDOM : document.querySelector('#search'),
        mainDOM: document.querySelector('.main-wrapper'),
        titleDOM: document.querySelector('.main-title'),
        unitsDOM: document.querySelector('#units'),
        periodDOM: document.querySelector('#period'),
        historyDOM: document.querySelector('.main-history'),
        favoritesDOM: document.querySelector('.main-favorites'),
        buttonHistoryClear: document.querySelector('#historyClear'),
        buttonFavoritesClear: document.querySelector('#favoritesClear'),
        loaderDOM: document.querySelector('.loader-wrapper'),
    }
    

    let data = {
        city : parsedUrl.searchParams.get("city"),
        
        //api key
        secretKey : 'c6976a4c4e05421f9b4eaee7a311f0dc',
        units: 'M',
        unitsDisplay: 'C',
        period: 1,

        //localstorage objects
        historyObj: { 
            city: [] 
        },
        favoriteObj: {
            city: []
        }
    }
    
    window.addEventListener('load', ()=>{
        init();
    });
    
    
    function init(){

        //run fetch method, we have city in URL
        if(parsedUrl.searchParams.get("city")){
            citySearch(data.city);
        };

        //get values from localstorage, if any
        if(localStorage.getItem('history')) {
            data.historyObj = JSON.parse(localStorage.getItem('history'));
            historyShow(dataDOM.historyDOM, data.historyObj, 'history-item');
        }
        if(localStorage.getItem('favorites')) {
            data.favoriteObj = JSON.parse(localStorage.getItem('favorites'));
            historyShow(dataDOM.favoritesDOM, data.favoriteObj, 'favorite-item');
        }

        //add event listeners to DOM elements
        dataDOM.buttonHistoryClear.addEventListener('click', ()=>{
            clearLocalStorage(dataDOM.historyDOM, 'history')
        });

        dataDOM.buttonFavoritesClear.addEventListener('click', ()=>{
            clearLocalStorage(dataDOM.favoritesDOM, 'favorites')
        });

        //get values from search filter (units and period)
        dataDOM.unitsDOM.addEventListener('change', ()=>{
            data.units = dataDOM.unitsDOM.options[document.querySelector('#units').selectedIndex].value;
            data.unitsDisplay = data.units === 'M' ? 'C' : 'F'; //find unit letter for DOM (C or F)
            if(data.city){
                citySearch(data.city);
            }
        });
        dataDOM.periodDOM.addEventListener('change', ()=>{
            data.period = +dataDOM.periodDOM.options[document.querySelector('#period').selectedIndex].value;
            if(data.city){
                citySearch(data.city);
            }
        });

        //fire fetch method on search field
        dataDOM.formDOM.addEventListener('submit', (e)=>{
            e.preventDefault();
            data.city = dataDOM.inputDOM.value;
            citySearch(data.city);
            if(data.city){
                historyPush(dataDOM.historyDOM, data.historyObj, 'history-item', 'history');
            }
            return false
        });
    }
    
    

    /**localstorage methods for history and favorites
      first, we push data to localstorage**/
    function historyPush(DOM, obj, cssClass, localStorageKey){
        obj.city.push(data.city);
        localStorage.setItem(localStorageKey, JSON.stringify(obj));
        historyShow(DOM, obj, cssClass);
    }

    /*and then, read the data*/ 
    function historyShow(DOM, obj, cssClass){
        DOM.innerHTML = '';
        if(obj){
            //build list from localstorage data
            obj.city.map((i)=>{
                DOM.insertAdjacentHTML('beforeend', `<li class="${cssClass}">${i}</li>`);
            });
            
            for(let i=0; i<document.querySelectorAll(`.${cssClass}`).length; i++){
                document.querySelectorAll(`.${cssClass}`)[i].addEventListener('click', function(){
                    data.city = this.innerHTML;
                    citySearch(this.innerHTML);
                })
            }
        }
    }

    /*create buttons to clear localstorage data*/ 
    function clearLocalStorage(DOM, key){
        localStorage.removeItem(key);
        DOM.innerHTML = '';
        DOM.insertAdjacentHTML('beforeend', `there are no ${key} yet`)
    }
    
    //here we push current city to URL
    function urlPush(city){
        let state = {};
        let title = city;
        let url = `index.html?city=${city}`;
        history.pushState(state, title, url);
        let parsedUrl = new URL(window.location.href);
    }
    
    //fetch method
    function citySearch (city){
        dataDOM.mainDOM.innerHTML = "";
        dataDOM.titleDOM.innerHTML = "";
        dataDOM.loaderDOM.classList.remove('none'); //show loader
        urlPush(city); 
        
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&units=${data.units}&key=${data.secretKey}`)
        .then(function(response) {
            if(response.status === 204){
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', `City not found. Please, try again.`);
            }else if(response.status === 400){
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', `Search field is empty. Please, enter city name`);
                return false;
            }else{
                return response.json();
            }
         })
        .then(function(body) {
            dataDOM.loaderDOM.classList.add('none');//hide loader, when loaded
            if(body){

                //insert favorite button
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', 
                `Current city: ${body.city_name} 
                <img id="favorites" src="assets/img/favorites-button.png">
                `);
                document.querySelector('#favorites').addEventListener('click', function(){
                    historyPush(dataDOM.favoritesDOM, data.favoriteObj, 'favorite-item', 'favorites');
                });
    
                for(let i=0; i< data.period; i++){
                    dataDOM.mainDOM.insertAdjacentHTML('beforeend',
                    //template with weather data 
                    `<div class="main-content-box main-content-box_count-${i}">
                        <div class="main-content-box_values">
                            <p>
                                <span class="number-caption">${body.data[i].temp}</span> ${data.unitsDisplay}
                                <p class="title-caption">avg. temp.</p> 
                            </p>
                            <object data="assets/icons/${body.data[i].weather.icon}.svg" type=""></object>
                            <p class="title-caption">${body.data[i].weather.description}</p> 
                        </div>
                        <p class="date">${body.data[i].datetime.split('-').reverse().join('.')}</p> 
                        <p>max. temp.: ${body.data[i].max_temp} ${data.unitsDisplay}</p>
                        <p>min. temp.: ${body.data[i].min_temp} ${data.unitsDisplay}</p>
                        <p>feels like, max: ${body.data[i].app_max_temp} ${data.unitsDisplay}</p>
                        <p>feels like, min: ${body.data[i].app_min_temp} ${data.unitsDisplay}</p>
                        <p>wind: ${body.data[i].wind_spd} m/s</p>
                        <p>precipitation: ${body.data[i].pop} %</p>
                    </div>
                    `);
                }
            };
            return body;
        })
        .catch(function(error){
            dataDOM.loaderDOM.classList.add('none');
            console.log(error)
        }); 
    }

})();







