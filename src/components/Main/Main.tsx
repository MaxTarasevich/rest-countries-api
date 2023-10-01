import React, { useEffect, useState } from 'react'
import Control from '../Control/Control'
import Card from '../Card/Card'

import './Main.scss'

import dataJSN from '../../data/data.json'

interface Data {}

const Main = () => {
  const [data, setData] = useState([...dataJSN])
  console.log(data)
  return (
    <main className="main container">
      <div className="main__cards flex flex-wrap flex-between">
        {data.map(({ name, capital, population, region, flag }) => (
          <Card
            key={name}
            capital={capital}
            countryName={name}
            population={population}
            region={region}
            flagImg={flag}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
