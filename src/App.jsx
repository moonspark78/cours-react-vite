
import './App.css'
import Compteur from './components/Compteur';

function App() {
  const age = 20;
  const nom = "Drcmind";
  return (
    <div className='App'>
      <Compteur/>
      { 
        age > 20 && <Compteur age={age}/>
      }
      <Compteur/>
      <Compteur/>
      <Compteur/>
      <Compteur/>
    </div>
  )
}

export default App
