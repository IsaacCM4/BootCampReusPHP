import foods from "./foods.mjs";
/*Cojer todas las categorias */
const categorias = [...new Set(foods.map(food => food.category))];
console.log(categorias);   
/*Mirar si existe una categoria en concreto */ 
const existe = categorias.includes("Italian");
console.log(existe)

/*Mirar cuantos platos hay en una misma categoria*/

const findCategory = (category) => foods.filter((food) => (food.category == category));
console.log(findCategory('Italian'));

/*Sacar la cuenta map(), filter() y reduce()*/

const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];
const calculateTotalTicket = (ticket, foods) =>
	ticket
		// Find the food corresponding to the icon
		.map((item) => foods.find((food) => food.icon === item)) 
		// Filter out items that were not found
		.filter(Boolean) 
		// Sum up the prices
		.reduce((total, food) => total + food.price, 0); 

// Calculate the total of the ticket
const totalTicket = calculateTotalTicket(ticket, foods);
console.log(
	`Total of the ticket: ${JSON.stringify(ticket)} is $${totalTicket.toFixed(2)}`
);