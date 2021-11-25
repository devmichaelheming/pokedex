import React, { SVGProps } from 'react';

import {
  Container
} from './styles';

type Props = {
  pokemon?: string;
}

export function Evolution({ pokemon }: Props){
  return (
    <Container>
        <h1>evolution - {pokemon}</h1>
    </Container>
  );
}