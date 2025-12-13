import * as S from "./styles/loading.ts"
import logo from "@assets/Gowalk.png";

const Loading = () => {
    return (
        <S.Container>
            <S.Logo src={logo} />
            <S.Title>환영합니다. 오늘도 산책해볼까요?</S.Title>
            <S.ProgressBar>
                <S.Progress />
            </S.ProgressBar>
        </S.Container>
    )
}

export default Loading;