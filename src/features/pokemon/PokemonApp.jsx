import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getPokemons } from "./";

export const PokemonApp = () => {
const dispatch = useDispatch();
  


  useEffect(() => {  
    dispatch(getPokemons())
  },[])

  return (
    <div>PokemonApp2</div>
  )
}
