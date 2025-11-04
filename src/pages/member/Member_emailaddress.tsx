import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/pages/member/styles/styles.ts";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Member_emailaddress = () => {
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

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <S.Title>회원가입</S.Title>
      <S.InputFormtitle>이메일 주소</S.InputFormtitle>
      <S.InputFormtext
        {...register("email_address", { required: "이메일 주소를 입력해주요" })}
        placeholder="이메일 주소를 입력해주세요"
      ></S.InputFormtext>
      <S.ErrorCover>
        <S.Line></S.Line>
        <S.Errortext>{errors.email_address?.message?.toString()}</S.Errortext>
      </S.ErrorCover>
      <S.Button style={{ fontSize: "5vw" }} type="submit">
        인증번호 요청
      </S.Button>
      <S.AskAccount>
        이미 계정이 있으신가요?{" "}
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <S.Domember>로그인하기</S.Domember>
        </Link>
      </S.AskAccount>
    </form>
  );
};

export default Member_emailaddress;
