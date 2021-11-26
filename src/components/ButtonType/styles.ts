import styled from "styled-components";

interface Props {
    bgcolor: string;
}

export const Container = styled.div<Props>`
    background: ${props => props.bgcolor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 15px;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s ease-out;
    
    @media(max-width: 600px){
        font-size: 12px;
        padding: 4px 10px;
    }

    > svg {
        path {
            fill: #fff;
        }
        margin-right: 5px;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
    }
    
    &:hover {
        transition: 0.2s ease-out;
        filter: brightness(1.1);
    }
`;