import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from '../utils/constants';


export async function getPokemonInFavoriteApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || '[]');
    } catch (error) {
        console.warn('Ocurrio un problema obteniendo en favoritos: ',error)
        throw error;
    }
}

export async function addPokemonInFavoriteApi(id){
    try {
        const favorites = await getPokemonInFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        console.warn('Ocurrio un problema guardando en favoritos: ',error)
        throw error;
    }
}

export async function isPokemonInFavoriteApi(id){
    try {
        const response = await getPokemonInFavoriteApi();
        return includes(response, id);
    } catch (error) {
        console.warn(`Ocurrio un problema validando si ya existe el ID [ ${id} ]: error: `, error)
        throw error;
    }
}

export async function removePokemonInFavoriteApi(id){
    try {
        const favorites = await getPokemonInFavoriteApi();
        const filteredList = pull(favorites, id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(filteredList));
    } catch (error) {
        console.warn(`Ocurrio un problema eliminando el ID [ ${id} ]: error: `, error)
        throw error;
    }
}