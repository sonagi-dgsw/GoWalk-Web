import * as S from "./styles/styles.ts";
import InputForm from "../../components/InputForm.tsx";

const SignIn = () => {
    return (
        <>
            <S.Gowalk src="src/pages/img/스크린샷 2025-10-15 오후 4.48.05.png" alt=""></S.Gowalk>
            <InputForm sort="이메일 주소"></InputForm>
            <InputForm sort="비밀번호"></InputForm>
            <S.Button>로그인</S.Button>
        </>
    )
}

export default SignIn;