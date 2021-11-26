import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
    bgcolor: string;
}

export const Container = styled(Link)<Props>`
    width: inherit;
    height: 180px;
    position: relative;
    text-decoration: none;
    display: flex;
    background: ${props => props.bgcolor};
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 40px;
    transition: all 0.4s ease-in-out; 

    @media(max-width: 800px){
        height: auto;
        flex-direction: column-reverse;
        padding: 40px 0;
        gap: 30px;
    }

    @media(max-width: 600px){
        padding: 30px 0 20px 0;
    }

    @media(max-width: 475px){
        justify-content: space-evenly;
    }

    .bgPokeball, .avatar {
        transition: all 0.4s ease-in-out;
    }
    
    &:hover {
        .bgPokeball {
            transform: rotate(180deg);
            transition: all 0.4s ease-in-out;
        }
        .avatar {
            transform: scale(1.2);
            transition: all 0.4s ease-in-out;
            filter: brightness(1.2);
        }
    }
`

export const SectionInfo = styled.div`
    color: white;
    text-align: center;
`

export const NamePokemon = styled.h3`
    color: white;

    @media(max-width: 600px){
        font-size: calc(1rem + .6vw);  
    }
`

export const Types = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
    gap: 10px;

    @media(max-width: 990px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media(max-width: 475px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 400px) {
        flex-direction: column;
    }
`

export const SectionAvatar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Background = styled.img`
    position: absolute;
    height: 150px;
    width: 150px;
    opacity: 0.1;

    @media(max-width: 800px){
        height: 180px;
        width: 180px;   
    }
    
    @media(max-width: 600px){
        height: 130px;
        width: 130px;   
    }
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    z-index: 1;
    
    @media(max-width: 600px){
        height: 100px;
        width: 100px;   
    }
`