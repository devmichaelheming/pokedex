import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Pokemons = styled.div`
    width: 100%;
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
`

export const MorePokemons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;

    button {
        width: 40%;
        height: 70px;
        background: purple;
        border-radius: 10px;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
`;

export const Loading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Pokeball = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
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