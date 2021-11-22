import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

import {
    ContainerGeneral,
    Logo,
    InputSearch,
    GroupInput,
    IconSearch,
} from "./styles";

import logoPokeball from "../../assets/pokeball.png";

export default function Header() {
    function searchPokemon(e: string){
        console.log(e);
    }
    
    return (
        <ContainerGeneral>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Logo src={logoPokeball}/>
                        POKÉDEX
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                        <GroupInput>
                            <InputSearch type="search" onChange={e => searchPokemon(e.target.value)} placeholder="Pesquise aqui o seu pokemon..."/>
                            <IconSearch />
                        </GroupInput>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </ContainerGeneral>
    )
}
