// src/App.jsx
import React, { useState, useEffect } from 'react';
import AlunoForm from './components/AlunoForm';
import AlunoList from './components/AlunoList';
import './App.css';

const App = () => {
    const [alunos, setAlunos] = useState(() => {
        const savedAlunos = localStorage.getItem('alunos');
        return savedAlunos ? JSON.parse(savedAlunos) : [];
    });
    const [alunoEditando, setAlunoEditando] = useState(null);

    useEffect(() => {
        localStorage.setItem('alunos', JSON.stringify(alunos));
    }, [alunos]);

    const handleAdicionarEditarAluno = (aluno) => {
        if (aluno.id) {
            setAlunos(alunos.map(a => a.id === aluno.id ? aluno : a));
        } else {
            setAlunos([...alunos, { ...aluno, id: Date.now() }]);
        }
        setAlunoEditando(null);
    };

    const handleRemoverAluno = (id) => {
        setAlunos(alunos.filter(aluno => aluno.id !== id));
    };

    const handleEditarAluno = (aluno) => {
        setAlunoEditando(aluno);
    };

    return (
        <div className="container">
            <h1>Boletim Escolar</h1>
            <AlunoForm
                onSubmit={handleAdicionarEditarAluno}
                alunoEditando={alunoEditando}
            />
            <AlunoList
                alunos={alunos}
                onRemover={handleRemoverAluno}
                onEditar={handleEditarAluno}
            />
        </div>
    );
};

export default App;