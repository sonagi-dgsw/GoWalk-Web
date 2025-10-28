import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr;
    height: 100%;
    position: relative;
`

export const Header = styled.header`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderTitle = styled.h1`
    font-size: 18px;
    font-weight: 500;
`

export const Container = styled.div`
    background-color: #F4F4F4;
    padding: 10px 10px 80px 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
`

export const Card = styled.section`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export  const CardTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const RouteMap = styled.div`
    background-color: #5AAAEF;
    border-radius: 10px;
    width: 100%;
    height: 200px;
`

export const StatTitle = styled.h3`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
`

export const StatValue = styled.h3`
    font-size: 14px;
`

export const InformationMessage = styled.p`
    color: #aaa;
    font-size: 12px;
    line-height: 1.2;
    margin-top: 10px;
`

export const FinishButton = styled.button`
    padding: 15px;
    margin: 0 30px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: #5AAAEF;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    color: white;
    position: absolute;
    width: calc(100% - 60px);
    bottom: 10px;
    box-shadow: 4px 4px 13px 0px rgba(171, 171, 171, 0.74);
    -webkit-box-shadow: 4px 4px 13px 0px rgba(171, 171, 171, 0.74);
    -moz-box-shadow: 4px 4px 13px 0px rgba(171, 171, 171, 0.74);

    &:hover {
        background-color: #51a3ec;
    }
`;