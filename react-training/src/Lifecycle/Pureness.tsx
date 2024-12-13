import React, { Component } from "react";

// must read:
// https://react.dev/learn/keeping-components-pure

// sum is a pure function because
// 1. given the same inputs, always return the same output
// 2. doesn't produce any side effect
function sum(a: number, b: number): number {
  return a + b;
}

let count = 0;
function impureSum(a: number, b: number): number {
  // not pure
  // it has side effect: it's changing the 'count' outside
  // it's not always going to have the same output
  count++;
  return a + b + count;
}

function impureSum2(a: number, b: number): number {
  // not pure
  // fetch is a side effect
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
    });
  return a + b;
}

function sum3(a: number, b: number): number {
  // this is not a side effect
  // because it's internal, doesn't anything outside
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
  }

  // console.log is technically a side effect, but we don't really care
  // console.log(sum);

  return a + b + sum;
}

// Things that are side effects:
// Promise: fetch, async/await,
// Async: setTimeout, setInterval
// DOM related: addEventListener, something.innerHTML = "",
// changing some variables outside
// etc

// rendering phase of the component should be pure
const people = [
  { id: 1, name: "Alice", age: 12 },
  { id: 2, name: "Bob", age: 15 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "Diana", age: 28 },
  { id: 5, name: "Ethan", age: 22 },
];

export default function Pureness() {
  return (
    <div>
      <h2>Pureness</h2>
      <FnChild people={people} />
      {/* <ClassChild /> */}
    </div>
  );
}

function FnChild({ people }: any) {
  const minors = people.filter((person: any) => person.age < 18);

  return (
    <div>
      {minors.map((minor: any) => {
        return <div>{minor.name}</div>;
      })}
    </div>
  );
}

// in constructor and render methods, there should be no side effects

// a pure component is a component that will render the same JSX given the same props
// there is no side effect DURING the rendering phase

class ClassChild extends Component {
  //   constructor() {}

  // this is the rendering phase
  render() {
    return <div>Class</div>;
  }
}
