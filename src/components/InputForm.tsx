import * as S from "../pages/signin/styles/styles.ts";
const InputForm = ({sort}:{sort:String}) => {
    return (
        <>
        <S.InputFormtitle>{sort}</S.InputFormtitle>
        <S.InputFormtext>{sort}를 입력해주세요</S.InputFormtext>
        <S.Line></S.Line>
        </>
    )
}


export default InputForm;