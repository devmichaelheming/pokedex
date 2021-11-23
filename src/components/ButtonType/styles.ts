import styled from 'styled-components';

interface Props {
    bgColor: string;
}

export const Container = styled.div<Props>`
    background: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 15px;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s ease-out;

    > img {
        margin-right: 5px;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        color: #fff!important;
        fill: #fff!important;
    }
    
    &:hover {
        transition: 0.2s ease-out;
        filter: brightness(1.1);
    }
`;