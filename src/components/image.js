import * as React from 'react'
export default function ImagePage(props) {
  console.log(`this props`,props.photo.getDog)
  return (
  <div>
    <h1>Photos in this album</h1>

    {
     <img key={1} src={props.photo.getDog} alt={'a dog'}></img>
    }
  </div>
  )
} 