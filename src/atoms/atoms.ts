import { atom } from 'jotai'

interface IUser {
    username: string;
    message: string;
}

export const userAtom = atom<IUser | null>(null);