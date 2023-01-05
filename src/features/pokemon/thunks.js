import { pokemonApi } from "../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page}`);
    /* const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`);
    const json = await resp.json(); */
    //console.log(resp)
    dispatch(setPokemons({
      pokemons:data.results,
      page:page+1
    }))
  }
}