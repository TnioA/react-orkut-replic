import { useState, createContext } from "react";

export const AppContext = createContext({});

interface Props {
    children: any
}

export function AppContextProvider(props: Props) {
    const LOCAL_STORAGE_TOKEN_NAME: string = "erabizealeak";
    const [user, setUser] = useState<Object | null>();
    const [token, setToken] = useState<string>();
    const parseJwt = (token: string) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    useState(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
        if(!token || token.length === 0) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            return;
        }

        getLoggedUser(token);
    });

    function getLoggedUser(token: string) {
        const user = parseJwt(token);
        setUser(user);
    }

    function authenticate(token: string) {
        const user = parseJwt(token);
        setToken(token);
        setUser(user);
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
    }

    function logout() {
        setUser(null);
        setToken("");
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    }

    return <AppContext.Provider value={{
        user,
        authenticate,
        logout
    }}>
        {props.children}
    </AppContext.Provider>;
}