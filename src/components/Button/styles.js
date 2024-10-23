import styled from "styled-components";

const ButtonComponent = styled.button`

    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px;

    &: hover {
        background-color: #FAFAFA60;
        cursor: pointer;
    }

`;

export default ButtonComponent;