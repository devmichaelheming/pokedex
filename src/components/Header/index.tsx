import React, { useState, useCallback } from "react";
import { Navbar, Container } from "react-bootstrap";

import logoPokeball from "assets/pokeball.png";
import {
  ContainerGeneral,
  Logo,
  InputSearch,
  GroupInput,
  IconSearch,
} from "./styles";

type Props = {
  value: string;
  onChange(value: string): void;
};

export function Header({ value, onChange }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <ContainerGeneral>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Logo src={logoPokeball} />
            POKÉDEX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <GroupInput>
              <InputSearch
                type="text"
                placeholder={
                  isFocused ? "" : "Qual Pokémon você está procurando?"
                }
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <IconSearch />
            </GroupInput>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ContainerGeneral>
  );
}
