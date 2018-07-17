//数字操作
// let qslshan="青珊绿水";
// let blog="非常高兴你能看到这篇文章，我是你的老朋友"+qslshan+"。欢迎来来到我的博客。青珊绿水";
// document.write(blog.endsWith(qslshan));
//document.write('qslshan|'.repeat(3));
//二进制声明 Binary  octal八进制
// let Binary=0B0010101;
// console.log(Binary);
// let octal=0o666;
// console.log(octal);
//  let a=11;
//  console.log(Number.isFinite(a));  //判断是否是数字
//  console.log(Number.isFinite('JSPANG'));
//  console.log(Number.isFinite(NaN));
//  console.log(Number.isFinite(undefined));
//  console.log(Number.isNaN(NaN)); //判断是否是非数字
//  console.log(Number.isNaN(11));

 //判断是否是整数
//  let c=918.1;
//  console.log(Number.isInteger(c));
//  console.log(Number.parseInt(c)); //转化成整数
//  console.log(Number.parseFloat(c));//转化成浮点数
// let qslshan=Math.pow(2,53)-1;//求2^53次方的值，不能大于，所以要减1
// console.log(qslshan);
// console.log(Number.MAX_SAFE_INTEGER);//最大值
// console.log(Number.MIN_SAFE_INTEGER);//最小值
// console.log(Number.isSafeInteger(qslshan) ) //判断qslshan是否是安全的整数





//数组操作

//json数组格式
 
// let json={
//     '0':'jspang',
//     '1':'qslshan',
//     '2':'dapngbibidao',
//     '3':'青珊绿水',
//     length:4
// }
// console.log( json);
// let arr=Array.from(json) ; //转换成数组格式
// console.log(arr);

//转换成数组格式
// let arr=Array.of(3,4,5,6);
// console.log(arr)

//find() 实例方法
//value当前查找的值 
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value>9;

// }))

//fill 替换
// let arr=['qslshan','jspang','青珊绿水'];
// arr.fill('web',1,3);
// console.log(arr);

//数组循环
// let arr=['qslshan','jspang','青珊绿水'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val)
// }

//entries 手动循环
// let arr=['qslshan','jspang','青珊绿水'];
// let list=arr.entries();
// console.log(list.next().value);
// console.log('-----------------')
// console.log(list.next().value);
// console.log('******************')
// console.log(list.next().value);
// console.log('666666666666666666')




//箭头函数
// function add(a,b){
//     if(a==0){
//         throw new Error('A is error.') 
//     }
//     return a+b;
// }
// console.log(add.length);

// var add=(a,b=1)=> a+b;
// console.log(add(1));

// let json={
//     a:'qslshan',
//     b:'青珊绿水'
// }

// function fun({a,b='web'}){

//     console.log(a,b);
// }
// fun(json);

// let arr=['qslshan','jspang','青珊绿水'];
// function fun(a,b,c){
//     console.log(a,b,c)
// }

// fun(arr);

//in
// let arr=['qslshan',,,]
// console.log(0 in arr)

//遍历数组 forEach
// let arr=['qslshan','jspang','青珊绿水'];
//arr.forEach((val,index) => console.log(index,val));

//filter
//arr.filter(x=>console.log(x));

//some
//arr.some((x)=>console.log(x));

//map 替换
//console.log(arr.map(x=>'web'));

//数组转换成字符串
// console.log(arr.toString());
// console.log(arr.join('-'));



// Promise
// let state=1;

// function step1(resolve,reject){
//     console.log('1. 开始-洗菜做饭')
//     if (state==1){
//         resolve ('洗菜做饭-完成')
//     }
//     else{
//         reject('洗菜做饭-错误')
//     }
// }
// function step2(resolve,reject){
//     console.log('2. 开始-坐下做饭')
//     state=0
//     if (state==1){
//         resolve ('坐下做饭-完成')
//     }
//     else{
//         reject('坐下做饭-错误')
//     }
// }
// function step3(resolve,reject){
//     console.log('3. 开始-收拾桌子洗碗')
//     if (state==1){
//         resolve ('收拾桌子洗碗-完成')
//     }
//     else{
//         reject('收拾桌子洗碗-错误')
//     }
// }

// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
    
// }).
// then(function(val){
//         console.log(val);
//         return new Promise(step3);
//  }).
//     then(function(val){
//     console.log(val);
    
// }).catch(function(){
//     console.log('ERROR');
// }

// );




//class
// class Coder{
//     name(val){
//         console.log(val);
//         return val;
//     }

//     skill(val){
//         console.log(this.name('qslshan'+':'+'Skill-'+val));
//     }

//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }

//     add(){
//         return this.a+this.b; 
//     }
// }

// class htmler extends Coder{

// }
// let pang=new htmler(1,2);
// pang.name('qslshan');
// console.log(pang.add());


//模块化  export 输出  import 引入
// import { name } from './temp';
// console.log(name)
// var map =new Map()
// map.set('foo',6)
// map.set(262,'false')
// map.set(undefined,'nash')
// console.log(map,map.size)
let map0=new Map().set(1,'a').set(2,'b').set(3,'c')
// for (let key of map.keys()){
//     console.log(key)
// }
// for (let value of map.values()){
//     console.log(value)
// }
// for(let item of map.entries()){
//     console.log(item[0],item[1]);
// }
// for(let [key,value] of map.entries()){
//     console.log(key,value)
// }
// for(let [key,value] of map){
//     console.log(key,value)
// }
// console.log([...map.keys()])
// console.log([...map.values()])
// console.log([...map.entries()])
// console.log([...map])
// let map1=new Map([...map0].filter(([k,v])=>k<3))
// let map2=new Map([...map0].map(([k,v])=>[k*2,'_'+v]))
// console.log(map1)
// console.log(map2)
// map0.forEach(function (value,key){
//     console.log("key:%s,value:%s",key,value)
// })
function ObjTostrMap(obj){
    let strMap=new Map()
    for(let k of Object.keys(obj)){
        strMap.set(k,obj[k])
    }
    return strMap
}
console.log(ObjTostrMap({yes:true,no:false}))