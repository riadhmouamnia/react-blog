import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch(`https://my-json-server.typicode.com/riadhmouamnia/reac-blog-db/blogs/${id}`);
    const history = useHistory();
    const [isDeleting, SetIsDeleting] = useState(false);

    const deleteBlog = ()=>{
        SetIsDeleting(true);
        fetch('https://my-json-server.typicode.com/riadhmouamnia/reac-blog-db/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/react-blog');
            SetIsDeleting(false)
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    {!isDeleting && <button onClick={deleteBlog}>Delete</button>}
                    {isDeleting && <button onClick={deleteBlog}>Deleting blog...</button>}
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;