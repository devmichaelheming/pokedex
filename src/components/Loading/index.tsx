import React from "react";

import pokeball from "assets/pokeball.png";

import {
  Container,
  Pokeball
} from "./styles";

export function Loading(){
  return (
    <Container>
        <span>CARREGANDO</span>
        <Pokeball src={pokeball} />
    </Container>
  );
}