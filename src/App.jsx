import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
function App() {
   let [pokemonIndex, setpokemonIndex] = useState(0);

   const increaseIndex = () => {
    setpokemonIndex(pokemonIndex+1);
  }

  const decreaseIndex = () => {
    setpokemonIndex(pokemonIndex-1);
  }

  return (
    <div>
<PokemonCard pokemonProp={pokemonList[pokemonIndex]} />
<button onClick={decreaseIndex}>Previous</button>
<button onClick={increaseIndex}>Next</button>
    </div>
  )

  }
export default App;
