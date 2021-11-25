import styled, { css } from 'styled-components';

interface Props {
    percentage: number;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.h3<{ color: string }>`
    text-transform: capitalize;
    color: ${props => (props.color)};
`

export const SectionStats = styled.div`
    width: 60%;
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    @media(max-width: 1180px){
        width: 90%;
    }
    @media(max-width: 550px){
        width: 100%;
    }

    span {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
`
const StatCSS = css`
    background: green;
    height: 10px;
    border-radius: 10px;
`

export const Percentage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-top: 10px;

    .number {
        position: absolute;
        right: -80px;
        @media(max-width: 1180px){
            position: relative;
            right: 0;
        }
    }
`

export const StatHp = styled.div<{ percentageHp: number }>`
    width: ${({ percentageHp }) => (percentageHp > 100 ? 100 : percentageHp)}%;
    ${StatCSS}
`

export const StatAttack = styled.div<{ percentageAtk: number }>`
    width: ${({ percentageAtk }) => (percentageAtk > 100 ? 100 : percentageAtk)}%;
    ${StatCSS}
`

export const StatDefense = styled.div<{ percentageDf: number }>`
    width: ${({ percentageDf }) => (percentageDf > 100 ? 100 : percentageDf)}%;
    ${StatCSS}
`

export const StatSpecialAttack = styled.div<{ percentageSatk: number }>`
    width: ${({ percentageSatk }) => (percentageSatk > 100 ? 100 : percentageSatk)}%;
    ${StatCSS}
`

export const StatSpecialDefense = styled.div<{ percentageSdf: number }>`
    width: ${({ percentageSdf }) => (percentageSdf > 100 ? 100 : percentageSdf)}%;
    ${StatCSS}
`

export const StatSpeed = styled.div<{ percentageSp: number }>`
    width: ${({ percentageSp }) => (percentageSp > 100 ? 100 : percentageSp)}%;
    ${StatCSS}
`