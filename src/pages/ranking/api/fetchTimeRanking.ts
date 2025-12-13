import GoWalkAxios from "@/axios/GoWalkAxios.ts";

interface ITimeRank {
    username: string;
    walkDay: number;
}

interface IDistanceRank {
    username: string;
    walkDistance: number;
}

export const fetchTimeRanking = async () => {
    const timeRankingRes = await GoWalkAxios.get<ITimeRank[]>("/api/members/rank/time");
    console.log(timeRankingRes)
    if(timeRankingRes.status == 200){
        return timeRankingRes.data;
    }
}

export const fetchDistanceRanking = async () => {
    const distanceRankingRes = await GoWalkAxios.get<IDistanceRank[]>("/api/members/rank/distance");
    if(distanceRankingRes.status == 200){
        return distanceRankingRes.data;
    }
}