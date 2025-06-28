
import './App.css'

function App() {
  const age = 20;
  return (
    <div style={{backgroundColor: "red", width: "100%", height: "100vh"}}>
      <h2>VOici un composant dans un autre fichier</h2>
      <p>Mon age est {age} ans</p>
      {
        age > 50 ? <h3>Vous êtes vieux !</h3> : <h3>Vous êtes jeunes !</h3> 
      }
    </div>
  )
}

export default App
