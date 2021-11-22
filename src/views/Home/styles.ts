import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    padding: 106px 50px 0 50px;

    @media(max-width: 1180px) {
        padding: 106px 40px 0 40px;
        gap: 50px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 500px) {
        padding: 106px 30px 0 30px;
        gap: 40px;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Loading = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Pokeball = styled.img`
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    -webkit-animation: rotating 1s linear infinite;
    -moz-animation: rotating 1s linear infinite;
    -ms-animation: rotating 1s linear infinite;
    -o-animation: rotating 1s linear infinite;
    animation: rotating 1s linear infinite;

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
    }
`;