import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLongRight } from "styles/icons";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`;

export const SectionEvolutions = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
    @media(max-width: 500px){
        gap: 20px;
    }
`;

export const Pokemon = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    gap: 20px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-out;

    h3 {
        font-weight: bold;
        opacity: 0.6;
        transition: all 0.3s ease-out;
    }

    &:hover {
        transform: translateY(-15px);
        transition: all 0.3s ease-out;
        color: black;

        > h3 {
            color: black;
            opacity: 1;
            transition: all 0.3s ease-out;
        }
    }
`;

export const AvatarPokemon = styled.img`
    width: 150px;
    height: 150px;
    flex-basis: 0;
    z-index: 2;
    @media(max-width: 500px){
        width: 100px;
        height: 100px;
    }
`;

export const ArrowRight = styled(ArrowLongRight)`
    width: 70px;
    height: 70px;
    color: black;
    opacity: 0.2;
    @media(max-width: 500px){
        width: 30px;
        height: 30px;
    }
`;

export const Background = styled.img`
  width: 170px;
  height: 170px;
  position: absolute;
  opacity: 0.1;
  flex-shrink: 0;
    @media(max-width: 500px){
        width: 120px;
        height: 120px;
    }
`;