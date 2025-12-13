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

export const ProgressBar = styled.div`
    margin-top: 10px;
    width: 160px;
    height: 5px;
    background-color: #ccc;
    border-radius: 5px;
    overflow: hidden;
`;

export const progressAnimation = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`;

export const Progress = styled.div`
    width: 0;
    height: 5px;
    background-color: #5AAAEF;
    animation: ${progressAnimation} 1.2s ease-in-out forwards;
`;