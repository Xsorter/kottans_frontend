
(function(){
    'use strict'
    const clockDOM = document.querySelector('#time');

    function time() {
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        let fullTime = doubleDigit(h) + ":" + doubleDigit(m) + ":" + doubleDigit(s);
        clockDOM.innerHTML = fullTime;
        clockDOM.setAttribute('datetime', fullTime);
    }

    function doubleDigit(v){
        if(v < 10){
            v = "0" + v;
        }
        return v;
    }

    setInterval(time, 500);

})()

