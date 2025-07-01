
import './App.css'
import Compteur from './components/Compteur';
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
    }
  ]);
  return (
    <div className='App'>
      <Navbar/>
      <Post/>
    </div>
  )
}

export default App
