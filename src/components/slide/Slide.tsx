import * as S from "./styles/slideStyles.ts"
import React from "react";

interface SlideProps {
    value: number;
    setFn:  React.Dispatch<React.SetStateAction<number>>;
    label: string;
    messages: string[];
}

const Slide = (props: SlideProps) => {
    const onChange = (e: any) => {
        props.setFn(e.target.value);
    }
    return <S.Wrapper>
        <S.Label>{props.label}</S.Label>
        <S.SlideBar value={props.value} onChange={onChange} />
        <S.TextList>
            {props.messages.map((message, idx) => (
                <S.Text key={idx}>
                    {message}
                </S.Text>
            ))}
        </S.TextList>
    </S.Wrapper>
}

export default Slide;