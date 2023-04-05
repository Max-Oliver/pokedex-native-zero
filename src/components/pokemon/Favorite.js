import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  addPokemonInFavoriteApi,
  isPokemonInFavoriteApi,
  removePokemonInFavoriteApi,
} from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [realoadCheck, setReloadCheck] = useState(false);
  const iconType = isFavorite ? "heart" : "heart-outline";

  useEffect(() => {
    (async () => {
      await inMemoryValidationId(id, setIsFavorite);
    })();
  }, [id, realoadCheck]);

  const onReloadCheckFavoriteIcon = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      console.log("Añadir a favoritos..", id);
      await addPokemonInFavoriteApi(id);
      onReloadCheckFavoriteIcon();
    } catch (error) {
      console.warn("Error al renderizar Fav icon...");
    }
  };
  const removeFavorite = async () => {
    try {
      console.log("Removeiendo de favoritos..", id);
      await removePokemonInFavoriteApi(id);
      onReloadCheckFavoriteIcon();
    } catch (error) {
      console.warn("Error al renderizar Fav icon...");
    }
  };


  
  return (
    <MaterialCommunityIcons
      name={iconType}
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}

async function inMemoryValidationId(id, setIsFavorite) {
  try {
    const response = await isPokemonInFavoriteApi(id);
    setIsFavorite(response);
  } catch (error) {
    setIsFavorite(false);
  }
}
