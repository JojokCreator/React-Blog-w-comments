import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import { useState } from "react";
import { blog } from "../../data/blogs.js"
import { comments } from "../../data/comments";

function App() {
  
  const [comment, setComments] = useState(comments)

    function storeComments(newComment) {
    setComments([
      ...comment,
      newComment
    ])
  }

  return (
    <>
    <BlogPost blog={blog}/>
    <CommentList comments={comment} />
    <CommentForm onSubmit={storeComments} length={comments.length} />
    </>
  )
}


export default App;
