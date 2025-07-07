import React from 'react'
import '../App.css'




const Post = ({data, liker}) => {
  return (
    <div className={data.liker ?  "post active" :'post'}>
        <div>
          <h2>{data.titre}</h2>
          <p>{data.description}</p>
        </div>
        <div className='btn'>
          <button onClick={() => liker(data)}>{data.liker ? "Déja liker" : "Liker"}</button>
          <button className='delete'>Effacer</button>
        </div>
    </div>
  )
}

export default Post