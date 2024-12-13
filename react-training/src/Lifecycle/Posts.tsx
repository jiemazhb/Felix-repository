import { Component, useEffect, useState } from "react";

export function FnPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // console.log(this.state.posts);
  return (
    <div>
      <h2>Functional Posts</h2>
      <div>
        {posts.map((post) => {
          const { id, title } = post;
          return <div key={id}>{title}</div>;
        })}
      </div>
    </div>
  );
}

export class ClassPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount(): void {
    // side effect like api fetching could be put inside componentDidMount
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  render() {
    // console.log(this.state.posts);
    return (
      <div>
        <h2>Class Posts</h2>
        <div>
          {this.state.posts.map((post) => {
            const { id, title } = post;
            return <div key={id}>{title}</div>;
          })}
        </div>
      </div>
    );
  }
}
