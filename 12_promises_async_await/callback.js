function sum(a,b){
    return a+b;
}

function calculation(a,b,call){
    console.log(sum(a,b));
}

calculation(12,23,sum);


// callback hell 

function getData(dataId,getNextData){
    // 2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

// Callback Hell

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
})