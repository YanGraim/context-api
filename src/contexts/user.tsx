import { createContext } from "react";

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
}

export const UserContext = createContext({} as UserContextData);