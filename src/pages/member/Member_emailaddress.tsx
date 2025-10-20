import * as S from "./styles/styles.ts";
import InputForm from "../../components/InputForm.tsx";
import { Link } from "react-router-dom";

const Member_emailaddress = () => {
    return (
        <>
            <S.Title>회원가입</S.Title>
            <InputForm sort="이메일 주소"></InputForm>
            <Link to="/member_certification" style={{textDecoration:"none"}}><S.Button>인증번호 요청</S.Button></Link>
        </>
    )
}

export default Member_emailaddress;