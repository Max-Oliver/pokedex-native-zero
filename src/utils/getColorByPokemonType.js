import { POKEMON_TYPE_COLORS } from './constants';

export default getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]