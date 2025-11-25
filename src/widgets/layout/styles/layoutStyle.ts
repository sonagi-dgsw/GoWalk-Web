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
    position: relative;
    grid-template-rows: 1fr ${props => props.$showNavigation ? "80px" : 0};
    box-shadow: 2px 4px 7px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 2px 4px 7px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 2px 4px 7px 0px rgba(0,0,0,0.1);
`

export const Content = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;