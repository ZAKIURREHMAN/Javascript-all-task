





const inputtext = document.getElementById('inputtext');

let debounceTimer;
const Debouncing = (cb, delay) => {
    clearTimeout(debounceTimer);
   debounceTimer =  setTimeout(() => {
        cb()
    }, delay);
};

inputtext.addEventListener('input', (e) => {
    function useasCallback() {
        let values = e.target.value;
        console.log(values);
    }
    Debouncing(useasCallback, 1000);
});







// const Display = ()=>{
//     let count = 0;
//     console.log("It's working ...",count)
// }

// const Debouning = (cb,d)=>{
//     setTimeout(() => {
        
//     }, d);
// }
// const BetterFun = Debouning(Display,1000)