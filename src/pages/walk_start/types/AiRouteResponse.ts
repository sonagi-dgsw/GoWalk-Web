interface WayPoint {
    lat: number;
    lng: number;
}

export interface IAiRouteResponse {
    data: {
        waypoints: WayPoint[];
    }
}