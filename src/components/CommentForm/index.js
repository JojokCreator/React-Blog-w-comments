import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [inputs, setInputs] = useState([{
    author: "",
    content: ""
}])

  function handleForm (e){
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  function onSubmitForm(e) {
    e.preventDefault()
    const authorName = inputs.author;
    const newComment = { 
      id: Math.floor(Math.random() * 1000),
      author:  (authorName) ? authorName : "Anon Author",
      content: inputs.content }
      onSubmit(newComment)

      e.target.reset();
      setInputs(
        [{
        author: authorName,
        content: "" }])
  }

  return (
    <form onSubmit={(inputs.content) ? onSubmitForm : (e)=> {e.preventDefault()} }>
      <label htmlFor="author">Author</label>
      <input name="author" onChange={handleForm} defaultValue='Anon Author' id="author"></input> 
      <label htmlFor="content">Comment</label>
      <input name="content" onChange={handleForm} id="content"></input>
      <button type="Submit">Submit</button>
    </form>
  )
}

export default CommentForm;
