import * as S from "./styles/styles.ts";
import { Link } from "react-router-dom";
import logo from "@assets/Gowalk.png";

const SignIn = () => {
  return (
    <>
      <S.Gowalk
        src={logo}
        alt=""
      ></S.Gowalk>
      <S.InputFormtitle>이메일주소</S.InputFormtitle>
      <S.InputFormtext placeholder="이메일 주소를 입력해주세요"></S.InputFormtext>
      <S.Line></S.Line>
      <S.InputFormtitle>비밀번호</S.InputFormtitle>
      <S.InputFormtext placeholder="비밀번호를 입력해주세요"></S.InputFormtext>
      <S.Line></S.Line>
      <Link to="" style={{ textDecoration: "none" }}>
        <S.Button>로그인</S.Button>
      </Link>
      <Link to="/member_emailaddress" style={{ textDecoration: "none" }}>
        <S.AskAccount>
          계정이 없으신가요? <S.Domember>회원가입하기</S.Domember>
        </S.AskAccount>
      </Link>
    </>
  );
};

export default SignIn;
