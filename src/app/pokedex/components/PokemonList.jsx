import PokemonCard from "./PokemonCard"
import "../components/pokemonCards.css"

function PokemonList({pokemons}) {
  return (
    <div className="container__cards">
        {pokemons.map(pokemon => {
            //console.log(pokemon)
            return (
                <PokemonCard key={pokemon.name} url={pokemon.url} />
            )
        })}
    </div>
  )
}

export default PokemonList
