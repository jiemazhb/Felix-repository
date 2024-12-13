import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function FetchPost() {
  const [post, setPost] = useState(null);
  const [postId, setpostId] = useState(1);
  const [errorMsg, seterrorMsg] = useState("");

  useEffect(() => {
    // get record
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          { method: "GET" }
        );

        if (response.ok) {
          const data = await response.json();
          seterrorMsg("");
          setPost(data);
        } else {
          seterrorMsg("post not found...");
          setPost(null);

        }
      } catch (error) {
        seterrorMsg(`error occur ${error}`);
        setPost(null);
      }
    };
    // execute
    getData();
  }, [postId]);

  const handleNext = () => {
    let count = postId;
    setpostId(++count);
  };

  const handlePrevious = () => {
    if (postId > 1) {
        setpostId(postId - 1); // Decrease postId only if it's greater than 1
      }
    // if (postId === 0) return;

    // let count = postId;
    // setpostId(--count);
  };

  return (
    <>
      <Button
        onClick={handlePrevious}
        variant="outlined"
        startIcon={<KeyboardArrowLeftIcon />}
      >
        Previous
      </Button>
      <Button
        onClick={handleNext}
        style={{ marginLeft: 10 }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Next
      </Button>
      <ul>
        {post ? (
          (() => {
            const { userId, id, title, body } = post;
            return (
              <li>
                <div>{`User ID: ${userId}`}</div>
                <div>{`ID: ${id}`}</div>
                <div>{`Title: ${title}`}</div>
                <div>{`Body: ${body}`}</div>
              </li>
            );
          })()
        ) : (
          <li>
            <div>{errorMsg}</div>
          </li>
        )}
      </ul>
    </>
  );
}
