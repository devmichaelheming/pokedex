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

  @media (max-width: 475px) {
    padding: 68px 10px 0 10px;
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

  @media (max-width: 475px) {
    gap: 15px;
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

  @media (max-width: 600px) {
    margin: 20px 0;
  }

  @media (max-width: 475px) {
    margin: 15px 0;
  }

  button {
    width: 45%;
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
    
    @media (max-width: 475px) {
      height: 60px;
    }
  }
`;