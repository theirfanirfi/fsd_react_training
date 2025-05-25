const CreatePost = () => {
    return (
        <>
        <div>
            <h1>Create Post</h1>
            <form>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label for="body">Body:</label>
                    <textarea id="content" name="body" required></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
        <h1>Create Post</h1>
        <h2> Form</h2>
        </>
    )
}

export default CreatePost;