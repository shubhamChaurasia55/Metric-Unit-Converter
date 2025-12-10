const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const conversionSec = document.getElementById("con-sec");

const metFeet = document.getElementById("mf");
const letGal = document.getElementById("lg");
const kiloPound = document.getElementById("kp");

convertBtn.addEventListener("click", function(){

    let val = Number(inputEl.value);
    
    metFeet.innerHTML = `${val} meters = ${(val*3.281).toFixed(2)} feet | ${val} feet = ${(val*0.3048).toFixed(2)} meters`;

    letGal.innerHTML = `${val} liters = ${(val*0.264).toFixed(2)} gallons | ${val} gallons = ${(val*3.78541).toFixed(2)} liters`;

    kiloPound.innerHTML = `${val} killograms = ${(val*2.204).toFixed(2)} pounds | ${val} pounds = ${(val*0.4535).toFixed(2)} killograms`;
})