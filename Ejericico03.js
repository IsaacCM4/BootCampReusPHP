function numRandom(){
    num = Math.random(Math.random(0, 1));
    num = Math.round(num);
    if(num == 0){
        return "cruz";
    }else if(num == 1){
        return "cara"
    }
}

console.log(numRandom());