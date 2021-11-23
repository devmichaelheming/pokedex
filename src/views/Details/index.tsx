import React, { useState, useEffect, SVGProps } from 'react';
import { useParams } from "react-router-dom";

import api from "../../services/api";

import { ButtonType } from "../../components/ButtonType";

import { theme } from '../../styles/theme';
import iconType from "../../assets/types";
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
  bgColor: string;
  icon: SVGProps<SVGSVGElement>;
}

interface pokemonProps {
  id: string;
  name: string | undefined;
  bgColor: string;
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

      let bgColor = types[0].type.name;
      
      // Caso tenha mais do que um tipo, irá verificar se o primeiro tipo é igual a "normal",
      // se for igual, será pego o segundo tipo para ser utilizado como background.
      if(types.length > 1 && types[0].type.name == "normal"){
        bgColor = types[1].type.name
      }

      setPokemon({
        id,
        name: name,
        bgColor: theme.colors.backgroundType[bgColor],
        avatar: sprites.other['official-artwork'].front_default,
        types: types.map((pokemonType: any) =>{
          let typeName = pokemonType.type.name;
          return {
            name: pokemonType.type.name,
            icon: iconType[typeName],
            bgColor: theme.colors.type[typeName],
          }
        }),
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
      <Header bgColor={pokemon.bgColor}>
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
                  pokemon.types.map(type => (
                    <ButtonType
                      name={type.name}
                      icon={type.icon}
                      bgColor={type.bgColor}
                    />
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