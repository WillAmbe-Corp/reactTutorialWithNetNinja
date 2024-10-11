import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BloDetails = () => {
    const { id } = useParams();
    const {data: blog, loading, error} = useFetch("http://localhost:8000/blogs/" + id);
    return (
        <div className="blog-details">
            <h1>Blog Details - {id}</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && 
            (<article>
                <h2>{blog.title}</h2>
                <p>Edited by {blog.author}</p>
                <div>{blog.body}</div>
            </article>)}
        </div>
    );
}
 
export default BloDetails;