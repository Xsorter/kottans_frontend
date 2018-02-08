import {parsedUrl, dataDOM, data} from "./config";
import {findCity} from "./search";

/*clear localstorage data*/
function clearLocalStorage(DOM, key) {
  localStorage.removeItem(key);
  DOM.innerHTML = "";
  DOM.insertAdjacentHTML("beforeend", `there are no ${key} yet`);
}

//localstorage methods for history and favorites
//TODO refactor
function pushHistory(DOM, storageObject, cssClass, localStorageKey) {
    if (
      localStorage.getItem("favorites") &&
      localStorageKey === "favorites" &&
      JSON.parse(localStorage.getItem("favorites")).city.indexOf(data.city) !=
        -1
    ) {
    } else {
      storageObject.city.push(data.city);
      localStorage.setItem(localStorageKey, JSON.stringify(storageObject));
      showHistory(DOM, storageObject, cssClass);
    }
  }

  function showHistory(DOM, storageObject, cssClass) {
    DOM.innerHTML = "";
    if (storageObject) {

      storageObject.city.map(i => {
        DOM.insertAdjacentHTML("beforeend",`<li class="${cssClass}">${i}</li>`);
      });
      
      let hystoryItem = document.querySelector('.main-sidebar');

      hystoryItem.onclick = event => {
        let target = event.target;
        if (target && target.tagName === 'LI'){
          data.city = target.innerHTML;
          findCity(target.innerHTML);
        } 
      };

    }
  }

  export {pushHistory, showHistory, clearLocalStorage}