
interface NomeProps {
    nome: string;
}

export function Nome({nome}: NomeProps) {
    return (
        <div>
            <strong>Aluno: {nome}</strong>
        </div>
    )
}