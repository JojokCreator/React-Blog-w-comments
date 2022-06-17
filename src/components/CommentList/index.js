import Comment from "../Comment";

function CommentList({ comments }) {
  return (
  <ul>
      {comments.map(comment => 
      <li key={comment.id} className="comment">
        <Comment author={comment.author} content={comment.content}/>
    </li>
      )}
  </ul>
  )
}

export default CommentList;
