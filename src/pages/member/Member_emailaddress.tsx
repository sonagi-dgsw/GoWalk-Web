import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/pages/member/styles/styles.ts";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Member_emailaddress = () => {
    const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onValid = (data: any) => {
    navigate("/member_certification");
  };
  const onFocus=()=>{
    setIsFocused(true)
  }
  const onBlur=()=>{
    setIsFocused(false)
  }

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <S.Title>회원가입</S.Title>
      <S.InputFormtitle style={isFocused ? {color:"#5AAAEF"} : {color:"#888888"}}>이메일 주소</S.InputFormtitle>
      <S.InputFormtext
        {...register("email_address", { required: "이메일 주소를 입력해주요" })}
        placeholder="이메일 주소를 입력해주세요"
        onFocus={onFocus} onBlur={onBlur} ></S.InputFormtext>
      <S.ErrorCover>
        <S.Line style={isFocused ? {backgroundColor:"#5AAAEF"} : {backgroundColor:"#B8B8B8"}}></S.Line>
        <S.Errortext>{errors.email_address?.message?.toString()}</S.Errortext>
      </S.ErrorCover>
      <S.Button type="submit">
        인증번호 요청
      </S.Button>
      <S.AskAccount>
        이미 계정이 있으신가요? {" "}
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <S.Domember>로그인하기</S.Domember>
        </Link>
      </S.AskAccount>
    </form>
  );
};

export default Member_emailaddress;
