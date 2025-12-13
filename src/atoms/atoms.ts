import { atom } from 'jotai'

type TPetGender = "MALE" | "FEMALE";

interface IUser {
    username: string;
    email: string;
    breed: string;
    breedAge: number;
    petWeight: number;
    petName: string;
    petGender: TPetGender;
}

interface ICoordinate {
    lat: number;
    lng: number;
}

export type IRoute = ICoordinate[];

export const userAtom = atom<IUser | null>(null);

export const routeAtom = atom<IRoute | null>(null);