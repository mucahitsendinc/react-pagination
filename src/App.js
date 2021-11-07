import {useEffect,useState} from 'react';
import Pagination from './components/Pagination'
function App() {

  const [posts, setPosts] = useState([]);

  const [dataSlice,setDataSlice] = useState([0,0]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      setPosts(json)
      setDataSlice([0,json.length])
    })
  }, []);

  return (
    <div className="posts">

      {
        posts.slice(dataSlice[0],dataSlice[1]).map(post => {
          return(
            <div className="post" key={post.id}>
              <h3>{post.title} - {post.id} </h3>
              <p>{post.body}</p>
            </div>
          )
        })
      }

      <Pagination 
      setter={setDataSlice}
      slice={dataSlice}
      data={posts}
      pagelimit={25}
      />

    </div>
  );
}

export default App;
