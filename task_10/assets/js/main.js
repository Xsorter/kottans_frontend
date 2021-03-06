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
            findCity(data.city);
        };

        //get values from localstorage, if any
        if(localStorage.getItem('history')) {
            data.historyObj = JSON.parse(localStorage.getItem('history'));
            showHistory(dataDOM.historyDOM, data.historyObj, 'history-item');
        }
        if(localStorage.getItem('favorites')) {
            data.favoriteObj = JSON.parse(localStorage.getItem('favorites'));
            showHistory(dataDOM.favoritesDOM, data.favoriteObj, 'favorite-item');
        }

        document.onclick = (event) => {
            let target = event.target;

            if(target && target === dataDOM.buttonHistoryClear){
                clearLocalStorage(dataDOM.historyDOM, 'history')
            }

            if(target && target === dataDOM.buttonFavoritesClear){
                clearLocalStorage(dataDOM.favoritesDOM, 'favorites')
            }
        }

        document.onchange = (event) => {
            let target = event.target;

            if(target && target === dataDOM.unitsDOM){
                data.units = dataDOM.unitsDOM.options[document.querySelector('#units').selectedIndex].value;
                data.unitsDisplay = data.units === 'M' ? 'C' : 'F'; 
                if(data.city){
                    findCity(data.city);
                }
            }

            if(target && target === dataDOM.periodDOM){
                data.period = +dataDOM.periodDOM.options[document.querySelector('#period').selectedIndex].value;
                if(data.city){
                    findCity(data.city);
                }
            }
            
        }

        
        dataDOM.formDOM.addEventListener('submit', (e)=>{
            e.preventDefault();
            data.city = dataDOM.inputDOM.value;
            findCity(data.city);
            if(data.city){
                pushHistory(dataDOM.historyDOM, data.historyObj, 'history-item', 'history');
            }
            return false
        });
    }
    
    //localstorage methods for history and favorites
    function pushHistory(DOM, obj, cssClass, localStorageKey){
        if(localStorage.getItem('favorites') && 
            localStorageKey === 'favorites' && 
            JSON.parse(localStorage.getItem('favorites')).city.indexOf(data.city) != -1){
        }else{
            obj.city.push(data.city);
            localStorage.setItem(localStorageKey, JSON.stringify(obj));
            showHistory(DOM, obj, cssClass);
        }
    }

    function showHistory(DOM, obj, cssClass){
        DOM.innerHTML = '';
        if(obj){
            obj.city.map((i)=>{
                DOM.insertAdjacentHTML('beforeend', `<li class="${cssClass}">${i}</li>`);
            });
            for(let i=0; i<document.querySelectorAll(`.${cssClass}`).length; i++){
                document.querySelectorAll(`.${cssClass}`)[i].addEventListener('click', function(){
                    data.city = this.innerHTML;
                    findCity(this.innerHTML);
                })
            }
        }
    }

    /*create buttons to clear localstorage data*/ 
    function clearLocalStorage(DOM, key){
        localStorage.removeItem(key);
        DOM.innerHTML = '';
        console.log(DOM);
        DOM.insertAdjacentHTML('beforeend', `there are no ${key} yet`)
    }
    
    function createFavoriteButton (body){
        dataDOM.titleDOM.insertAdjacentHTML('beforeend', 
        `Current city: ${body.city_name} 
        <img id="favorites" src="assets/img/favorites-button.png">
        `);
        document.querySelector('#favorites').addEventListener('click', function(){
            pushHistory(dataDOM.favoritesDOM, data.favoriteObj, 'favorite-item', 'favorites');
        });
    }

    //push current city to URL
    function pushUrl (city){
        let state = {};
        let title = city;
        let url = `index.html?city=${city}`;
        history.pushState(state, title, url);
        let parsedUrl = new URL(window.location.href);
    }
    
    //render method
    function renderCity (body){
        dataDOM.loaderDOM.classList.add('none');
        createFavoriteButton(body);

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
    }


    function findCity (city){
        dataDOM.mainDOM.innerHTML = "";
        dataDOM.titleDOM.innerHTML = "";
        dataDOM.loaderDOM.classList.remove('none'); //show loader
        pushUrl(city); 
        
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&units=${data.units}&key=${data.secretKey}`)
        .then(function(response) {
            if(response.status === 204){
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', `City not found. Please, try again.`);
            }else if(response.status === 429){
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', `API Limit reached (75 queries per 1 hour)`);
            }else if(response.status === 400){
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', `Search field is empty. Please, enter city name`);
                return false;
            }else{
                return response.json();
            }
         })
        .then(function(body) {
            if(body){
                renderCity(body)
            };
            return body;
        })
        .catch(function(error){
            dataDOM.loaderDOM.classList.add('none');
            console.log(error)
        }); 
    }

})(); 







