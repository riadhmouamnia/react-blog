import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('AbdElkader Chabira');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSbmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('https://my-json-server.typicode.com/riadhmouamnia/reac-blog-db/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("blog added");
            setIsPending(false);
            history.push('/react-blog')
        })
    }

    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSbmit}>
                <label>Blog title:</label>
                <input type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Content:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Abderrahman Jalti">Abderrahman Jalti</option>
                    <option value="AbdElkader Chabira">AbdElkader Chabira</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;