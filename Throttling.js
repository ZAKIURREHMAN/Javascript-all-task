
const MyThrottling = (cb,d)=>{
    setTimeout(() => {
        cb()
    }, d);
}

const random = ()=>{
    console.log("fadsfads")
}

let MyFun = ()=>{
    MyThrottling(random,5000)
}