import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(nextPageUrl) {
  try {
    const baseUrl = `/pokemon?limit=${20}$offset=${0}`;
    const url = `${API_HOST}/${baseUrl}`;
    return await fetch(nextPageUrl || url).then((res) => res.json());
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsByUrlApi(url) {
  try {
    return await fetch(url).then((res) => res.json());
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsByIdApi(id) {
  try {
    const baseUrl = `/pokemon/${id}`;
    const url = `${API_HOST}/${baseUrl}`;
    return await fetch(url).then((res) => res.json());
  } catch (error) {
    throw error;
  }
}
