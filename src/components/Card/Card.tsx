import type { FC } from 'react'

import './Card.scss'

interface Props {
  countryName: string
  population: number
  capital: string | undefined
  region: string
  flagImg: string
}

const Card: FC<Props> = ({
  countryName,
  population,
  capital,
  region,
  flagImg,
}) => {
  return (
    <div className="card">
      <div className="card__flag">
        <img src={flagImg} alt={`${countryName} flag`} />
      </div>

      <div className="card__text">
        <h2 className="card__title">{countryName}</h2>

        <ul className="card__list">
          <li className="card__list__item">
            <span>Population:</span> {population}
          </li>
          <li className="card__list__item">
            <span>Region:</span> {region}
          </li>
          <li className="card__list__item">
            <span>Capital:</span> {capital}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
