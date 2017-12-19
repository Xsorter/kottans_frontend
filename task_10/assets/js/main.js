
let parsedUrl = new URL(window.location.href);



let data = {
    city : parsedUrl.searchParams.get("city"),
    secretKey : 'c6976a4c4e05421f9b4eaee7a311f0dc',
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
    buttonFavoritesAdd: document.querySelector('#favorites'),
    loaderDOM: document.querySelector('.loader-wrapper'),
    tempArray: [],
    weather: {
        date: ''
    },
    units: 'M',
    unitsDisplay: 'C',
    period: 1,
    loader: false,
    historyObj: { 
        city: [] 
    },
    favoriteObj: {
        city: []
    }
}

window.addEventListener('load', function(){
    if(parsedUrl.searchParams.get("city")){
        citySearch(data.city);
    };
});

//TODO - create some structure for this part!!
if(localStorage.getItem('history')) {
    data.historyObj = JSON.parse(localStorage.getItem('history'));
    historyShow(data.historyDOM, data.historyObj, 'history-item');
}

if(localStorage.getItem('favorites')) {
    data.favoriteObj = JSON.parse(localStorage.getItem('favorites'));
    historyShow(data.favoritesDOM, data.favoriteObj, 'favorite-item');
}
/////////// 

//TODO hide array without reload
data.buttonHistoryClear.addEventListener('click', function(){
    clearLocalStorage(data.historyDOM, 'history')
});

data.buttonFavoritesClear.addEventListener('click', function(){
    clearLocalStorage(data.favoritesDOM, 'favorites')
});



function clearLocalStorage(DOM, key){
    localStorage.removeItem(key);
    DOM.innerHTML = '';
    DOM.insertAdjacentHTML('beforeend', `there are no ${key} yet`)
}








console.log(data.city);
console.log('FIRST LOAD ',data.loader);



//read selected value for temperature units
data.unitsDOM.addEventListener('change', function(){
    data.units = data.unitsDOM.options[document.querySelector('#units').selectedIndex].value;
    data.unitsDisplay = data.units === 'M' ? 'C' : 'F';
    if(data.city){
        citySearch(data.city);
    }
});

data.periodDOM.addEventListener('change', function(){
    data.period = +data.periodDOM.options[document.querySelector('#period').selectedIndex].value;
    if(data.city){
        citySearch(data.city);
    }
});



//fire event from search form
data.formDOM.addEventListener('submit', function(e){
    e.preventDefault();
    data.city = data.inputDOM.value;
    console.log('done ', data.inputDOM.value);
    citySearch(data.city);
    historyPush(data.historyDOM, data.historyObj, 'history-item', 'history');
    
    


    console.log(parsedUrl.searchParams.get("city"));
    console.log(citySearch.data);
});


function historyPush(DOM, obj, cssClass, localStorageKey){
    obj.city.push(data.city);
    localStorage.setItem(localStorageKey, JSON.stringify(obj));
    historyShow(DOM, obj, cssClass);
}

function historyShow(DOM, obj, cssClass){
    DOM.innerHTML = '';
    if(obj){
        for(i=0; i<obj.city.length; i++){
            DOM.insertAdjacentHTML('beforeend', `<li class="${cssClass}">${obj.city[i]}</li>`);
        }
        for(i=0; i<document.querySelectorAll(`.${cssClass}`).length; i++){
            document.querySelectorAll(`.${cssClass}`)[i].addEventListener('click', function(){
                data.city = this.innerHTML;
                citySearch(this.innerHTML);
            })
            console.log(document.querySelectorAll(`.${cssClass}`)[i]);
        }
    }
}




function citySearch (city){
    data.mainDOM.innerHTML = "";
    data.titleDOM.innerHTML = "";
    data.loader = true;
    data.loaderDOM.classList.remove('none');

    var state = {};
    var title = city;
    var url = `index.html?city=${city}`;
    
    history.pushState(state, title, url);
    var parsedUrl = new URL(window.location.href);
    
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&units=${data.units}&key=${data.secretKey}`)
    .then(function(response) {
        console.log(response.status);
        data.loader = false;
        
        if(response.status === 204){
            data.titleDOM.insertAdjacentHTML('beforeend', `City not found. Please, try again.`);
        }else if(response.status === 400){
            data.titleDOM.insertAdjacentHTML('beforeend', `Search field is empty. Please, enter city name`);
            return false;
        }else{
            return response.json();
        }
        
     })
    .then(function(body) {
        console.log(body);
        console.log(data.units);
        console.log(data.unitsDisplay);
        data.loaderDOM.classList.add('none');
        if(body){
            data.titleDOM.insertAdjacentHTML('beforeend', 
            `Current city: ${body.city_name} 
            <img id="favorites" src="assets/img/favorites-button.png">
            `);

            document.querySelector('#favorites').addEventListener('click', function(){
                historyPush(data.favoritesDOM, data.favoriteObj, 'favorite-item', 'favorites');
            });

            for(i=0; i< data.period; i++){
                console.log(body.data[i]);
                console.log(body.data[i].datetime);
                console.log(body.data[i].temp);
                data.mainDOM.insertAdjacentHTML('beforeend', 
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
            /*window.location.search = `${body.city_name}`*/
        };
        
        return body;
    })
    .catch(function(error){
        data.loaderDOM.classList.add('none');
        console.log(error)
    }); 
}




