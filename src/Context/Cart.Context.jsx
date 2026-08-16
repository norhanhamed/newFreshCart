import { createContext, useContext, useState } from "react";
import { userContext } from './User.Context';
import axios from "axios";
import toast from "react-hot-toast";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const { token } = useContext(userContext);

    const [cartInfo, setCartInfo] = useState(null)
    //addProductToCart function
    async function addProductToCart({ id }) {
        const options = {
            url: "https://ecommerce.routemisr.com/api/v1/cart",
            method: "POST",
            headers: {
                token,
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: {
                productId: id,
            },
        };
        let { data } = await axios.request(options);
        console.log(data);
        toast.success("product added to cart");
        setCartInfo(data)
    }

    //getCartInfo
    async function getCartInfo() {
        try {
            const options = {
                url: "https://ecommerce.routemisr.com/api/v1/cart",
                method: "GET",
                headers: {
                    token
                },
            };
            let { data } = await axios.request(options);
            console.log(data);
            setCartInfo(data)
        } catch (error) {
            console.log(error);
        }

    }

    //delete cartItem
    async function deleteCartItem({ productId }) {
        try {
            const options = {
                url: `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
                method: "DELETE",
                headers: {
                    token
                },
            };
            let { data } = await axios.request(options);
            console.log(data);
            if (data.numOfCartItems === 0) {
                setCartInfo([]);
            } else {
                setCartInfo(data);
            }
            toast.success("product removed successfully")
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <CartContext.Provider value={{ addProductToCart, getCartInfo, cartInfo, deleteCartItem, }} >
            {children}
        </CartContext.Provider>
    )
}
