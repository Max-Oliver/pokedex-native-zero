import React, { useEffect, useState, useCallback } from "react";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonInFavoriteApi } from "../api/favorite";
import { buildPokemonsArrayById } from "../utils/sharedLogic";
import useAuth from "../hooks/UseAuth";
import Pokemonlist from "../components/Pokemonlist";
import NotLogged from '../components/NotLogged'

export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();
  
  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const favsPokeIds = await getPokemonInFavoriteApi();
          const pokeFavsDetails = await buildPokemonsArrayById(favsPokeIds);
          setPokemons([...pokemons, ...pokeFavsDetails]);
        })();
      }
    }, [auth])
  );

  return !auth ? (
    <NotLogged />
  ) : (
    <Pokemonlist pokemons={pokemons} />
  );
}
