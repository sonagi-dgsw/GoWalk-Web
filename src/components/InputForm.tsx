import * as S from "../pages/signin/styles/styles.ts";
import { useState } from "react";
const InputForm = ({sort}:{sort:String}) => {
    const [value, Setvalue] = useState<string>("");
    const onChange=(e:any)=>{
        Setvalue(e.target.value)
    }

    const [focus, setFocus] = useState<boolean>(false);
    const onFocus = () => {
            setFocus(true);
    }
    const onBlur = () => {
            setFocus(false);
    }
    return (
        <>
        <S.InputFormtitle style={focus ? { color:"#5aaaef" } : {color:"#888888"}}>{sort}</S.InputFormtitle>
        <S.InputFormtext placeholder={`${sort}를 입력해주세요`} value={value}  onChange={onChange} onFocus={onFocus} onBlur={onBlur}></S.InputFormtext>
        <S.Line></S.Line>
        </>
    )
}



export default InputForm;