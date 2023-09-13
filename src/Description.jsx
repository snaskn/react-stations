// @ts-nocheck
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const fetchAPI = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message)
      })
  }

  return (
    <div>
      <DogImage imageUrl={dogUrl} />
      <p>
        <button onClick={fetchAPI}>Change dog</button>
      </p>
    </div>
  )
}

