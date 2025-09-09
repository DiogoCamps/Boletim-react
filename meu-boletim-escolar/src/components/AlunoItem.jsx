// src/components/AlunoItem.jsx
import React from 'react';

const AlunoItem = ({ aluno, onRemover, onEditar }) => {
    const media = (aluno.n1 + aluno.n2 + aluno.n3) / 3;
    const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';

    return (
        <li>
            <span>Nome: {aluno.nome}</span>
            <span> Média: {media.toFixed(2)}</span>
            <span> Situação: {situacao}</span>
            <button onClick={() => onEditar(aluno)}>Editar</button>
            <button onClick={() => onRemover(aluno.id)}>Remover</button>
        </li>
    );
};

export default AlunoItem;