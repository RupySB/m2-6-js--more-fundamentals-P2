// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  let fullList = [...arr];
  fullList.unshift(first);
  fullList.push(last);
  fullList.pop(undefined);
  return fullList;
};

//I did part 2 this way - we wanted it to list everything//
const newList = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];
const iterator = newList.values();
for (const value of iterator) {
  console.log(value);
}

printList(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower")
);
