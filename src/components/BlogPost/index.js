function BlogPost({blog}) {
  
  return( <article className="blog">
          <h1>{blog.title}</h1>
          <h3>by {blog.author}</h3>
          <p className="date">{blog.datePosted}</p>
          <hr id="line"/>
          <img id="cover-img" src={blog.imageSrc} alt={blog.imageAlt} />
          <p id="p-image">{blog.imageAlt}</p>
          <p id="main-text">{blog.content}</p>
          </article>
        )
      
}

export default BlogPost;
