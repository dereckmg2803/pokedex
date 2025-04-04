import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import pokemonLogo from '/img/pokemon.svg';
import './pokemon.css';

function Pokemon() {
	const params = useParams();
	const [pokemon, setPokemon] = useState([]);
	const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

	useEffect(() => {
		if (params.name) {
			axios
				.get(`${POKEAPI_BASE}/pokemon/${params.name}`)
				.then(({ data }) => setPokemon(data));
		}
	}, [params]);

	const types = pokemon?.types?.map((t) => t.type.name);
	const ability = pokemon?.abilities?.map((t) => t.ability.name);
	const [hp, attack, defense, specialAttack, specialDefense, speed] =
		pokemon?.stats || [];

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/pokedex');
	};

	return (
		<div className="containter__pokemon">
			
			<img
				className="pokedex__logo"
				src={pokemonLogo}
				alt="imagen de charizard"
			/>
			
			
			
			<div className="card__pokemon">
				<div
					className="pokemon-spin hover-rotate"
					style={{
						backgroundImage: `url(${pokemon?.sprites?.other['official-artwork']?.front_default})`,
						width: '350px',
						height: '350px',
					}}
					title={params?.name}
				/>
				<button className="pokedex__button" onClick={handleClick}>
				{' '}
				Volver{' '}
			</button>
				<h2 className="card__pokemon__name"> {params?.name} </h2>
				<span style={{ marginTop: '10px' }}>
					Pokémon id: #{pokemon?.id?.toString().padStart(3, 0)}{' '}
				</span>
				<div className="card__pokemon__body">
					<p>
						{hp?.stat?.name} <span> {hp?.base_stat} </span>{' '}
					</p>
					<p>
						{attack?.stat?.name} <span> {attack?.base_stat} </span>{' '}
					</p>
					<p>
						{defense?.stat?.name} <span> {defense?.base_stat} </span>{' '}
					</p>
				</div>
				<p className="pokemon__card__type">Abilities: {ability?.join(', ')} </p>
				<div className="card__pokemon__body">
					<p>Weight: {pokemon?.weight} </p>
					<p>Height: {pokemon?.height} </p>
				</div>
				<p className="pokemon__card__type">Types: {types?.join(', ')} </p>
			</div>
		</div>
	);
}

export default Pokemon;
