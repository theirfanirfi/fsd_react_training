import {usestate} from "react";

const CreatePost = () => 
{
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");

    const handlesubmit = (e) =>
    {
        e.preventDefault();

        console.log("Post Submitted: ", {title, content});

        setTitle("");
        setContent("");
    }

return
(
    <>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <lable htmlFor="title">Title</lable><br />
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) =>setTitle(e.target.value)}
                    required
                />
            </div>
            <br />
            <div>
                <lable htmlFor="content">Content</lable><br />
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) =>setContent(e.target.value)}
                    required
                />
            </div>
            <br />
            <button type="submit">Submit</button> 
        </form>
    </>
   );
};

export default CreatePost;