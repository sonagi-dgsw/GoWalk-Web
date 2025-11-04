import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
`;

export const List = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: black;
`;

export const ItemLogo = styled.div<{$isActive: boolean}>`
    width: 25px;

    svg {
        height: 100%;
        width: 100%;

        path {
            fill: ${props => props.$isActive ? "#00a6ff" : "#ccc"};
        }
    }
`;

export const ItemTitle = styled.p`
    font-size: 14px;
`;