import styled from 'styled-components';
import ball from "../../assets/ball.svg";
import { Link } from 'react-router-dom';
interface Props {
    bgColor: string;
}

export const Container = styled(Link)<Props>`
    width: inherit;
    height: 180px;
    position: relative;
    text-decoration: none;
    display: flex;
    background: ${props => props.bgColor};
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 40px;
    transition: all 0.4s ease-in-out; 

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
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    z-index: 1;
`