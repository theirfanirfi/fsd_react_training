import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([])

    const fetch_posts = () => {
        let url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
        .then(response => response.json())
        .then(res => {
            setPosts(res);
        })
    }
    useEffect(()=>{
        fetch_posts();
    })


    return (
        <>
        <h1>Posts</h1>
          <ul>
        {
          
        posts.map(post => {
            return <li><Link to={`/posts/${post.id}`}>{post.title}</Link></li>

            })

        }
            </ul>

        </>
    )
}

export default Posts;