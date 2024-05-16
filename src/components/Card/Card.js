import React from 'react'
import './Card.css'

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_img">
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <h1 className="card_name">{pokemon.name}</h1>
      </div>
      <div className="card_right">
        <table className="card_table">
          <tbody>
            <tr className="card_box">
              <th className="card_title">Number</th>
              <td className="card_data">{pokemon.id}</td>
            </tr>
            <tr className="card_box">
              <th className="card_title">Type</th>
              <td className="card_data">
                {pokemon.types.map((type) => <div key={type.type.name} className="card_type">{type.type.name}</div>)}
              </td>
            </tr>
            <tr className="card_box">
              <th className="card_title">Weight</th>
              <td className="card_data">{pokemon.weight}</td>
            </tr>
            <tr className="card_box">
              <th className="card_title">Height</th>
              <td className="card_data">{pokemon.height}</td>
            </tr>
            <tr className="card_box">
              <th className="card_title">Ability</th>
              <td className="card_data">{pokemon.abilities[0].ability.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Card