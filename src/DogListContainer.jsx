// @ts-check

import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedsNames = Object.keys(data.message)
        setBreeds(breedsNames)
      })
  })

  return (
    <div>
      <ul>
        {breeds.map((breed, index) => (
          <li key={index}>{breed}</li>
        ))}
      </ul>
    </div>
  )
}
