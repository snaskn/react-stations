// @ts-check
import { BreedsSelect } from './BreedsSelect.jsx'
import { DogImage } from './DogImage.jsx'
import { useEffect, useState } from 'react'


export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  const [selectedBreed, setSelectedBreed] = useState('')  
  const [breedsPics, setBreedsPics] = useState([''])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedsNames = Object.keys(data.message)
        setBreeds(breedsNames)
      })
  }, [])

  const handleSelectedChange = e => {
    setSelectedBreed(e.target.value)
  }
  // useEffect(() => {
  //   console.log(selectedBreed);
  // }, [selectedBreed]);

  const fetchAPI = () => {
    if (!selectedBreed) return;
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(response => response.json())
      .then(data => {
        setBreedsPics(data.message)
      })
  }

  return (
    <div>
      <BreedsSelect 
        breeds={breeds} 
        selectedBreed={selectedBreed} 
        handleSelectedChange={handleSelectedChange}
      />
      <button onClick={() => setBreedsPics([])}>リセット</button>
      <button onClick={fetchAPI}>表示</button>
      {breedsPics.map((url, index) => (
          <DogImage key={index} imageUrl={url}/>
        ))}
    </div>
  )
}
