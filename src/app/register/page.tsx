'use client'
import './style.css'
import { useState, useEffect } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [confiabilidade, setConfiabilidade] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setEmail(userData.email);
            setPassword(userData.password);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== retypePassword) {
            alert('Senhas não coincidem!');
            return;
        }

        const userData = { email, password };

        try {
            const response = await fetch('http://localhost:8080/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ confiabilidade, cpf, nome, rg, id: parseInt(id, 10) })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('user', JSON.stringify(userData));
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }

                alert("Cadastro realizado com sucesso!");
                window.location.href = '/perfil';
            } else {
                alert("Erro ao realizar cadastro.");
            }
        } catch (error) {
            console.error("Erro ao enviar dados para a API:", error);
            alert("Erro ao se conectar com o servidor.");
        }
    };

    return (
        <main>
            <h1 style={{ textAlign: 'center' }}>Register</h1>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="container-register">
                        <div className="middle">
                            <div className="form-email form-group">
                                <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-password form-group">
                                <input type="password" id="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-rtype-password form-group">
                                <input type="password" id="retype-password" name="retype-password" placeholder="Confirmar senha" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                            </div>
                            <div className="form-name form-group">
                                <input type="text" id="nome" name="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                        </div>
                        <div className="middle">
                            <div className="form-cpf form-group">
                                <input type="text" id="cpf" name="cpf" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </div>
                            <div className="form-group form-rg">
                                <input type="text" id="rg" name="rg" placeholder="RG" value={rg} onChange={(e) => setRg(e.target.value)} />
                            </div>
                            <div className="form-group form-id">
                                <input type="text" id="id" name="id" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                            </div>
                            <div className="form-group form-conf">
                                <input type="number" id="confiabilidade" name="confiabilidade" placeholder="Confiabilidade" value={confiabilidade} onChange={(e) => setConfiabilidade(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
