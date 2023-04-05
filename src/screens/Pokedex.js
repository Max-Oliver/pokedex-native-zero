import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Pokemonlist from "../components/Pokemonlist";
import { getPokemonsApi } from "../api/pokemon";
import { buildPokemonsArrayByUrl } from "../utils/sharedLogic";

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

      const pokemonsArray = await buildPokemonsArrayByUrl(response);
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
