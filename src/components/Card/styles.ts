import styled from 'styled-components';

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
`

export const NamePokemon = styled.h3`
    color: white;
`

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
`