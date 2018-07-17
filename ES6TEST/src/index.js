

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

function qslshan(first,...arg){
    console.log(arg.length);
    for(let i=0;i<arg.length;i++){
        console.log(arg[i]);
    }
    for(let val of arg){
        console.log(val);
    }


}
qslshan(0,1,2,3,4,5,6,7);