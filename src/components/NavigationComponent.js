import {Link} from 'react-router-dom';
const NavigationComponent = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link> </li>
                <li><Link to="/about">About</Link> </li>
                <li><Link to="/todos">Todos</Link> </li>
                <li><Link to="/posts">Posts</Link> </li>
                <li><Link to="/createPost">Create Post</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationComponent;