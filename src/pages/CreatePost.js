import { useState } from "react";
const CreatePost = () => {
    const [postTitle, setPostTitle]= useState("")
    const [postBody, setPostBody]= useState("")
    const handlePostTitleChange = (e) => {
        setPostTitle(e.target.value);
    }
    const handlePostBodyChange = (e) => {
        setPostBody(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title: postTitle,
            body: postBody
        };
        alert ("Your Post is Created", newPost)
    }
    return (
        <>
        <div>
            <h1>Create Post</h1>
            <form>
                <div>
                    <label for="title">Post Title:</label>
                    <input type="text" id="title" name="title" onChange={handlePostTitleChange} required />
                </div>
                <div>
                    <label for="body">Post Body:</label>
                    <textarea id="body" name="body" onChange={handlePostBodyChange} required />
                </div>
                <button onClick={handleSubmit}>Create Post</button>
            </form>
        </div>
        <h1>Create Post</h1>
        <h2> Form</h2>
        </>
    )
}

export default CreatePost;