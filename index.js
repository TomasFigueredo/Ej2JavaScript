const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
////////////////////////////////EJ1///////////////////////////////////////////
const pImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);
console.log("Pizzas con IDs impares:");
pImpares.forEach(pizza => console.log(`${pizza.nombre} (ID: ${pizza.id})`));
////////////////////////////////EJ2////////////-//////////////////////////////
const pEconomica = pizzas.some(pizza => pizza.precio < 600);
if (pEconomica) {
  console.log("Sí, hay al menos una pizza que cuesta menos de $600.");
} else {
  console.log("No, no existe ninguna pizza que cueste menos de $600.");
}
///////////////////////////////EJ3///////////////////////////////////////////
console.log("Precio de las pizzas:");
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});
///////////////////////////////EJ4///////////////////////////////////////////
console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`\n${pizza.nombre}:`);
  pizza.ingredientes.forEach(componente => {
    console.log(`- ${componente}`);
  });
});
////////////////////////////////FIN///////////////////////////////////////////