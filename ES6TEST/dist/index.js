"use strict";

//var a = "qslshan";
// window.onload=function(){
//     console.log(a);

// }
// 

// for(let i=0;i<10;i++){
//     console.log("循环体中",i);
// }
// console.log("循环体外",i);

// const a="qslshan";
// console.log(a);

// let [a,b,c]=[0,1,2];
// console.log(a);
// console.log(b);
// console.log(c);

// let [d,foo="qslshan"]=["青珊绿水",null];
// console.log(d+foo)
// const[a,b,c,d,e,f]='qslshahn';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d)
// console.log(e);
// console.log(f);

// function qslshan(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     //console.log(arg[3]);

// }
// qslshan(1,2,3,4);

// let arr1=['www','qsls','com'];
// //let arr2=arr1;
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('shenghong');
// console.log(arr1);
// console.log(arr2);

function qslshan(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log(arg.length);
    for (var i = 0; i < arg.length; i++) {
        console.log(arg[i]);
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
qslshan(0, 1, 2, 3, 4, 5, 6, 7);
