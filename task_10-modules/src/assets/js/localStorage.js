import {parsedUrl, dataDOM, data} from "./config";

/*create buttons to clear localstorage data*/
function clearLocalStorage(DOM, key) {
  localStorage.removeItem(key);
  DOM.innerHTML = "";
  DOM.insertAdjacentHTML("beforeend", `there are no ${key} yet`);
}

//localstorage methods for history and favorites
//TODO refactor
function pushHistory(DOM, obj, cssClass, localStorageKey) {
    if (
      localStorage.getItem("favorites") &&
      localStorageKey === "favorites" &&
      JSON.parse(localStorage.getItem("favorites")).city.indexOf(data.city) !=
        -1
    ) {
    } else {
      obj.city.push(data.city);
      localStorage.setItem(localStorageKey, JSON.stringify(obj));
      showHistory(DOM, obj, cssClass);
    }
  }

  function showHistory(DOM, obj, cssClass) {
    DOM.innerHTML = "";
    if (obj) {
      obj.city.map(i => {
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