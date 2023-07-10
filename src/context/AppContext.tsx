import { useState, createContext } from "react";

export const AppContext = createContext({});

interface Props {
    children: any
}

export function AppContextProvider(props: Props) {
    // const [cartProducts, setCartProducts] = useState<ProductModel[]>([]);

    useState(()=> {
        // var cartProducts: ProductModel[] = JSON.parse(localStorage.getItem("cartProducts") ?? "[]");
        // setCartProducts(cartProducts);
    });

    return <AppContext.Provider value={{
        // cartProducts,
        // getTotalInfoCart,
        // addProduct,
        // removeProduct,
        // changeProductCount
    }}>
        {props.children}
    </AppContext.Provider>;
}