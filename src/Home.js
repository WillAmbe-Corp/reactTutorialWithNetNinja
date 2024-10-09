import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, loading, error} = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {error && <div>{error}</div> }
            {loading && <div>This may take few seconds...</div> }
            {blogs && <BlogList allBlogs = {blogs} title = "Available Blogs!"/>}
        </div>
    );
}
 
export default Home;