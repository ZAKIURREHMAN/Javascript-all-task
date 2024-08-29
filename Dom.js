// let mydiv = document.getElementById('myid')
// mydiv.innerHTML = "I am arbi soft "
// let element = document.createElement('strong')
// element.innerHTML = "This is Strong Element"
// // element.classList.add("StrongClass")
// let Atribute = document.createAttribute('id')
// Atribute.value = 'atributid'
// mydiv.appendChild(element)
// console.log(mydiv.lastChild)

let table = document.querySelector('table')
let row = table.getElementsByTagName('tr')
let colorfull;
console.log(row)
for(let i = 0;i<row.length;i++){
   colorfull = row[i].cells[i]
   colorfull.style.backgroundColor = 'red'
   console.log(colorfull)
}
// console.log(row[0].cells)