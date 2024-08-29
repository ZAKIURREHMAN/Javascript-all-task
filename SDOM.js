// console.log(container.nodeType)
// console.log( document.body.constructor );


// console.log(container.firstElementChild.remove)


let started = false
let storeTime;
let container = document.getElementsByName('container')
let box = document.getElementById('box')

let h = document.getElementById('h')
let m = document.getElementById('m')
let s = document.getElementById('s')
h.style.color = 'red'
m.style.color = 'green'
s.style.color = 'blue'

let UpdateFun = ()=>{
if(started){
let date = new Date()
let  hours = date.getHours()
let mint = date.getMinutes()
let second = date.getSeconds()
let finelDisplay = `${hours}:${mint}:${second}`
box.innerText = finelDisplay
storeTime = finelDisplay
}
}
setInterval(()=>{
UpdateFun()
},1000)
let startbtn = document.getElementById('start')
let stopbtn = document.getElementById('stop')
startbtn.addEventListener('click',()=>{
    started = true
})
stopbtn.addEventListener('click',()=>{
    started = false
    box.innerText = storeTime
})

