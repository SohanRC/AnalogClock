var hour = document.querySelector('.hour-hand');
var minute = document.querySelector('.minute-hand');
var second = document.querySelector('.second-hand');
setInterval(function () {
    var date = new Date(); 
    second.style.transform = `rotate(${date.getSeconds() * 6}deg)`;  
    minute.style.transform = `rotate(${date.getMinutes() * 6 + date.getSeconds() * 0.1}deg)`;  
    hour.style.transform = `rotate(${date.getHours() * 30 + date.getMinutes() * 0.5}deg)`;  
},1000)

