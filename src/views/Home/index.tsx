import React, { useState, useEffect } from 'react'

import api from "../../services/api";

import {
    Container,
    Body,
    Loading,
    Pokeball,
} from './styles';

import Header from "../../components/Header";
import Background from "../../components/Background";
import Card from "../../components/Card";

import pokeball from "../../assets/pokeball.png";
interface PropsPokemon {
  name: string;
}

export default function Home(){
	const [pokemons, setPokemons] = useState<PropsPokemon[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		api.get('/pokemon?limit=48')
		.then((response) => {
			setPokemons(response.data.results)
			setLoading(false);
		})
		.catch((err) => {
			console.log(err);
		})
	}, [])

  return (
    <Container>
      <Header />
      {
        loading
        ?
        <Loading>
          <Pokeball src={pokeball} />
        </Loading>
        :
        <Body>
          {
            pokemons.map((pokemon, id) => (
              <Card key={id} name={pokemon.name}/>
            ))
          }
        </Body>
      }
      <Background />
    </Container>
  );
}