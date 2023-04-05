import {
  getPokemonsDetailsByUrlApi,
  getPokemonsDetailsByIdApi,
} from "../api/pokemon";

export async function buildPokemonsArrayByUrl(pokemons) {
  try {
    const pokemonsArray = [];
    for await (const poke of pokemons.results) {
      const pokemonDetail = await getPokemonsDetailsByUrlApi(poke.url);

      pokemonsArray.push({
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        type: pokemonDetail.types[0].type.name,
        order: pokemonDetail.order,
        image: pokemonDetail.sprites.other["official-artwork"].front_default,
      });
    }
    return pokemonsArray;
  } catch (error) {
    console.warn(
      "Algo salio mal obteniendo el listado de pokemones.. error: ",
      error
    );
    throw error;
  }
}

export async function buildPokemonsArrayById(pokeIds) {
  try {
    const pokemonsArray = [];
    for await (const pokeId of pokeIds) {
      const pokemonDetail = await getPokemonsDetailsByIdApi(pokeId);

      pokemonsArray.push({
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        type: pokemonDetail.types[0].type.name,
        order: pokemonDetail.order,
        image: pokemonDetail.sprites.other["official-artwork"].front_default,
      });
    }
    return pokemonsArray;
  } catch (error) {
    console.warn(
      "Algo salio mal obteniendo el listado de pokemones.. error: ",
      error
    );
    throw error;
  }
}
