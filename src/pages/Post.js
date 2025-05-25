import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const fetch_post = () => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(response => response.json())
        .then(res => {
            setPost(res);
        })
    }
    useEffect(()=>{
        fetch_post();
    })


    return (
        <>
        <h1>Title: {post.title}</h1>
        <p>{post.body}</p>

        </>
    )
}

export default Post;