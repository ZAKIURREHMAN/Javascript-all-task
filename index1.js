let numbertype = 55 //Number


// alert("The univesity of Lahore")

// let age = prompt("How old are you")

// let isBoos = confirm("Are You Boss")
// console.log(isBoos)

// alert( null+"2" );


// let a = 5;
// switch(a)
// {
//     case 1:
//         console.log('1')
//         break;
//     case 2:
//         console.log('2')
//         break
//     default:
//         console.log("Other Statement")
// }

// let i = 0;
// while(i<20){
//     console.log("Pakistan")
//     i++
// }

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   let result;
//   // let's copy all user properties into it
//   for (let key in user) {
//     result =  clone[key] = user[key];
//   }

//   console.log(result)


let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
ad
min.f(); // Admin  (this == admin)

admin['f']();