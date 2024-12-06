export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  // return the posts

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
      method : "GET",
    });
    
    return response.json();
  } catch (err) {
    console.log(`error {err}`);
  }
};


// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data", data);
//   });

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method : "GET",
    });
    
    return response.json();
  } catch (err) {
    console.log(`error {err}`);
  }
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  if (!Array.isArray(promises) || !Array.isArray(order)) {
    throw new Error("Both promises and order must be arrays");
  }
  if (promises.length !== order.length) {
    throw new Error("Promises and order arrays must have the same length");
  }

  const results = [];
  
  try {
    // Execute promises in sequential order based on the `order` array
    for (const index of order) {
      const result = await promises[index - 1]; // Access the promise by the given order
      results.push(result); // Collect the result
    }
    return results; // Return the results in the specified order
  } catch (err) {
    throw new Error(`Promise rejected: ${err.message}`);
  }
};
