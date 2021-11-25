import React, { SVGProps } from 'react';

import {
  Container
} from './styles';

type Props = {
  pokemon?: string;
}

export function Stats({ pokemon }: Props){
  return (
    <Container>
      <h1>stats - {pokemon}</h1>
    </Container>
  );
}