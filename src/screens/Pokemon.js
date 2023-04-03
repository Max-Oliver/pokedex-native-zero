import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsDetailsByIdApi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const id = params.id;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <MaterialCommunityIcons
          name="arrow-left"
          color={"#fff"}
          size={20}
          style={{
            marginLeft: 5,
          }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const pokeDetail = await getPokemonsDetailsByIdApi(id);
        setPokemon(pokeDetail);
      } catch (error) {
        console.warn("Ocurrio un error: ", error);
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
