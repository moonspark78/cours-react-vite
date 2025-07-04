import { useEffect, useState } from "react";



const Compteur = (props) => {
    const [compteur, setCompteur] = useState(0);
    

    const incrementer = () => {
        setCompteur(compteur + 1);
    }

    const deincrementer = () => {
        setCompteur(compteur - 1);
    }


    useEffect(() => {
        console.log("Le compteur a été modifié");
    }, [compteur]);

  return (
    <>
      {
        props.age ? <p>Vous avez {props.age}</p> : null
      }
      <div className="compteur">
          <button onClick={incrementer}>+</button>
          <h2 className={compteur <0 && "erreur"}>{compteur}</h2>
          <button onClick={deincrementer}>-</button>
      </div>
    </>
    )
}

export default Compteur