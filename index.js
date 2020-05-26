let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');
let input7 = document.getElementById('input7');
let input8 = document.getElementById('input8');

let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');
let output4 = document.getElementById('output4');
let output5 = document.getElementById('output5');
let output6 = document.getElementById('output6');
let output7 = document.getElementById('output7');
let output8 = document.getElementById('output8');
function update() {
    let resp7 = Math.PI
    output7.innerText = resp7;
    let resp8 = Math.random();
    output8.innerText = resp8;
}

function update1() {
    let resp1 = Math.round(input1.value);
    output1.innerText = resp1;
}
function update2() {
    let resp2 = Math.ceil(input2.value);
    output2.innerText = resp2;
}
function update3() {
    let resp3 = Math.floor(input3.value);
    output3.innerText = resp3;
}
function update4() {
    let resp4 = Math.min(input4.value,input5.value);
    output4.innerText = resp4;
}
function update5() {
    let resp5 = Math.max(input6.value,input7.value);
    output5.innerText = resp5;
}
function update6() {
    let resp6 = Math.abs(input8.value);
    output6.innerText = resp6;
}
function update7() {
  
}
function update8() {
    
}


