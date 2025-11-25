import * as S from "./styles/loading.ts"
import logo from "@assets/Gowalk.png";

const Loading = () => {
    return (
        <S.Container>
            <S.Logo src={logo} />
            <S.Title>환영합니다!</S.Title>
        </S.Container>
    )
}

export default Loading;