import { useContext, useState } from "react"
import { Link } from "react-router-dom";

interface Props {
    history: any;
}

export function Header(props: Props) {
    return <header className="header">
        <div className="container">
            <div className="logo">
                <h1>horkut</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li className="active">
                        <a href="#">Perfil</a>
                    </li>
                    <li>
                        <a href="#">Recados</a>
                    </li>
                    <li>
                        <a href="#">Amigos</a>
                    </li>
                    <li>
                        <a href="#">Comunidades</a>
                    </li>
                    <li>
                        <Link to="/login">Aplicativos</Link>
                    </li>
                </ul>
            </div>
            <div className="search-menu">
                <div className="input-box">
                    <button className="input-button" type="button">
                        <span className="material-icons">search</span>
                    </button>
                    <input type="text" placeholder="Pesquisar no Horkut" />
                </div>
            </div>
            <div className="user-menu">
                <button>
                    <img src="./images/profile.jpg" alt="profile-image" />
                    <span>
                        Juremildo Santos
                        <i className="material-icons">
                            expand_more
                        </i>
                    </span>
                </button>
            </div>
            <div className="mobile-menu">
                <button type="button">
                    <i className="material-icons">
                        menu
                    </i>
                </button>
            </div>
        </div>
    </header>
}