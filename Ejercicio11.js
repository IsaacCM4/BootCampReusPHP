const btnPush = document.getElementById('btn-push');
const btnUnshift = document.getElementById('btn-unshift');
const btnInsertAt = document.getElementById('btn-insertAt');

const btnpop = document.getElementById('btn-pop');
const btnshift = document.getElementById('btn-shift');
const btnRemoveAt = document.getElementById('btn-removeAt');
const emojis = ["🍕","🍔","🍟","🥙","🥪","🌭","🍿","🧂","🥓","🥚","🍳","🧇","🥞","🧈","🍞","🥐","🥨","🥯","🥖","🫓"];
let visibleFods =[];

function push(){
    let randomFood = Math.floor(Math.random() * 20);
    visibleFods.push(emojis[randomFood]);
    document.getElementById('foods').innerText = visibleFods;
}
btnPush.addEventListener("click", push);

function unshift(){
    let randomFood = Math.floor(Math.random()*20);
    visibleFods.unshift(emojis[randomFood]);
    document.getElementById('foods').innerText = visibleFods;
}
btnUnshift.addEventListener("click", unshift);

function insertAt(){
   const positionAdd = document.getElementById('positionAdd');
   let value = positionAdd.value;
   let numberValue = parseInt(value, 10);
   let randomFood = Math.floor(Math.random()*20);
   visibleFods.splice(numberValue, 0, emojis[randomFood]);
   document.getElementById('foods').innerText = visibleFods;
    
}
btnInsertAt.addEventListener("click", insertAt);

function pop(){
    visibleFods.pop();
    document.getElementById('foods').innerText = visibleFods;
}

btnpop.addEventListener("click", pop);

function shift(){
    visibleFods.shift();
    document.getElementById('foods').innerText = visibleFods;
}
btnshift.addEventListener("click", shift);

function removeAt(){
   const positionAddDelte = document.getElementById('positionAddDelte');
   let value = positionAddDelte.value;
   let numberValueDelte = parseInt(value, 10);
   visibleFods.splice(numberValueDelte, 1);
   document.getElementById('foods').innerText = visibleFods;
}
btnRemoveAt.addEventListener("click", removeAt);
