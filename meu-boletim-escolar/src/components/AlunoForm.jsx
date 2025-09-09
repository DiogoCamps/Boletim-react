import React, { useState, useEffect } from 'react';

const AlunoForm = ({ onSubmit, alunoEditando }) => {
    const [nome, setNome] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');

    useEffect(() => {
        if (alunoEditando) {
            setNome(alunoEditando.nome);
            setN1(alunoEditando.n1);
            setN2(alunoEditando.n2);
            setN3(alunoEditando.n3);
        } else {
            setNome('');
            setN1('');
            setN2('');
            setN3('');
        }
    }, [alunoEditando]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoAluno = {
            id: alunoEditando ? alunoEditando.id : null,
            nome,
            n1: parseFloat(n1),
            n2: parseFloat(n2),
            n3: parseFloat(n3),
        };
        onSubmit(novoAluno);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Nota 1"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Nota 2"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Nota 3"
                value={n3}
                onChange={(e) => setN3(e.target.value)}
                required
            />
            <button type="submit">{alunoEditando ? 'Salvar Edição' : 'Adicionar Aluno'}</button>
        </form>
    );
};

export default AlunoForm;