import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice";
import { pokemonSlice } from '../features/pokemon';
import { todosApi } from './api/todosApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})