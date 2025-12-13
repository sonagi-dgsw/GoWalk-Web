import styled from "styled-components";

export const Wrapper = styled.div`
    
`

export const Label = styled.label`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500;
`

export const SlideBar = styled.input.attrs({
    type: 'range',
    min: 1,
    max: 5,
    step: 1,
})`;
    margin-top: 20px;
    width: 100%;
    height: 8px;
    &::-webkit-slider-container {
        border-radius: 20px;
        background-color: #ddd;
    }

    &::-webkit-slider-thumb {
        cursor: ew-resize;
    }
`

export const TextList = styled.ul`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
`

export const Text = styled.li`
    color: #aaa;
    font-size: 14px;
`