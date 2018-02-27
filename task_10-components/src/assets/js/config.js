//get current url
let parsedUrl = new URL(window.location.href);

//object with DOM elements
const dataDOM = {
  mainDOM: document.querySelector(".wrapper"),
  titleDOM: document.querySelector(".description"),
  unitsDOM: document.querySelector("#units"),
  periodDOM: document.querySelector("#period"),
  historyDOM: document.querySelector(".history"),
  favoritesDOM: document.querySelector(".favorites"),
  buttonHistoryClear: document.querySelector("#history-clear"),
  buttonFavoritesClear: document.querySelector("#favorites-clear"),
};

let data = {
  city: parsedUrl.searchParams.get("city"),

  units: "M",
  unitsDisplay: "C",
  period: 1,
  //localstorage objects
  historyObj: {
    city: []
  },
  favoriteObj: {
    city: []
  }
};

export { parsedUrl, dataDOM, data };


