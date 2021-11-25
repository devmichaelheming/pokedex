import styled from "styled-components";
import { SearchAlt } from "styles/icons";

export const ContainerGeneral = styled.div`
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    z-index: 2;

    a {
        text-decoration: none;
    }

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
`

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
`

export const IconSearch = styled(SearchAlt)`
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    cursor: pointer;
    padding-right: 10px;
    fill: #b9bdc1;
`