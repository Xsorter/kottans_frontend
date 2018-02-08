import {parsedUrl, dataDOM, data} from "./config";

/*create buttons to clear localstorage data*/
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
        DOM.insertAdjacentHTML(
          "beforeend",
          `<li class="${cssClass}">${i}</li>`
        );
      });
      for (
        let i = 0;
        i < document.querySelectorAll(`.${cssClass}`).length;
        i++
      ) {
        document
          .querySelectorAll(`.${cssClass}`)
          [i].addEventListener("click", function() {
            data.city = this.innerHTML;
            findCity(this.innerHTML);
          });
      }
    }
  }

  export {pushHistory, showHistory, clearLocalStorage}