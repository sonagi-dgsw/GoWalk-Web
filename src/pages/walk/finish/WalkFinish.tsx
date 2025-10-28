import * as S from "./styles/walkFinishStyle.ts";
import {InformationMessage, StatTitle, StatValue} from "./styles/walkFinishStyle.ts";
import Slide from "../../../components/slide/Slide.tsx";

const WalkFinishPage = () => {
    return <S.Wrapper>
        <S.Header>
            <S.HeaderTitle>오늘의 산책 리포트</S.HeaderTitle>
        </S.Header>
        <S.Container>
            <S.Card>
                <S.CardTitle>산책 요약</S.CardTitle>

                <S.RouteMap />

                <S.StatTitle>산책 시간</S.StatTitle>
                <S.StatValue>03:21:13</S.StatValue>

                <StatTitle>산책 거리</StatTitle>
                <StatValue>3.4km</StatValue>

                <StatTitle>소모 칼로리</StatTitle>
                <StatValue>132.1kcal</StatValue>

                <InformationMessage>산책가자가 제공하는 칼로리 정보는 정확하지 않을 수 있으며, 참고용으로 사용하시기를 권장합니다.</InformationMessage>
            </S.Card>
            <S.Card>
                <S.CardTitle>오늘 산책 어땠나요?</S.CardTitle>

                <Slide label={'산책 거리'} messages={['짧다', '적당하다', '길다']} />

                <Slide label={'분위기'} messages={['한적하다', '적당하다', '시끄럽다']} />
            </S.Card>
        </S.Container>
        <S.FinishButton>
            종료하기
        </S.FinishButton>
    </S.Wrapper>;
}

export default WalkFinishPage;