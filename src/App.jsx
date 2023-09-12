// DO NOT DELETE

import './App.css'
import { useState, useEffect } from 'react'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const fetchAPI = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message);
      });
  };

  return (
    <div> 
      <header>Yes, this is a dog.</header>
      <img src={dogUrl} alt="This is a dog" />
      <p>
        <button onClick={fetchAPI}>Change dog</button>
      </p> 
    </div>
  )
}
