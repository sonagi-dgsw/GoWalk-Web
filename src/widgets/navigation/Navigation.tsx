import * as S from "./styles/styles.ts";
import {Link} from "../../components/common/Link.tsx";
import HomeIcon from "@/assets/home.svg";
import RankingIcon from "@/assets/ranking.svg";
import HistoryIcon from "@/assets/history.svg";
import CommunityIcon from "@/assets/community.svg";

interface IPage {
    title: string;
    href: string;
    logo: string;
}

const pages: IPage[] = [
    {
        title: "홈",
        href: "/",
        logo: HomeIcon
    },
    {
        title: "랭킹",
        href: "/ranking",
        logo: RankingIcon
    },
    {
        title: "산책 기록",
        href: "/walk/history",
        logo: HistoryIcon
    },
    {
        title: "소통",
        href: "/community",
        logo: CommunityIcon
    },
]

const Navigation = () => {
    return (
        <S.Container>
            <S.List>
                {
                    pages.map((page, idx) => {
                        const Logo = page.logo;
                        return (
                            <Link to={page.href} key={idx}>
                                <S.Item>
                                    <S.ItemLogo>
                                        <Logo />
                                    </S.ItemLogo>
                                    <S.ItemTitle>{page.title}</S.ItemTitle>
                                </S.Item>
                            </Link>
                        )
                    })
                }
            </S.List>
        </S.Container>
    )
}

export default Navigation;