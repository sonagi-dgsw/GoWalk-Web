import * as S from "./styles/styles.ts";
import InputForm from "../../components/InputForm.tsx";
import { Link } from "react-router";

const SignIn = () => {
    return (
        <>
            <S.Gowalk src="src/pages/img/스크린샷 2025-10-15 오후 4.48.05.png" alt=""></S.Gowalk>
            <InputForm sort="이메일 주소"></InputForm>
            <InputForm sort="비밀번호"></InputForm>
            <Link to="" style={{textDecoration:"none"}}><S.Button style={{fontSize:"5vw"}}>로그인</S.Button></Link>
            <S.AskAccount>계정이 없으신가요? <S.Domember>회원가입하기</S.Domember></S.AskAccount>
        </>
    )
}

export default SignIn;