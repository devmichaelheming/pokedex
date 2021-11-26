import React from "react";
import iconPokeball from "assets/bgPokeball.png";

import { Container, IconPokeball } from "./styles";

export function Background() {
  return (
    <Container>
      <IconPokeball src={iconPokeball} />
    </Container>
  );
}
