import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (id:string) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

        return{
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
        
    } catch (error) {
        return null;
    }
}