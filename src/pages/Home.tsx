import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

interface Props {
}

export function Home(props: Props) {
    const navigate = useNavigate();
    const context: any = useContext(AppContext);

    useEffect(()=> {
        if(!context.user) {
            navigate("/login");
        }
    });

    return <div className="home"></div>
           
}