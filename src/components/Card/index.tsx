import React, { useState, useEffect } from 'react';

import api from "../../services/api";

import { theme } from '../../styles/theme';

import {
  Container,
  SectionInfo,
  NamePokemon,
  Types,
  TypePokemon,
  SectionAvatar,
  Background,
  Avatar,
} from './styles';

import darkPokeball from "../../assets/darkPokeball.svg";

type Props = {
    name: string;
}

interface pokemonTypeProps {
  name: string;
  backgroundColor: string;
}

interface pokemonProps {
  id: string;
  name: string;
  backgroundColor: string;
  avatar: string;
  types: pokemonTypeProps[];
}

export default function Card({ name }: Props){
  const [pokemon, setPokemon] = useState({} as pokemonProps);
  
  useEffect(() => {
    api.get(`/pokemon/${name}`)
    .then((response) => {
      const { id, types, sprites } = response.data;

      let backgroundColor = types[0].type.name;
      
      // Caso tenha mais do que um tipo, irá verificar se o primeiro tipo é igual a "normal",
      // se for igual, será pego o segundo tipo para ser utilizado como background.
      if(types.length > 1 && types[0].type.name == "normal"){
        backgroundColor = types[1].type.name
      }

      setPokemon({
        id,
        name: name,
        backgroundColor: theme.colors.backgroundType[backgroundColor],
        avatar: sprites.other['official-artwork'].front_default,
        types: types.map((pokemonType: any) =>{
          let typeName = pokemonType.type.name;

          return {
            name: pokemonType.type.name,
            backgroundColor: theme.colors.type[typeName],
          }
        }),
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <Container to={`details/${name}`} color={pokemon.backgroundColor}>
      <SectionInfo>
        <NamePokemon>{pokemon.name}</NamePokemon>
        <Types>
          { pokemon.types
            ?
              pokemon.types.map((type, id) => (
                <TypePokemon key={id} color={type.backgroundColor}>
                  {type.name}
                </TypePokemon>
              ))
            :
              <></>
          }
        </Types>
      </SectionInfo>
      <SectionAvatar>
        <Avatar className="avatar" src={pokemon.avatar}/>
        <Background className="bgPokeball" src={darkPokeball}/>
      </SectionAvatar>
    </Container>
  );
}