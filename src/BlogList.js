import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({allBlogs, title}) => {
    
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {allBlogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.author}</h1>
                        <p>{blog.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;