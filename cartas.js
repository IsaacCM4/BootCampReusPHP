const carta1 = document.getElementById("carta1");
const carta2 = document.getElementById("carta2");

carta1.addEventListener("mouseenter", () => {
    carta1.src = "./imgCartas/card-front.png";
});

carta2.addEventListener("mouseenter", () => {
    carta2.src = "./imgCartas/card-front.png";
});

carta1.addEventListener("mouseleave", () =>{
    carta1.src = "./imgCartas/card-back.png";
});

carta2.addEventListener("mouseleave", () => {
    carta2.src = "./imgCartas/card-back.png";
})