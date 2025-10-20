import InputForm from "../../components/InputForm"
import * as S from "./styles/styles.ts";
import {useEffect,useState } from "react";
const Member_certification = () => {
    const [starttime, setStarttime] = useState<Date>(new Date());
    useEffect(() => {
        setStarttime(new Date())
    }, []);
    const [minute,setMinute] = useState<number>(0);
    const [second,setSecond] = useState<number>(0);
    useEffect(() => {
        const id = setInterval(() => {
        const nowtime = new Date();
    if (nowtime.getSeconds()-starttime.getSeconds()<0){
        setMinute(nowtime.getMinutes()-starttime.getMinutes()-1)
        setSecond(60 + nowtime.getSeconds()-starttime.getSeconds())

    }
    else{
        setMinute(nowtime.getMinutes()-starttime.getMinutes())
        setSecond(nowtime.getSeconds()-starttime.getSeconds())
    }
        }, 1000);
        return () => clearInterval(id);
    },[starttime]);
    return(
        <>
        <S.Title>회원가입</S.Title>
        <InputForm sort="인증번호"></InputForm>
        <S.Time>{minute}:{second}</S.Time>
        <S.Button>다음</S.Button>
        </>
    )
}

export default Member_certification;