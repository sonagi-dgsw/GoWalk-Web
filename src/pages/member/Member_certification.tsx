import * as S from "../../pages/member/styles/styles.ts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Member_certification = () => {
    const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [starttime, setStarttime] = useState<Date>(new Date());
  useEffect(() => {
    setStarttime(new Date());
  }, []);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => {
      const nowtime = new Date();
      if (nowtime.getSeconds() - starttime.getSeconds() < 0) {
        setMinute(nowtime.getMinutes() - starttime.getMinutes() - 1);
        setSecond(60 + nowtime.getSeconds() - starttime.getSeconds());
      } else {
        setMinute(nowtime.getMinutes() - starttime.getMinutes());
        setSecond(nowtime.getSeconds() - starttime.getSeconds());
      }
    }, 1000);
    return () => clearInterval(id);
  }, [starttime]);
  const navigate = useNavigate();
  const onValid = (data: any) => {
    navigate("/member_name");
  };
  const onFocus = () => {
    setIsFocused(true);
  }
    const onBlur = () => {
    setIsFocused(false);
    }
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <S.Title >회원가입</S.Title>
      <S.InputFormtitle style={isFocused ? {color:"#5AAAEF"} : {color:"#888888"}}>인증번호</S.InputFormtitle>
      <S.InputFormtext
        {...register("certification", { required: "인증번호를 입력해주세요" })}
        placeholder="인증번호를 입력해주세요"
      onFocus={onFocus} onBlur={onBlur}></S.InputFormtext>
      <S.ErrorCover>
        <S.Line></S.Line>
        <S.Errortext>{errors.certification?.message?.toString()}</S.Errortext>
        <S.Time
          style={errors.certification ? { top: "435px" } : { top: "410px" }}
        >
          {minute}:{second.toString().padStart(2, "0")}
        </S.Time>
      </S.ErrorCover>
      <S.Button type="submit">
        다음
      </S.Button>
      <Link to="/member_emailaddress">
        <S.Before>이전으로</S.Before>
      </Link>
    </form>
  );
};

export default Member_certification;
