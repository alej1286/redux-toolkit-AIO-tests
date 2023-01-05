     import { createSlice } from '@reduxjs/toolkit'
     const initialState = {
      page:0,
      pokemons:[],
      isLoading: false,
     }
     export const pokemonSlice = createSlice({
      name: 'pokemon',
      initialState,
      reducers: {
         startLoadingPokemons: (state) => {
          state.isLoading = true;
         },
         setPokemons: (state, action) => {
          /* return {
            ...state,
            isLoading : false,
            page : action.payload.page,
            pokemons : action.payload.pokemons}; */
          state.isLoading = false;
          state.page = action.payload.page;
          state.pokemons = action.payload.pokemons;
          return state;
         },
       },
      })
     export const { startLoadingPokemons,setPokemons } = pokemonSlice.actions
     export default pokemonSlice.reducer