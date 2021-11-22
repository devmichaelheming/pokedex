import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import api from "../../services/api";

import { theme } from '../../styles/theme';

import {
  Container,
  GoBack,
  IconBack,
  Header,
  Title,
  HeaderInfo,
  SectionAvatar,
  SectionTitle,
  Types,
  TypeItem,
  Avatar,
  Background,
  Body,
} from './styles';

import darkPokeball from "../../assets/darkPokeball.svg";

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

export default function Details(){
  const [pokemon, setPokemon] = useState({} as pokemonProps);
  let params = useParams();
  let name = params.name;
  
  useEffect(() => {
    api.get(`/pokemon/${name}`)
    .then((response) => {
      const { id, types, sprites, stats } = response.data;

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
        // stats: stats.map((stat: any) =>{
        //   return {
        //     name: stat.stat,
        //   }
        // }),
      })
    })
    .catch((err) => {
        console.log(err);
    })
  }, [])

  return (
    <Container>
      <GoBack to="/">
        <IconBack />
      </GoBack>
      <Header color={pokemon.backgroundColor}>
        <Title>{pokemon.name}</Title>
        <HeaderInfo>
          <SectionAvatar>
            <Avatar className="avatar" src={pokemon.avatar}/>
            <Background className="background" src={darkPokeball}/>
          </SectionAvatar>
          <SectionTitle>
            <span>{pokemon.name}</span>
            <Types>
              { pokemon.types
                ?
                  pokemon.types.map((type, id) => (
                    <TypeItem key={id} color={type.backgroundColor}>
                      {type.name}
                    </TypeItem>
                  ))
                :
                  <></>
              }
            </Types>
          </SectionTitle>
        </HeaderInfo>
      </Header>
      <Body>
      </Body>
    </Container>
  );
}