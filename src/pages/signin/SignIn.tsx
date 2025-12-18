import * as S from "./styles/styles.ts";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "@assets/Gowalk.png";
import GoWalkAxios from "@/axios/GoWalkAxios.ts";
import SignInApiResponse from "@/pages/signin/types/SignInApiResponse.ts";
import {AxiosError} from "axios";

const SignIn = () => {
  const {
    register,
    handleSubmit,
      getValues
  } = useForm();
  const onSubmit = async () => {
      const res = await GoWalkAxios.post<SignInApiResponse>("/api/auth/signin", getValues());
      localStorage.setItem("accessToken", res.data.data.accessToken);
      if (res.status >= 200 && res.status < 300) window.location.href = "/";
      else {
          const data = (res as unknown as AxiosError).response.data as SignInApiResponse;
          alert(data?.error?.message);
      }
  }
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Gowalk
        src={logo}
        alt=""
      ></S.Gowalk>
      <S.InputFormtitle>아이디</S.InputFormtitle>
      <S.InputFormtext
        placeholder="아이디를 입력해주세요"
        {...register("email", { required: "아이디를 입력해주세요" })}
      ></S.InputFormtext>
      <S.Line></S.Line>
      <S.InputFormtitle>비밀번호</S.InputFormtitle>
      <S.InputFormtext
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password", { required: "비밀번호를 입력해주세요" })}
      ></S.InputFormtext>
      <S.Line></S.Line>
      <S.Button >로그인</S.Button>
      <Link to="/member_emailaddress" style={{ textDecoration: "none" }}>
        <S.AskAccount>
          계정이 없으신가요?  <S.Domember>회원가입하기</S.Domember>
        </S.AskAccount>
      </Link>
    </S.Form>
  );
};

export default SignIn;
