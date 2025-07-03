
import './App.css'
import Compteur from './components/Compteur';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  const [posts , setPosts] = useState([
    {
      id:1,
      titre: "Mon premier post",
      description: "Ceci est la description de mon premier post",
      liker: false
    },{
      id:2,
      titre: "Mon deuxième post",
      description: "Ceci est la description de mon deuxième post",
      liker: false  
    },
    {
      id:3,
      titre: "Mon troisième post",
      description: "Ceci est la description de mon troisième post",
      liker: false
    },{
      id:4,
      titre: "Mon quatrième post",
      description: "Ceci est la description de mon quatrième post",
      liker: false
    },{
      id:5,
      titre: "Mon cinquième post",
      description: "Ceci est la description de mon cinquième post",
      liker: false
    }
  ]);

  const liker = (data) => {
    console.log(data);
  }

  return (
    <div className='App'>
      <Navbar/>
      {posts.map((p) => (
        <Post data={p} liker={liker}/>
      ))}
    </div>
  )
}

export default App
