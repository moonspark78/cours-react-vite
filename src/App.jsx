
import './App.css'
import Compteur from './components/Compteur';

function App() {
  const age = 20;
  const nom = "Drcmind";
  return (
    <div className='App'>
      <Compteur age={age} nom={nom}/>
    </div>
  )
}

export default App
