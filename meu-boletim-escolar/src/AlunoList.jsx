// src/components/AlunoList.jsx
import React from 'react';
import AlunoItem from './AlunoItem';

const AlunoList = ({ alunos, onRemover, onEditar }) => {
    return (
        <div>
            <h2>Lista de Alunos</h2>
            {alunos.length === 0 ? (
                <p>Nenhum aluno cadastrado.</p>
            ) : (
                <ul>
                    {alunos.map(aluno => (
                        <AlunoItem
                            key={aluno.id}
                            aluno={aluno}
                            onRemover={onRemover}
                            onEditar={onEditar}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AlunoList;