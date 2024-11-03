'use client'
import './style.css'
import { useState, useEffect } from 'react';


export default function Login (){

    const handleSubmit = async () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const response = await fetch('http://localhost:8080/cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        if (response.ok) {
            const { token } = await response.json()
            localStorage.setItem('token', token)
            window.location.href = '/'
        } else {
            console.error('Login failed')
        }

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </main>
    )
}