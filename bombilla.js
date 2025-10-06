const interruptor = document.getElementById("imgInterruptor");
const bombilla = document.getElementById("imgBombilla");
let encendida = false;

interruptor.addEventListener("click", () => {
    if(!encendida){
        encendida = true;
        interruptor.src = "./imgBombilla/bon.jpg";
        bombilla.src = "./imgBombilla/on.jpg";
         document.body.style.backgroundColor = "white";
        
    } else {
        encendida = false;
        interruptor.src = "./imgBombilla/boff.jpg";
        bombilla.src = "./imgBombilla/off.jpg";
       document.body.style.backgroundColor = "black"
    }
});
