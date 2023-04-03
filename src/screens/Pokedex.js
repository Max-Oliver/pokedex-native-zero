import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Pokemonlist from "../components/Pokemonlist";
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const poke of response.results) {
        const pokemonDetail = await getPokemonsDetailsByUrlApi(poke.url);

        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
      return response;
    } catch (error) {
      console.error("Ocurrio un error: ", error);
    }
  };
  return (
    <SafeAreaView>
      <Pokemonlist
        pokemons={pokemons}
        loadPokemons={loadPokemon}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
