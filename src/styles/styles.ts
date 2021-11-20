import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const IconPokebola = styled.img`
    width: 300px;
    height: 300px;
    flex-shrink: 0;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }
`;