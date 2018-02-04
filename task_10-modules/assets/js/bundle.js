(function () {
'use strict';

function test(){
    console.log('module 1');
}

let data = 'some data';

function test2(){
    console.log('module 2');
}

function test3(){
    console.log('module3');
}

test();
test2();
test3();


console.log(data);

}());
