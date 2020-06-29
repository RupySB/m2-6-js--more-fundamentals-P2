// Exercise 4
// ----------

const foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const converter = (obj) => {
  return [Object.keys(obj), Object.entries(obj)];
};

console.log(converter(foodPairings));
