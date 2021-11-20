import React from 'react'

import { Container, IconPokeball } from "./styles";
import iconPokeball from "../../assets/pokebola.png";

export default function Background() {
    return (
        <Container>
            <IconPokeball src={iconPokeball}/>
        </Container>
    )
}
