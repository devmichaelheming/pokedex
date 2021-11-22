import styled from 'styled-components';
import { Link } from "react-router-dom";
import { CatchingPokemon } from "@styled-icons/material/CatchingPokemon";
import { ArrowIosBack } from "@styled-icons/evaicons-solid/ArrowIosBack";

interface Props {
    color: string;
}

interface typeProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`;

export const GoBack = styled(Link)`
    cursor: pointer;
    position: relative;
`

export const IconBack = styled(ArrowIosBack)`
    width: 80px;
    height: 80px;
    position: absolute;
    top: 250px;
    left: 30px;
    fill: #fff;
    z-index: 1;
    transition: all 0.3s ease-out;

    &:hover {
        opacity: 0.6;
        transition: all 0.3s ease-out;
    }
`

export const Header = styled.div<Props>`
    width: 100%;
    height: auto;
    padding-bottom: 100px;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;
`

export const SectionAvatar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .background, .avatar {
        transition: all 0.4s ease-in-out;
    }

    &:hover {
        .background {
            transform: rotate(240deg);
            transition: all 0.4s ease-in-out;
        }
        .avatar {
            transform: scale(1.2);
            transition: all 0.4s ease-in-out;
            filter: brightness(1.2);
        }
    }
`

export const SectionTitle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
    span {
        color: white;
        font-family: "Roboto";
        font-weight: bold;
        font-size: 50px;
        padding-bottom: 20px;
    }
`

export const Types = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TypeItem = styled.div<typeProps>`
    font-size: 20px;
    color: white;
    padding: 4px 20px;
    border-radius: 10px;
    background-color: ${props => props.color};
    filter: brightness(1.2);
`

export const Title = styled.span`
    color: #fff;
    font-size: 400px;
    line-height: 400px;
    z-index: 3;
    font-family: "Roboto";
    font-weight: 200;
    opacity: 0.1;
`;

export const Avatar = styled.img`
    z-index: 3;
    width: 300px;
    height: 300px;
`;

export const Background = styled.img`
    width: 400px;
    height: 400px;
    position: absolute;
    opacity: 0.2;
    transform: rotate(60deg);
    /* animation: rotating 3s linear infinite;

    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    } */
`;

export const Body = styled.div`
    width: 100%;
    height: 300px;
    background-color: #fff;
`;