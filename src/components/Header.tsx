import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

interface Props {
    history: any;
}

export function Header(props: Props) {
    const context: any = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);

    function logout() {
        context.logout();
    }

    return <><header className="header">
        <div className="container">
            <div className="menu">
                <div className="logo">
                    <Link to="/">
                        <h1>Horkut</h1>
                    </Link>
                </div>
                <ul>
                    <li className="active">
                        <a href="#">Início</a>
                    </li>
                    <li>
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
                        <Link to="#">Aplicativos</Link>
                    </li>
                </ul>
            </div>
            <div className="search-menu">
                <div className="logout-menu">
                    <button onClick={() => logout()}>Sair</button>
                </div>
                <div className="input-box">
                    <button className="input-button" type="button">
                        <span className="material-icons">search</span>
                    </button>
                    <input type="text" placeholder="Pesquisar no Horkut" />
                </div>
            </div>
            <div className="mobile-menu">
                {!showMenu ?
                    <button className="show-menu-button" type="button" onClick={() => setShowMenu(true)}>
                        <MenuIcon />
                    </button>
                    :
                    <button className="close-menu-button" type="button" onClick={() => setShowMenu(false)}>
                        <CloseIcon />
                    </button>
                }
            </div>
        </div>
    </header>
        <div className={`menu-container ${showMenu ? "active" : ""}`}>
            ...
        </div>
    </>
}