import * as S from "./styles/styles.ts";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  const navigate = useNavigate();
  const onValid = (data: any) => {};
  const onSubmit = () => {
      navigate("/");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Gowalk
        src="src/img/Gowalk.png"
        alt=""
      ></S.Gowalk>
      <S.InputFormtitle>이메일주소</S.InputFormtitle>
      <S.InputFormtext
        placeholder="이메일주소를 입력해주세요"
        {...register("email", { required: "이메일주소를 입력해주세요" })}
      ></S.InputFormtext>
      <S.Line></S.Line>
      <S.InputFormtitle>비밀번호</S.InputFormtitle>
      <S.InputFormtext
        type="password"
        placeholder="비밀번호를 입력해주세요"
      ></S.InputFormtext>
      <S.Line></S.Line>
      <S.Button >로그인</S.Button>
      <Link to="/member_emailaddress" style={{ textDecoration: "none" }}>
        <S.AskAccount>
          계정이 없으신가요?  <S.Domember>회원가입하기</S.Domember>
        </S.AskAccount>
      </Link>
    </form>
  );
};

export default SignIn;
