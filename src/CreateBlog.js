import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Will A.');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, author, body};
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => console.log("New Blog Added"))
        setLoading(false);
        history.push("/");
        setTitle({title:""})
        setAuthor({author:''});
        setBody({body:""});
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={ e => setTitle(e.target.value)}/>
                <label>Body:</label>
                <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>
                <label>Author:</label>
                <select value={author} onChange={e => setAuthor(e.target.value)} >
                    <option value="Will A."> Will A.</option>
                    <option value="Ambe"> Ambe</option>
                    <option value="Light Yagami"> Light Yagami.</option>
                    <option value="Eren Yeager"> Eren Yeager</option>
                    <option value="John Doe"> John Doe</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Blog Adding...</button>}
            </form>
        </div>
    );
}
 
export default CreateBlog;