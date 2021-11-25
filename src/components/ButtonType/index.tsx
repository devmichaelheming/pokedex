import React, { SVGProps } from "react";

import {
  Container
} from "./styles";

type Props = {
    name: string;
    bgColor: string;
    icon: SVGProps<SVGSVGElement>;
}

export function ButtonType({name, bgColor, icon}: Props){
  return (
    <Container bgcolor={bgColor}>
      {icon}
      {name}
    </Container>
  );
}