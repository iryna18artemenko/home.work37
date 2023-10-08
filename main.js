const car = { brand: "", model: "", color: "" };
const updatedProperties = Object.assign(car, { type: "" });

const electro =  {...updatedProperties, type: "electro", maxDistance: 0};
const common =   {...updatedProperties, type: "common", gas: "", gearBox: "" };


const models = { 
    tesla: { ...electro,  brand: "Tesla", model: "S Plaid", color: "", type: "electro", maxDistance: 850},
    leaf: { ...electro, brand: "Nissan", model: "Leaf", color: "", type: "electro", maxDistance: 270 },
    x5: {...common, brand: "BMW", model: "X5", color: "", type: "common", gas: "Diesel", gearBox: "auto" },
    kenga: {...common, brand: "Renault", model: "Kangoo", color: "", type: "common", gas: "Petrol", gearBox: "mechanic"}
};


// for (let key in models) {
//     console.log(`${key}: ${JSON.stringify(models[key])}`);     
// };


Object.entries(models).forEach(([key, value]) => console.log(`${key} : ${JSON.stringify(value)}`));
