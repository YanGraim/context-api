import { Nome } from "../Nome";

import { useContext } from "react";
import { UserContext } from "../../contexts/user";


export function Alunos() {

    const {qtdAlunos} = useContext(UserContext)

    return (
        <div>
            <strong>Quantidade de alunos: {qtdAlunos}</strong>
            <Nome/>
        </div>
    )
}