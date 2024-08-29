let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
//   promise.then((res)=>console.log(res)) 

//   Because After the First resolve or reject other are ignored


new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch((err)=>{
    console.log("This is error",err)
  });