import * as S from "@/pages/member/styles/styles.ts";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
const Member_name = () => {
    const {register,setError,handleSubmit,formState:{errors}}=useForm();
    const [isFocused, setIsFocused] = useState(false);
    const navigate=useNavigate();
    const onValid = (data:any)=>{
        navigate("/member_petname")
    }
    return(
        <form onSubmit={handleSubmit(onValid)}>
        <S.Title>회원가입</S.Title>
        <S.InputFormtitle>이름</S.InputFormtitle>
        <S.InputFormtext placeholder="이름을 입력해주세요" {...register("name",{required:"이름을 입력해주세요"})} style={isFocused ? {color:"#5AAAEF"} : {color:"#888888"}}></S.InputFormtext>
        <S.ErrorCover>
        <S.Line></S.Line>
        </S.ErrorCover>
        <S.Errortext>{errors.name?.message?.toString()}</S.Errortext>
        <S.Button  type="submit">다음</S.Button>
        <Link to="/member_certification"><S.Before>이전으로</S.Before></Link>
        </form>
    )
}

export default Member_name;