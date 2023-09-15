function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas; 
    /* let pizza ={
        "tipoCorteza": tipoCorteza,
            "tipoSalsa": tipoSalsa,
            "quesos": quesos,
        "salsa":salsas
        } */
    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("estilo Nueva York", "tomate", ["mozzarella", "cheddar"], ["pimientos", "cebolla"]);
console.log(pizza3);

var pizza4 = pizzaOven("sin gluten", "peperoni", ["queso de cabra"], ["espinacas", "tomates secos"]);
console.log(pizza4);


