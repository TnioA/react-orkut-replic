import { useState, createContext } from "react";

export const AppContext = createContext({});

interface Props {
    children: any
}

export function AppContextProvider(props: Props) {
    const [user, setUser] = useState<Object>();

    useState(()=> {
        const user = new Object();
        setUser(user);
        // var cartProducts: ProductModel[] = JSON.parse(localStorage.getItem("cartProducts") ?? "[]");
        // setCartProducts(cartProducts);
    });

    return <AppContext.Provider value={{
        user
    }}>
        {props.children}
    </AppContext.Provider>;
}