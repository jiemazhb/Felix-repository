// Lifecycle for a person: birth, growth, death
// Lifecycle for a component: mounted, updated, unmount

import React from "react";

// exporpt function FunctionChild() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div
//       style={{
//         marginTop: "10px",
//         border: "1px solid red",
//       }}
//     >
//       <h2>Function Child Component</h2>
//       <div>Count: {count}</div>
//       <button onClick={increment}>Add</button>
//     </div>
//   );
// }

export class ClassChild extends React.Component<{}, { count: number }> {
  constructor(props: any) {
    super(props);

    console.log("constructor");

    // define the state
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  // any last words?
  componentWillUnmount(): void {
    console.log(
      "component will unmount: after this message, component will be removed"
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("rendering...");
    return (
      <div
        style={{
          marginTop: "10px",
          border: "1px solid red",
        }}
      >
        <h2>Class Child Component</h2>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}
