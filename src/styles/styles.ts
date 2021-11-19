import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .redirect {
        margin-top: 50px;
        cursor: pointer;
        text-decoration: none;
        color: black;
        font-size: 18px;
    }
`;

export const IconPokebola = styled.img`
    width: 400px;
    height: 400px;
    flex-shrink: 0;

    /* @keyframes upDown {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    } */
`;