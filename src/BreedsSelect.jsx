// @ts-check
import { useState } from 'react'

export const BreedsSelect = ({ breeds, selectedBreed, handleSelectedChange }) => {

  return (
    <div>
      <select value={selectedBreed} onChange={handleSelectedChange}>
        {breeds.map(breed => (
          <option key={breed}>{breed}</option>
        ))}
      </select>
    </div>
  )
}

export default BreedsSelect
