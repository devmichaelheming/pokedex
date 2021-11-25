import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Title = styled.h3<{ color: string }>`
    color: ${props => (props.color)};
`;

export const ContentInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
        li {
            line-height: 35px;

            strong {
                padding-right: 10px;
            }

            ul {
                padding-left: 10px;

                li {
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    &:before {
                        content: '';
                        display: block;
                        width: 10px;
                        height: 1px;
                        background: black;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
`;