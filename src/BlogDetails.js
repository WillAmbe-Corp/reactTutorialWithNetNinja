import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useState } from "react";

const BloDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const [deleting, setDeleting] = useState(false);
    const {data: blog, loading, error} = useFetch("http://localhost:8000/blogs/" + id);
    
    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id,{
            method: "DELETE",
        }).then(() =>{
            history.push("/");
        })
        setDeleting(false);
    }
    return (
        <div className="blog-details">
            <h1>Blog Details - {id}</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && 
            (<article>
                <h2>{blog.title}</h2>
                <p>Edited by <span style={{fontWeight: 'bolder', fontSize: '20px' }}>{blog.author}</span></p>
                <div>{blog.body}</div>
                {!deleting && <button onClick={handleDelete}>Delete Blog</button>}
                {deleting && <div>Deleting Blog...</div>}
            </article>)}
        </div>
    );
}
 
export default BloDetails;