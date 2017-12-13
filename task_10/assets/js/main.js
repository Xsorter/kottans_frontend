
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
    buttonHistoryClear: document.querySelector('#historyClear'),
    tempArray: [],
    weather: {
        date: ''
    },
    units: '',
    period: 1,
    loader: false,
    historyObj: { 
        city: [] 
    }
}

console.log(data.historyObj.city)


//TODO - create some structure for this part!!
if(localStorage.getItem('history')) {
    data.historyObj = JSON.parse(localStorage.getItem('history'));
    historyShow();
}
/////////// 

//TODO hide array without reload
data.buttonHistoryClear.addEventListener('click', function(){
    localStorage.clear();
});


window.addEventListener('load', function(){
    if(parsedUrl.searchParams.get("city")){
        citySearch();
    };
});




console.log(data.historyArrayLocal);
console.log(data.city);
console.log('FIRST LOAD ',data.loader);



//read selected value for temperature units
data.unitsDOM.addEventListener('change', function(){
    data.units = data.unitsDOM.options[document.querySelector('#units').selectedIndex].value;
});

data.periodDOM.addEventListener('change', function(){
    data.period = +data.periodDOM.options[document.querySelector('#period').selectedIndex].value;
    console.log(data.period);
});



//fire event from search form
data.formDOM.addEventListener('submit', function(e){
    e.preventDefault();
    data.city = data.inputDOM.value;
    console.log('done ', data.inputDOM.value);
    citySearch();
    
    historyPush();
    
    var state = {};
    var title = 'city';
    var url = `index.html?city=${data.city}`;
    
    history.pushState(state, title, url);
    var parsedUrl = new URL(window.location.href);
    console.log(parsedUrl.searchParams.get("city"));
    console.log(citySearch.data);
});


function historyPush(){
    data.historyObj.city.push(data.city);
    localStorage.setItem('history', JSON.stringify(data.historyObj));
    historyShow();
}

function historyShow(){
    data.historyDOM.innerHTML = '';
    if(data.historyObj){
        for(i=0; i<data.historyObj.city.length; i++){
            data.historyDOM.insertAdjacentHTML('beforeend', `<li>${data.historyObj.city[i]}</li>`);
        }
    }
}







function citySearch (){
    data.mainDOM.innerHTML = "";
    data.titleDOM.innerHTML = "";
    data.loader = true;
    
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${data.city}&units=${data.units}&key=${data.secretKey}`)
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
        if(body){
            data.titleDOM.insertAdjacentHTML('beforeend', `Current city: <span>${body.city_name}</span>`);
            for(i=0; i< data.period; i++){
                console.log(body.data[i]);
                console.log(body.data[i].datetime);
                console.log(body.data[i].temp);
                data.mainDOM.insertAdjacentHTML('beforeend', 
                `<div style="border: 1px solid #d2d2d2; padding: 10px; margin-top: 10px">
                    <p>${body.data[i].datetime}</p> 
                    <p>Average Temperature: ${body.data[i].temp}</p>
                    <p>Maximum Temperature: ${body.data[i].max_temp}</p>
                    <p>Minimum temperature: ${body.data[i].min_temp}</p>
                    <p>"Feels Like" temperature, max: ${body.data[i].app_max_temp}</p>
                    <p>"Feels Like" temperature, min: ${body.data[i].app_min_temp}</p>
                    <p><code>icon: ${body.data[i].weather.icon}</code></p>
                    <p>Wind speed, m/s: ${body.data[i].wind_spd}</p>
                    <p>Probability of Precipitation, %: ${body.data[i].pop}</p>
                    <object data="assets/icons/${body.data[i].weather.icon}.svg" type=""></object>
                </div>
                `);
            }
            /*window.location.search = `${body.city_name}`*/
        };
        
        return body;
    })
    .catch(function(error){
        console.log(error)
    }); 
}




