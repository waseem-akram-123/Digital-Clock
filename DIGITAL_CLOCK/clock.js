let hour = document.querySelector ("#hour");
let min = document.querySelector ("#min");
let sec = document.querySelector ("#sec");

setInterval (()=>{
    let date = new Date();
    
    let h = hour < 10 ? "0"+ hour : hour;
    let m = min < 10 ? "0"+ min : min;
    let s = sec < 10 ? "0"+ sec : sec;

    h.innerHTML = date.getHours();
    m.innerHTML = date.getMinutes();
    s.innerHTML = date.getSeconds();

    // console.log (date);
},1000);
