import axios from 'axios';

const API_URL = 'https://api-colombia.com/api/v1';
const API_URL_POKEMON = 'https://pokeapi.co/api/v2/ability/';


export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`);
    return response.data;
}

export const getRegionesColombia = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response;
}

/* Buscar una region por id */
export const getRegionColombia = async id => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
    return response;
}

export const getPokemon = async () => {
    const response = await axios.get(`${API_URL_POKEMON}`);
    return response.data;
}