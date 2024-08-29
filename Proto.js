
// let obj1 = {
//     name:"zaki",
//     myFun:function(){
//         return this.name
//     }
// }
// let obj2 = {
//     name:"siddique",
//     __proto__:obj1
// }
// let obj3 = {
//     name:'3 Object',
//     __proto__:obj2
// }
// console.log(obj3)
// console.log("This is Second object",obj3.myFun())



// function Dog(animal){
//     return this.animal = animal;
// }

// Dog.prototype.Sdob = function(){
//     console.log(`${this.animal} is say Hi`)
// }

// let fobj1 = Dog("cat")
// console.log(fobj1)

// function MyDecorator(constroe){
//     console.log('This is my Decorator is this',constroe)
// }
// @MyDecorator
// class User{
//     name = "zaki ur rehman";
//     email = "z@gmail.com"
// }
// let user = new User()
// console.log(user)





// let obj2 = {
//     name:'Object 2',
//     __proto__:obj1
// }
// obj2.prototype.MyFuntwo = function(){
//     console.log(`My name is Object Funcation 2 `)
// }

// console.log(obj2)


// const Person = {
//     isMen : "true",
//     MyFunone :function(){
//         console.log(`This is ${this.isMen}`)
//     }
    
// }

// let Persontwo = Object.create(Person)
// console.log(Persontwo.MyFunone())


// let obj1 = {
//     name:"zaki"
// }
// let obj2 = {
//     fname:'siddique'
// }

// Object.setPrototypeOf(obj2,obj1)
// console.log(obj2)

// let animal = {
//     eats: true
//   };
  
//   // create a new object with animal as a prototype
//   let rabbit = Object.create(animal); // same as {__proto__: animal}
  
//   console.log(rabbit); // true

// let obj1 = {
//     name:"zaki"
// }

// let newObj = Object.create(obj1,{
//     father:{
//         value:true
//     }
// })

// console.log(newObj)


// let animal = {
//     eats: true
//   };
  
//   let rabbit = Object.create(animal, {
//     jumps: {
//       value: true
//     }
//   });
  
//   console.log(rabbit); // true


// let dictionary = Object.create(null)
// dictionary.apple = "Apple"
// dictionary.bnana = "Bnana"


// dictionary.toString = function(){

//     return Object.keys(this).join(', ')
// }
// for(let i in dictionary){
//     console.log(i)
// }


// console.log(dictionary)