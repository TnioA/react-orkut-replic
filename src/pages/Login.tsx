import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as LoginIcon } from '../assets/login.svg';
import { AppContext } from "../context/AppContext";
import Api from "../Api";

interface Props {

}

export function Login(props: Props) {
    const navigate = useNavigate();
    const context: any = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        const response = await Api.Login(email, password);
        if(!response.success) {
            alert(response.errors[0].message);
            return;
        }


        context.authenticate(response.data.token);
        navigate("/");
    }

    return <section className="login">
        <div className="container">
            <div className="login-content">
                <div className="login-logo">
                    <div className="login-logo-content">
                        <h1 className="logo">Horkut</h1>
                        <p><strong>Siga</strong> amigos e outros devs do seu interesse usando o botão seguir</p>
                        <p><strong>Conheça</strong> novos devs e repositórios através da aba explorar</p>
                        <p><strong>Compartilhe</strong> ideias e soluções em um só lugar</p>
                    </div>
                </div>
                <div className="login-form">
                    <div className="login-form-content">
                        <div className="login-form-logo">
                            <LoginIcon />
                        </div>
                        <p>Acesse o <strong>horkut</strong> com seu e-mail e senha</p>
                        <form>
                            <input type="email" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                            <button type="button" onClick={()=> handleLogin()}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="login-footer">
                © 2022 Hubkut - Sobre o Hubkut - Centro de segurança - Privacidade - Termos - Contato
            </div>
        </div>

    </section>
}