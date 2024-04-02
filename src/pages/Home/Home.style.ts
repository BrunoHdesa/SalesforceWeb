import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const MainPageTitle = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 60% 40%;
    white-space: pre-line;
    margin-top: 20px;
    margin-bottom: 50px;

    & h1 {
        font-size: clamp(20px, 4vw, 7vw);
        font-weight: 500;
        text-align: center;
        color: ${colors.commom.black};

    }

    & div {
        font-size: clamp(20px, 4vw, 7vw);
        font-weight: 500;
        text-align: center;
        color: ${colors.commom.black};
        
    }

    & p {
        font-size: clamp(10px, 2vw, 3.5vw);
        font-weight: 250;
        text-align: center;
        color: ${colors.commom.black};

    }

    & img {
        width: 30%;
    }
`;