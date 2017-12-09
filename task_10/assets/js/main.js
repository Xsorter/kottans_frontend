
let data = {
    city :'Makeevka',
    secretKey : 'c6976a4c4e05421f9b4eaee7a311f0dc',
    units : 'M', //I
    formDOM : document.querySelector('.search-form'),
    inputDOM : document.querySelector('#search'),
    mainDOM: document.querySelector('.main-wrapper'),
    titleDOM: document.querySelector('.main-title'),
    tempArray: [],
    weather: {
        date: ''
    }
}

data.formDOM.addEventListener('submit', function(e){
    e.preventDefault();
    data.city = data.inputDOM.value;
    console.log('done ', data.inputDOM.value);
    console.log(`https://api.weatherbit.io/v2.0/forecast/daily?city=${data.city}&units=${data.units}&key=${data.secretKey}`);
    citySearch();

    console.log(citySearch.data);
});


function citySearch (){
    data.mainDOM.innerHTML = "";
    data.titleDOM.innerHTML = "";

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${data.city}&units=${data.units}&key=${data.secretKey}`)
    .then(function(response) {
        console.log(response.status);
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
            for(i=0; i< body.data.length; i++){
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
                </div>
                `);
            }
        };
        
        return body;
    })
    .catch(function(error){
        console.log(error)
    }); 
}




