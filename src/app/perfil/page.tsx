'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Perfil (){

    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            window.alert('Você precisa estar logado para acessar esta página.');
            router.push('/login');
        }
    })

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    return (
        <main>
            <h1>Perfil</h1>
            <button onClick={handleLogout}>Logout</button>
        </main>
    )
}