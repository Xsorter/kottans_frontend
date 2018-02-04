(function () {
'use strict';

let data = {
    key: 'c6976a4c4e05421f9b4eaee7a311f0dc'
};

function find(city, key) {
  fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&units=C&key=${key}`
  )
  .then(function(response) {
    if (response.status === 204) {
        console.log(`City not found. Please, try again.`);
    } else if (response.status === 429) {
        console.log(`API Limit reached (75 queries per 1 hour)`);
    } else if (response.status === 400) {
        console.log(`Search field is empty. Please, enter city name`);
      return false;
    } else {
      return response.json();
    }
  })
  .then(function(body) {
    if (body) {
      console.log(body);
      console.log(body.data)
    }
    return body;
  })
  .catch(function(error) {
    console.log(error);
  });
}

find('киев', data.key);

}());
