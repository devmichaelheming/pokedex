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
        gap: 20px;
    }
    @media(max-width: 600px){
        height: auto;
        padding: 20px;
        gap: 0;
        flex-direction: row;
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
`

export const NamePokemon = styled.h3`
    color: white;
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
        height: 150px;
        width: 150px;   
    }
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    z-index: 1;
`