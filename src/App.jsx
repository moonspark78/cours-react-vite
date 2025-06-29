
import './App.css'
import Compteur from './components/Compteur';

function App() {
  const age = 20;
  return (
    <div className='App'>
      <h2>Un composant Simple</h2>
      <Compteur age={age}/>
    </div>
  )
}

export default App
