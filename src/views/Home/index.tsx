import React, { useState, useEffect } from 'react'

import api from "../../services/api";

import {
    Container
} from './styles';

interface PropsPokemon {
  name: string;
}

export default function Home(){
    const [pokemon, setPokemon] = useState<PropsPokemon[]>([]);

    useEffect(() => {
        api.get('/pokemon?limit=200')
        .then((response) => {
            setPokemon(response.data.results)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

  return (
    <Container>
      home
    </Container>
  );
}