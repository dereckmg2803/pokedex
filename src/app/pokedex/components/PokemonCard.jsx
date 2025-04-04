import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router"

function PokemonCard({url}) {
  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
      axios.get(url)
          .then(({data}) => setPokemon(data))
  }, [url])

  if(!pokemon) return <p>Cargando...</p>

  const styleCard ={
    textDecoration: 'none',
  }
  //console.log(pokemon)
  return (
    <Link style={styleCard} to={`/pokedex/${pokemon.name}`}>
      <div className="pokemon__card">
        <img className="pokemon__card__img" src={pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
        <h2 className="pokemon__card__name">{pokemon.name}</h2>
        <ul key={pokemon.id} className="pokemon__card__types">
          {pokemon?.types?.map(t => (
              <li key={t.type.name} className="pokemon__card__type">{t.type.name}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default PokemonCard
