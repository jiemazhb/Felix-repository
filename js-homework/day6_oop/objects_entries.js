const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  let sum = 0;
  const values = Object.values(people); 

  for (let i = 0; i < values.length; i++) {
    sum += values[i].age; 
  }

  return sum / values.length; 
};
