import React, { useState, useEffect } from 'react'

import api from "../../services/api";

import {
    Container,
    Body
} from './styles';

import Header from "../../components/Header";
import Background from "../../components/Background";
import Card from "../../components/Card";

interface PropsPokemon {
  name: string;
}

export default function Home(){
    const [pokemons, setPokemons] = useState<PropsPokemon[]>([]);

    useEffect(() => {
        api.get('/pokemon?limit=100')
        .then((response) => {
          setPokemons(response.data.results)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

  return (
    <Container>
      <Header />
      <Body>
        {
          pokemons.map((pokemon, id) => (
            <Card key={id} name={pokemon.name}/>
          ))
        }
      </Body>
      <Background />
    </Container>
  );
}