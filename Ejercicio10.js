//Analiza este codigo: Cuantas iteraciones da? Cuando entrará el if? Y en el else?
let numero = 1;
let i = 0;

do {
    if (i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);

//Dara un total de 6 interaciones
//El if entrara cuando el numero sea exactamente el mismo y el miso tipo de dato es decir cuando sea 0
//En el else entrara en la segunda intereacion ya que en la segunda la variable i, ya no sera 0, por lo cual ira directamente al else.
