import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Title = styled.h3<{ color: string }>`
    color: ${props => (props.color)};
    font-weight: bold;
    @media(max-width: 600px) {
        font-size: 3.5vw;
    }
`;

export const ContentInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    @media(max-width: 800px) {
        justify-content: space-around;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
        li {
            line-height: 35px;
            
            @media(max-width: 600px) {
                font-size: 3.5vw;
            }
            
            strong {
                padding-right: 10px;
            }
        }
    }
`;