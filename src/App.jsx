// DO NOT DELETE
import * as React from 'react'
import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
const [dogUrl, setDogUrl] = useState('https://dog.ceo/dog-api/')

export const App = () => {
  return (
    <div>
      <header>Dogapp</header>
      <img src={dogUrl} alt="これがチワワです" />
    </div>
  )
};

