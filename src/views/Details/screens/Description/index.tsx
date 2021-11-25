import React, { useState, useEffect, SVGProps } from 'react';
import api from "services/api";

import {
  Container
} from './styles';

type Props = {
  pokemon?: string;
}

export function Description({ pokemon }: Props){
  const [ description, setDescription ] = useState();

  return (
    <Container>
        <h1>Description = {pokemon}</h1>
    </Container>
  );
}