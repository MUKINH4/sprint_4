'use client'

import NavItem from "../NavItem/NavItem";
import './style.css'

export default function Header() {

    const user = localStorage.getItem('user');

    return (
        <header>
        <div className="container">
            <div className="logo">
                <a href="/">Mecatus</a>
            </div>
            <nav>
                <ul className="navItems">
                    {user ? 
                        <>
                            <NavItem linkTo="/perfil" title="Perfil" />
                        </>
                        :
                        <>
                            <NavItem linkTo="/login" title="Login" />
                        </>    
                }
                </ul>
            </nav>
        </div>
        </header>
    );
}