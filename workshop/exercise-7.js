// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function

let createRecommendations = (combinations) => {
  return Object.keys(combinations).map((meals) => {
    return `With ${meals}, it is best to have ${combinations[meals]}.`;
  });
};

// printRecommendations function

let printRecommendations = (combos) => {
  combos.forEach((combo) => {
    console.log(`  ${combo}`);
  });
};

// function call (done)
printRecommendations(createRecommendations(foodPairings));
