import React, { useState, useEffect } from "react";
import api from "services/api";

import {
  Container,
  Title,
  ContentInfo
} from "./styles";

import iconTypes from "assets/types";
import theme from "styles/theme";

import { pokemonProps } from "../../index";

interface Props {
  name?: string;
}

interface SpecieProps {
  capture_rate: string;
  base_happiness: string;
  growth_rate: string;
}

export function Description({ name }: Props){
  const [description, setDescription] = useState({} as pokemonProps);
  const [pokemonSpecie, setPokemonSpecie] = useState({} as SpecieProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`)
      .then((response) => {

        const {
          id,
          types,
          sprites,
          height,
          weight,
        } = response.data;

        let bgColor: keyof typeof iconTypes = types[0].type.name;

        if (types.length > 1 && types[0].type.name === "normal") {
          bgColor = types[1].type.name;
        }

        setDescription({
          id,
          name,
          bgColor: theme.colors.type[bgColor],
          weight: `${weight / 10} kg`,
          height: `${height / 10} m`,
          avatar: sprites.other["official-artwork"].front_default,
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

  useEffect(() => {
    if (description.name) {
      api.get(`/pokemon-species/${description.name}`).then(response => {
        const { capture_rate, base_happiness, growth_rate } = response.data;

        setPokemonSpecie({
          capture_rate,
          base_happiness,
          growth_rate: growth_rate.name.replace("-", " "),
        });
      });
    }
  }, [description]);

  return (
    <Container>
      <ContentInfo>
        <ul>
          <Title color={description.bgColor}>Pokemon description</Title>

          <li><strong>Specie:</strong> {description.name}</li>
          <li><strong>Height:</strong> {description.height}</li>
          <li><strong>Weight:</strong> {description.weight}</li>
          <li><strong>{description?.types?.length > 1 ? "Types:" : "Type:"}</strong>
            {description.types ? (
              description.types.map((type, id) => (
                <span key={id}> {id !== 0 ? "and" : ""} {type.name}</span>
              ))
            ) : (
              <></>
            )}
          </li>
        </ul>
        <ul>
          <Title color={description.bgColor}>Training</Title>

          <li>
            <strong>Capture rate:</strong>
            {pokemonSpecie.capture_rate}
          </li>
          <li>
            <strong>Base happiness:</strong>
            {pokemonSpecie.base_happiness}
          </li>
          <li>
            <strong>Growth rate:</strong>
            {pokemonSpecie.growth_rate}
          </li>
        </ul>
      </ContentInfo>
    </Container>
  );
}