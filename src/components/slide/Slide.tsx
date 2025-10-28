import * as S from "./styles/slideStyles.ts"

interface SlideProps {
    label: string;
    messages: string[];
}

const Slide = (props: SlideProps) => {
    return <S.Wrapper>
        <S.Label>{props.label}</S.Label>
        <S.SlideBar />
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