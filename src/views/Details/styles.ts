import { ArrowIosBack } from "@styled-icons/evaicons-solid/ArrowIosBack";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  bgcolor: string;
}

interface typeProps {
  bgcolor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const GoBack = styled(Link)`
  cursor: pointer;
  position: relative;
  z-index: 4;
`;

export const IconBack = styled(ArrowIosBack)`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 250px;
  left: 30px;
  fill: #fff;
  z-index: 1;
  transition: all 0.3s ease-out;

  @media(max-width: 600px) {
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
  }

  &:hover {
    opacity: 0.6;
    transition: all 0.3s ease-out;
  }
`;

export const Header = styled.div<Props>`
  width: 100%;
  height: auto;
  padding-bottom: 100px;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media(max-width: 600px) {
    padding-top: 80px;
    padding-bottom: 120px;
  }

  @media(max-width: 500px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;

  @media(max-width: 1180px) {
    flex-direction: column;
    gap: 80px;
  }

  @media(max-width: 800px) {
    gap: 40px;
  }

  @media(max-width: 600px) {
    flex-direction: row;
    gap: 60px;
  }
`;

export const SectionAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .background,
  .avatar {
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    .background {
      transform: rotate(240deg);
      transition: all 0.4s ease-in-out;
    }
    .avatar {
      transform: scale(1.2);
      transition: all 0.4s ease-in-out;
      filter: brightness(1.2);
    }
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    color: white;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 50px;
    padding-bottom: 10px;

    @media(max-width: 800px) {
      font-size: 40px;
    }
    
    @media(max-width: 500px) {
      font-size: 36px;
      line-height: 36px;
    }
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TypeItem = styled.div<typeProps>`
  font-size: 20px;
  color: white;
  padding: 4px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.bgcolor};
  transition: 0.2s ease-out;

  &:hover {
    transition: 0.2s ease-out;
    filter: brightness(1.1);
  }
`;

export const Title = styled.span`
  color: #fff;
  font-size: min(18vw);
  line-height: min(18vw);
  z-index: 3;
  font-family: "Roboto";
  font-weight: 200;
  opacity: 0.2;

  @media(max-width: 1180px) {
    font-size: min(24vw);
  }

  @media(max-width: 600px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  z-index: 3;
  width: 300px;
  height: 300px;
  flex-shrink: 0;

  @media(max-width: 800px) {
    width: 150px;
    height: 150px;
  }

  @media(max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;

export const Background = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  opacity: 0.2;
  flex-shrink: 0;
  transform: rotate(60deg);

  @media(max-width: 800px) {
    width: 200px;
    height: 200px;
  }

  @media(max-width: 500px) {
    width: 150px;
    height: 150px;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fff;
`;

export const SectionInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: -45px;

  @media(max-width: 800px) {
    justify-content: space-around;
  }
`;

export const SectionButton = styled.button<{active: boolean}>`
  z-index: 3;
  background: transparent;
  border: none;

  h3 {
    color: #fff;
    opacity: ${props => (props.active ? 1 : 0.4)};

    &:hover {
      transition: opacity 0.1s ease-out;
    }
  }
`
export const ContentInfo = styled.div`
  width: 100%;
  padding: 60px 40px;
  display: flex;
  align-items: center;
  
  @media(max-width: 600px) {
    padding: 30px 10px;
  }
`