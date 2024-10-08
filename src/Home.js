import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"Cameroon Tributes", author: "James Petersburg", content: "lorem ipsun...", id: 1},
        {title:"Engineering World", author: "Ambe Haven", content: "lorem ipsun...", id: 2},
        {title:"The Seducer's Diary", author: "John Doe", content: "lorem ipsun...", id: 3},
        {title:"Life as A Wealthy Man", author: "Will A.", content: "lorem ipsun...", id: 4}]
    )
    return (
        <div className="home">
            { blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.author}</h1>
                    <p>{blog.title}</p>
                </div>
            )) }
        </div>
    );
}
 
export default Home;