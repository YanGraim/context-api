import { Nome } from "../Nome";

interface AlunoProps {
    alunoNome: string;
}

export function Alunos({alunoNome}: AlunoProps) {
    return (
        <div>
            <strong>Quantidade de alunos: 23</strong>
            <Nome nome={alunoNome}/>
        </div>
    )
}