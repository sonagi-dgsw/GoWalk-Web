import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div<{$showNavigation: boolean}>`
    width: 375px; // iPhone 12 Size
    height: 812px; // iPhone 12 Size
    border-radius: 30px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    overflow: hidden;
    display: grid;
    grid-template-rows: 30px 1fr ${props => props.$showNavigation ? "80px" : 0};
`

export const Content = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const StatusBar = styled.div`
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-left: 20px;
    display: flex;
    align-items: center;
`
