import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/GoWalk-Web/src/pages/member/styles/styles.ts";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useNavigate } from "react-router";
const Member_petname = () => {
    const {register,setError,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate();
    const onValid = (data:any)=>{
        navigate("/member_petsort")
    }
    return(
        <form onSubmit={handleSubmit(onValid)}>
        <S.Title>회원가입</S.Title>
        <S.InputFormtitle>반려견 이름</S.InputFormtitle>
        <S.InputFormtext placeholder="반려견 이름을 입력해주세요" {...register("name",{required:"이름을 입력해주세요"})}></S.InputFormtext>
        <S.ErrorCover>
        <S.Line></S.Line>
        <S.Errortext>{errors.name?.message?.toString()}</S.Errortext>
        </S.ErrorCover>
        <S.Button style={{fontSize:"5vw"}}>다음</S.Button>
        <Link to="/member_name" style={{textDecoration:"none"}}><S.Before>이전으로</S.Before></Link>
        </form>
    )
}


export default Member_petname;