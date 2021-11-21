import styled from 'styled-components';
import ball from "../../assets/ball.svg";
interface Props {
    color: string;
}

export const Container = styled.div<Props>`
    width: inherit;
    height: 180px;
    position: relative;
    display: flex;
    background: ${props => props.color};
    border-radius: 4px;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    
    &:hover {
        > svg {
            transform: translateY(-20px);
            transition: 0.2s ease-in-out;
        }
    }
`

export const NamePokemon = styled.h3`
    color: white;
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