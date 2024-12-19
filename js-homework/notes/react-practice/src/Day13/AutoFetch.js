import React, { useEffect, useState } from "react";

export default function AutoFetch() {
  const [data, setData] = useState(null);
  const [postId, setpostId] = useState(1);
  const [errorMsg, seterrorMsg] = useState("");


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const obj = await response.json();
          setData(obj);

        } else {
          seterrorMsg("no more post");

        }
      } catch (error) {
        seterrorMsg(`getting exception ${error}`);

      }
    };

    getData();
  }, [postId]);

  useEffect(() => {


    const intervalId = setInterval(() => {
      
      setpostId((prevPostId) => {
        if (errorMsg) return prevPostId; 
        
        return prevPostId + 1;       
      })

    }, 2000);

    return () => clearInterval(intervalId);
    
  }, [errorMsg]);

  return (
    <>
      <ul>
        {data ? (
          (() => {
            const { userId, id, title, body } = data;
            return (
              <li>
                <div>UserId : {userId}</div>
                <div>Id : {id}</div>
                <div>Title : {title}</div>
                <div>Body : {body}</div>
              </li>
            );
          })()
        ) : (
          <div>{errorMsg}</div>
        )}
      </ul>
    </>
  );
}
