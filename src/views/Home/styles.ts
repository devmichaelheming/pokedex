import styled from "styled-components";
import { SearchAlt } from "styles/icons";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 106px 40px 0 40px;
  @media (max-width: 1055px) {
    padding: 86px 20px 0 20px;
  }
  @media (max-width: 600px) {
    padding: 86px 20px 0 20px;
  }
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 2;

  > nav {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
  flex-shrink: 0;
  margin-right: 10px;
`;

export const GroupInput = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #e7edf1;
  border-radius: 4px;
  padding: 5px 10px;

  &:focus {
    outline: 0;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const IconSearch = styled(SearchAlt)`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  cursor: pointer;
  padding-right: 10px;
  fill: #b9bdc1;
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
  gap: 50px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1055px) {
    gap: 30px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

export const MorePokemons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  @media (max-width: 800px) {
    margin: 25px 0;
  }

  button {
    width: 60%;
    height: 70px;
    background: purple;
    border-radius: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    @media (max-width: 990px) {
      width: 100%;
    }
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
