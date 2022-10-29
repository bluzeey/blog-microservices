import PostCreate from './components/PostCreate';
import PostList from './components/PostList';


function App() {
  return (
    <div>
      <h1 className='m-3'>Create Post</h1>
      <PostCreate/>
      <PostList/>
    </div>
  );
}

export default App;
