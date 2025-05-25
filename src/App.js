import {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Todos from './pages/Todos';
import Todo from './pages/Todo';
import Posts from './pages/Posts';
import NavigationComponent from './components/NavigationComponent';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';

function App (){

  
  return (
    <BrowserRouter>
    <NavigationComponent />

      <Switch>

        <Route path="/home">
        <Home/>
        </Route>

        <Route path="/about">
        <About />
        </Route>

        <Route path="/todos">
        <Todos />
        </Route>

      <Route path="/todo/:id">
        <Todo />
      </Route>

      <Route path="/posts/:id">
      <Post />  
      </Route>
      
      <Route path="/posts">
      <Posts />
      </Route>
      <Route path="/createPost">
        <CreatePost/>
      </Route>




        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;