
import './App.css'
import Compteur from './components/Compteur';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  const age = 20;
  const nom = "Drcmind";
  return (
    <div className='App'>
      <Navbar/>
      <Post/>
    </div>
  )
}

export default App
