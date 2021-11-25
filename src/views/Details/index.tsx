import React, { useState, useEffect, SVGProps, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";

import iconTypes from "assets/types";
import theme from "styles/theme";

import { ButtonType } from "components/ButtonType";
import { Description } from "./screens/Description";
import { Stats } from "./screens/Stats";
import { Evolution } from "./screens/Evolution";

import darkPokeball from "assets/darkPokeball.svg";

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
  Avatar,
  Background,
  Body,
  SectionInfo,
  SectionButton,
  ContentInfo,
} from "./styles";

export interface pokemonTypeProps {
  name: string;
  bgColor: string;
  icon: SVGProps<SVGSVGElement>;
}

export interface pokemonProps {
  id: string;
  name: string | undefined;
  bgColor: string;
  avatar?: string;
  height: string;
  weight: string;
  stats?: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
  };
  types: pokemonTypeProps[];
}

export function Details() {
  const [pokemon, setPokemon] = useState({} as pokemonProps);
  const [sectionInfo, setSectionInfo] = useState('Description');
  const { name } = useParams();

  useEffect(() => {
    api.get(`/pokemon/${name}`)
      .then((response) => {
        const {
          id,
          types,
          sprites,
          height,
          weight,
          stats,
        } = response.data;

        let bgColor: keyof typeof iconTypes = types[0].type.name;

        // Caso tenha mais do que um tipo, irá verificar se o primeiro tipo é igual a "normal",
        // se for igual, será pego o segundo tipo para ser utilizado como background.
        if (types.length > 1 && types[0].type.name === "normal") {
          bgColor = types[1].type.name;
        }

        setPokemon({
          id,
          name,
          bgColor: theme.colors.backgroundType[bgColor],
          weight: `${weight / 10} kg`,
          height: `${height / 10} m`,
          avatar: sprites.other["official-artwork"].front_default,
          stats: {
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefense: stats[4].base_stat,
            speed: stats[5].base_stat,
          },
          types: types.map((pokemonType: any) => {
            const typeName = pokemonType.type.name as keyof typeof iconTypes;
            return {
              name: pokemonType.type.name,
              icon: iconTypes[typeName],
              bgColor: theme.colors.type[typeName],
            };
          }),
        });

      })
  }, [name]);

  const handleSections = useMemo(() => {
      switch (sectionInfo) {
        case "Description":
          return <Description name={name}/>
        case 'Stats':
          return <Stats name={name}/>
        case "Evolution":
          return <Evolution name={name}/>
        default:
          return <></>;
      }
    }, [sectionInfo],
  )

  return (
    <Container>
      <GoBack to="/">
        <IconBack />
      </GoBack>
      <Header bgcolor={pokemon.bgColor}>
        <Title>{pokemon.name}</Title>
        <HeaderInfo>
          <SectionAvatar>
            <Avatar className="avatar" src={pokemon.avatar} />
            <Background className="background" src={darkPokeball} />
          </SectionAvatar>
          <SectionTitle>
            <span>{pokemon.name}</span>
            <Types>
              {pokemon.types ? (
                pokemon.types.map((type, id) => (
                  <ButtonType
                    key={id}
                    name={type.name}
                    icon={type.icon}
                    bgColor={type.bgColor}
                  />
                ))
              ) : (
                <></>
              )}
            </Types>
          </SectionTitle>
        </HeaderInfo>
      </Header>
      <Body>
        <SectionInfo>
          {
            ['Description', 'Stats', 'Evolution'].map(name => (
              <SectionButton
                key={name}
                type="button"
                onClick={()=>{setSectionInfo(name)}}
                active={name === sectionInfo}
              >
                <h3>{name}</h3>
              </SectionButton>
            ))
          }
        </SectionInfo>

        <ContentInfo>{handleSections}</ContentInfo>
      </Body>
    </Container>
  );
}
