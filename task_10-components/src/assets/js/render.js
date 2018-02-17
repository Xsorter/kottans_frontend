import {parsedUrl, dataDOM, data} from "./config";
import {pushHistory, showHistory} from "./localStorage";

function addFavoriteButton(body) {
    dataDOM.titleDOM.insertAdjacentHTML(
      "beforeend",
      `Current city: ${body.city_name} 
        <img id="favorites" src="assets/media/favorites-button.png">
        `
    );

    document.querySelector("#favorites").addEventListener("click", function() {
      pushHistory(
        dataDOM.favoritesDOM,
        data.favoriteObj,
        "favorite-item",
        "favorites"
      );
    });
  }

//render method
function renderCity(body) {
  dataDOM.loaderDOM.classList.add("none");
  addFavoriteButton(body);

  //create container for inserting data from loop
  let documentFragment = document.createDocumentFragment();

  for (let i=0; i<data.period; i++) {
    let contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", 
      `
        <div class="content__values">
          <p>
            <span class="caption__number">${body.data[i].temp}</span> ${data.unitsDisplay}
            <p class="caption__title">avg. temp.</p> 
          </p>
          <object data="assets/media/${body.data[i].weather.icon}.svg" type="">
          </object>
          <p class="caption__title">${body.data[i].weather.description}</p> 
        </div>
        <p class="date">${body.data[i].datetime
          .split("-")
          .reverse()
          .join(".")}
        </p> 
        <p>max. temp.: ${body.data[i].max_temp} ${data.unitsDisplay}</p>
        <p>min. temp.: ${body.data[i].min_temp} ${data.unitsDisplay}</p>
        <p>feels like, max: ${body.data[i].app_max_temp} ${data.unitsDisplay}</p>
        <p>feels like, min: ${body.data[i].app_min_temp} ${data.unitsDisplay}</p>
        <p>wind: ${body.data[i].wind_spd} m/s</p>
        <p>precipitation: ${body.data[i].pop} %</p>
      `
    );
    documentFragment.appendChild(contentWrapper);
  }

  dataDOM.mainDOM.appendChild(documentFragment);

}

export {renderCity};

