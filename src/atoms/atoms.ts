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

export const userAtom = atom<IUser | null>(null);