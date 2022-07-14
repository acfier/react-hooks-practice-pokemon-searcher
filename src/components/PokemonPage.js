import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([]); 
  const [search, setSearch] = useState("")


  useEffect( () => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, []); 

function handleAddNewPokemon (newPokemon) {
  setPokemon([...pokemon, newPokemon]); 
}

  const pokemonsToDisplay = pokemon.filter((poke) =>
  poke.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddNewPokemon={handleAddNewPokemon} />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
