function Comment({author, content}) {
  return (
    <article className="comment">
      <div className="row">
        <div id="initial"><h2 id="initial-text">{
          author.split(' ').map(word => word[0]).join('').toUpperCase().substring(0,3)}
          </h2>
        </div>
      <h2>{author}</h2>
      </div>
      <p>{content}</p>
      <hr/>
    </article>
  );
}

export default Comment;
