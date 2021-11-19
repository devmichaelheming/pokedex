import React from 'react'
import { Link } from "react-router-dom";

import {
  Container,
  IconPokebola,
} from "../styles/styles";

import iconPokebola from "../assets/pokebola.png";

function App() {
  return (
    <Container>
      <IconPokebola src={iconPokebola} />
      <Link className="redirect" to="/home">
        <span>Acessar pokedéx</span>
      </Link>
    </Container>
  )
}

export default App
