// function sum(a,b)
// {
//     console.log(a+b);
// }
// function calc(a,b,func)
// {
//     func(a,b);
// }
// calc(1,2,sum)
// calc(3,2,(a,b)=>{
//     console.log(2*a+b)
// })

// function getData(dataId)
// {
//     setTimeout(()=>{
//            console.log("data",dataId);

//     },2000)
// }
// getData(123);

// //getData(123)
// // This is still wrong because:

// // ❌ getData(123) runs immediately, and whatever it returns is passed as the callback.
// // But getData(123) returns nothing → undefined.
// // If you want getData(123) to run after the promise finishes, you must pass a function, not the result of the function.


//IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION(write an already written function insdie (...)())
(function api(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("weather data")
    resolve(200)
},2000);
})
})()
async function hello(){
    console.log("hello")
}
function api(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("weather data")
    resolve(200)
},2000);
})
}
async function getweatherdata(){
    await api();
    await api()
}

//await pauses the execution of its surrounding async function until the promise is settled
hello()
function getdata(dataid,getnextdata)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
resolve("success")            
        },3000)
    })
}
// getdata(123,getData(123))

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data dawg");
            resolve("success");
        },4000)
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data dawg");
            reject("oops error");
        },4000)
    })
}

asyncFunc2().catch((err)=>{
    console.log("oops error fetching data",err)
})
console.log("fetching data1.....")
let p1=asyncFunc1();
p1.then((res)=>{
 console.log(res)
 console.log("fetching data2....")
//so that data is fetched one after the other and not together(if we wrote them together in the same fucntion)
  let p2=asyncFunc2();

p2.catch((res)=>{
    console.log(res)
})
})

//promise chain
getdata(1).then((res)=>{
    console.log(res)
    getdata(2).then((res)=>{
        console.log(res)
    })
})
.then(()=>{
    getdata(3)
})
