import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
`;

export const StatusCode = styled.h1`
    font-size: 56px;
    font-weight: 800;
    color: #5AAEEF;
`;

export const Title = styled.h1`
    font-size: 20px;
`;

export const Button = styled.button`
    border: none;
    padding: 10px 15px;
    color: white;
    background-color: #5AAEEF;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
`;
