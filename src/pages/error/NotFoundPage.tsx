import * as S from "./styles/notFoundStyles.ts"
import {Link} from "@/components/common/Link.tsx";

const ErrorPage = () => {
    return (
        <S.Container>
            <S.StatusCode>404</S.StatusCode>
            <S.Title>페이지를 찾을 수 없습니다.</S.Title>
            <Link to={"/"}><S.Button>홈으로 돌아가기</S.Button></Link>
        </S.Container>
    )
}

export default ErrorPage;