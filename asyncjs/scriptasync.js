// console.log("I ");
// console.log("eat");
// setTimeout(()=>{console.log("ice cream")
// },4000)//run the function after 4000 milliseconds
// console.log("with a");
// console.log("spoon");
// //js runs from top to bottom

// function one(call_two){
//call_two();
//     console.log("step 1 complete please call step 2")
// }

// function two(){
//     console.log("step 2")
// }

// one(two);//forming a relationship between the two functions


let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]

}
// // console.log(stocks.Fruits[2])


// let order = (fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);

//         call_production()
//     }

//         , 2000)
// };

// //CALLBACK HELL(this is where we use promises!)
// let production = () => {
//     setTimeout(() => {
//         console.log("order received. starting production.")
//         setTimeout(() => {
//             console.log("the fruits have been chopped")
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//                 setTimeout(() => {
//                     console.log("the machine was started")
//                     setTimeout(() => {
//                         console.log(`${stocks.holder[0]} was selected`)
//                         setTimeout(() => {
//                             console.log(`Cool!${stocks.toppings[0]} is our topping!`)
//                             setTimeout(()=>{
//                                 console.log("SERVE ICE CREAM!")

//                             },2000)

//                         }, 3000)

//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000

//         )


//     }, 1000)
// };

// order(0, production);


let is_shop_open = true;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())

//             }, time)
//         }
//         else {
//             reject(console.log("our shop is closed"))
//         }

//     })
// }

// order(2000,()=>{
//     console.log(`${stocks.Fruits[0]} was selected`)
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log("production has started")
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log("the fruits are chopped")
//     })
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)
//     })
// })

// .then(()=>{
//     return order(1000,()=>{
//         console.log("start the machine")
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log(`ice-cream placed on ${stocks.holder[0]} `)
//     })
// })

// .then(()=>{
//     return order(3000,()=>{
//         console.log(`${stocks.toppings[0]} was selected`)
//     })
// })

// .then(()=>{
//     return order(2000,()=>{
//         console.log("SERVE DA ICE CREAM :D")
//     })
// })

// .catch(()=>{
//     console.log("Customer left")
// })

// //remove the semi-colons before starting another function

// .finally(()=>{
//     console.log("Day ended.Staff left.Shop closed :3")
// })

//BETTER WAY TO MAKE PROMISES:ASYNC/AWAIT
// let order=()=>{
//     return new Promise((resolve,reject)=>{
//         if( true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// async function order(){
//     try{
//         await abc
//     }
//     catch(error){
//         console.log("abc doesn't exist",error)
//     }
//     finally{
//         console.log("runs code anyways")
//     }
// }
// order()
// .then(()=>{
//     console.log("yolo")
// })




//AWAIT KEYWORD
// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which topping would you like? :3")
//             )
//         }, 3000)
//     })
// }

// async function kitchen() {
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice()
//     console.log("D")
//     console.log("E")

// }

// kitchen();

// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking other orders")



function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(1000)
        console.log("start the production")
        await time(2000)
        console.log("cut the fruits")
        await time(2000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`)
        await time(1000)
        console.log(`${stocks.toppings[0]} was selected`)
        await time(3000)
        console.log("start the machine")
        
    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("day ended.shop is closed :D")
    }
}
kitchen();