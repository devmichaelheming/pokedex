import iconPokeball from "assets/bgPokeball.png";
import React from "react";

import { Container, IconPokeball } from "./styles";

export default function Background() {
  return (
    <Container>
      <IconPokeball src={iconPokeball} />
    </Container>
  );
}
