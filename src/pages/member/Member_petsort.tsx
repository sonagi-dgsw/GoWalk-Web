import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/pages/member/styles/styles.ts";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react"
const Member_petsort = () => {
    const [errors, setErrors] = useState("");
    const [iserrors, setIserrors]=useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [petsort,setPetsort]=useState("error");
    const navigate=useNavigate();
    const onFocus=()=>{
        setIsFocused(true)
    }
    const onBlur=()=>{
        setIsFocused(false)
    }
    const Submit=()=>{
        if(petsort=="error"){
            setErrors("견종을 선택하여 주세요")
            setIserrors(true);
        } else{
            navigate("/member_petage")
        }
    }
    const onChange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setPetsort(e.target.value);
        setErrors("");
        setIserrors(false);
    }
    return(
        <>
        <S.Title>반려견 정보</S.Title>
        <S.InputFormtitle style={isFocused ? {color:"#5AAAEF"} : {color:"#888888"}}>견종</S.InputFormtitle>
        <S.Select onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={petsort} style={iserrors ? {borderColor:"red"} : {borderColor:"#fB8B8B8"}}>
            <option value="error">견종을 선택해주세요</option>
            <option>말티즈</option>
            <option>푸들</option>
            <option>포매라니안</option>
            <option>시추</option>
            <option>비숑 프리제</option>
        </S.Select>
        <S.ErrorCover>
        <S.Errortext style={{marginTop:"5px"}}>{errors}</S.Errortext>
        </S.ErrorCover>
        <S.Button onClick={Submit}>다음</S.Button>
        <Link to="/member_petname" style={{textDecoration:"none"}}><S.Before>이전으로</S.Before></Link>
        </>
    )
}

export default Member_petsort;