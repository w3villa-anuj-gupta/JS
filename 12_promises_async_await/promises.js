// request to the backend 

// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load',()=>{
//     console.log(xhr.response);
// });

// xhr.open('GET','https://supersimplebackend.dev');
// xhr.send();


// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("Resolve")
// })


// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success")
//         if(getNextData){
//             getNextData();
//         }
//         },5000)
//     })
// }



// // then and catch 
// const getPromise = ()=> {
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("success")
//         reject("eroor")
//     });
// };

// let promise = getPromise();

// // then 
// // promise.then((res) =>{
// //     console.log(promise);
// //     console.log("promise fulfilled",res);
// // })

// // catch
// promise.catch((err)=>{
//     console.log(promise);
//     console.log("Promise rejected",err);
// })



//  promise chaining

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success")
//         },3000)
//     })
// }


// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success")
//         },5000)
//     })
// }



// // Promise Chaining 


// console.log("Fetching data1....");

// asyncFunc1().then((res)=>{
//     console.log(res);

//     console.log("Fetching data2....");

//     asyncFunc2().then((res)=>{
//         console.log(res);
//     })
// })

// Promise Chaining - 

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
            // reject("error")
        }, 5000)
    })
}

// Option 1

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     });
// })

// Option 2 

getData(1)
    .then((res) => {
        console.log(res);
        return getData(2);
    })
    .then((res) => {
        console.log(res);
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });

