
(function(){
    'use strict'
    const clockDOM = document.querySelector('#time');

    function time() {
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        clockDOM.innerHTML = `${h} : ${m} : ${s}`;
    }
    setInterval(time, 500);

})()