

const Compteur = (props) => {
    const compteur = 5;
    
  return (
    <div className="compteur">
        <button>+</button>
        <h2>{compteur}</h2>
        <button>-</button>
    </div>
  )
}

export default Compteur