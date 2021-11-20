import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    padding: 50px 50px 0 50px;

    @media(max-width: 1180px) {
        padding: 40px 40px 0 40px;
        gap: 50px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 500px) {
        padding: 30px 30px 0 30px;
        gap: 40px;
        grid-template-columns: repeat(1, 1fr);
    }
`;