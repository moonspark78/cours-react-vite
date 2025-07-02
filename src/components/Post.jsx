import React from 'react'
import '../App.css'




const Post = ({data}) => {
  return (
    <div className='post'>
        <div>
          <h2>{data.titre}</h2>
        </div>
    </div>
  )
}

export default Post