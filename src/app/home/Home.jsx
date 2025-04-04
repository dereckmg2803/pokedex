import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useName } from '../../hooks/useName';
import './home.css';
import profesor from '/img/profesor_oak.png';
import pokemon from '/img/pokemon.svg';
import text from '/img/text.png'
import { Input, Button } from '@chakra-ui/react';

function Home() {
	const inputRef = useRef();
	const { setName, name } = useName();
	const navigate = useNavigate();

	const handleSetName = (e) => {
		if (!inputRef.current.value) return;
		setName(inputRef.current.value);
		navigate('/pokedex');
	};

	return (
		<div className="container">
    <div className="content-wrapper">
        <div className="profesor-container">
            <img className="profesor" src={profesor} alt="Profesor Pokémon" />
        </div>

        <div className="text-container">
            <img className="text-profesor" src={text} alt="Profesor text" />
            <p className="overlay-text">
                ¡Hola! Perdón por hacerte esperar.<br />
                Bienvenido al mundo de los Pokémon.
            </p>
        </div>
    </div>

    <div className="container-pokedex">
        <Input
            className="input-pokedex"
            type="text"
            ref={inputRef}
            onKeyDown={(e) => e.key === 'Enter' && handleSetName()}
            placeholder="Ingresa tu nombre"
        />
        <Button className="button-pokedex" onClick={handleSetName}>
            Empezar ahora
        </Button>
    </div>
</div>

	);
}

export default Home;
