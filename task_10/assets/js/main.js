
let data = {
    city :'Makeevka',
    secretKey : 'c6976a4c4e05421f9b4eaee7a311f0dc',
    units : 'M', //I
    formDOM : document.querySelector('.search-form'),
    inputDOM : document.querySelector('#search'),
    tempArray: [],
    mainDOM: document.querySelector('.main-wrapper'),
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

    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${data.city}&units=${data.units}&key=${data.secretKey}`)
    .then(function(response) {
        console.log(response.status);
        return response.json();
     })
    .then(function(body) {
        console.log(body);
        for(i=0; i< body.data.length; i++){
            console.log(body.data[i]);
            console.log(body.data[i].datetime);
            console.log(body.data[i].temp);
            data.mainDOM.insertAdjacentHTML('beforeend', 
            `${body.data[i].datetime} 
                <br> 
            ${body.data[i].temp} 
                <br>
            `);
        }
        /* data.tempArray = body.data;
        console.log(data.tempArray);  */

        return body;
    })
    .catch(alert); 
}




