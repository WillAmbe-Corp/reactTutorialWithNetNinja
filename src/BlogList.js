const BlogList = ({allBlogs, title}) => {
    
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {allBlogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.author}</h1>
                    <p>{blog.title}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;