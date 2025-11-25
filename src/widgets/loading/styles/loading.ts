import styled, {keyframes, css} from "styled-components";

export const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
  75% {
    opacity: 1;
  }
    100% {
        opacity: 0;
    }
`;

export const fadeOutAnimation = (duration = "2s") => css`
  animation: ${fadeOut} ${duration} ease-in-out forwards;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    position: absolute;
    background-color: white;
    z-index: 2;
    ${fadeOutAnimation("2s")}
`;

export const Logo = styled.img`
    height: auto;
    width: 200px;
`;

export const Title = styled.h3`
`;