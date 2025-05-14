import React, {useEffect} from 'react'
import style from './Card.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {deleteBasketThunk, getBasketThunk, postBasketThunk} from "../../../redux/reducers/basketSlice.js";
import {deleteProductThunk} from "../../../redux/reducers/productSlice.js";
import {deleteWishlistThunk, getWishlistThunk, postWishlistThunk} from "../../../redux/reducers/wishlistSlice.js";

const Card = ({item, who}) => {

    const dispatch = useDispatch();
    const basket_value = useSelector(state => state.basket.basket)
    const wishlist_value = useSelector(state => state.wishlist.wishlist)

    useEffect(() => {
        dispatch(getBasketThunk())
        dispatch(getWishlistThunk())
    }, [])

    const deleteBasket = () => {
        dispatch(deleteBasketThunk(item._id))
    }

    const deleteAdmin = () => {
        dispatch(deleteProductThunk(item._id))
    }

    const deleteWishlist = () => {
        dispatch(deleteWishlistThunk(item._id))
    }

    const addBasket = () => {
        dispatch(getBasketThunk())

        if (basket_value) {
            const exist = basket_value.find(item => item.name === item.name)

            if (!exist) {
                const data = {
                    name: item.name,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                    count: "1"
                }
                dispatch(postBasketThunk(data))
            }
            else {
                const data = {
                    name: item.name,
                    description: item.description,
                    image: item.image,
                    price: item.price,
                    count: String(Number(exist.count) + 1)
                }
                dispatch(deleteBasketThunk(exist._id))
                dispatch(postBasketThunk(data))
            }
        }
    }

    const addWishlist = () => {
        dispatch(getWishlistThunk())

        const exist = wishlist_value.find(item => item.name === item.name)

        if (wishlist_value) {
            if (!exist) {
                dispatch(postWishlistThunk(item))
            }
        }
    }

    return (
       <div className={style.main}>
           <img src={item.image} />
           <p>{item.name}</p>
           <p>{item.description}</p>
           <p>${item.price}</p>
           {who === "basket" ? <p>{item.count}</p> : null}
           {who === "home" ? <div>
               <button onClick={() => {addBasket()}}>Add to basket</button>
               <button onClick={() => {addWishlist()}}>Add to wishlist</button>
           </div> : null}

           {who === "basket" ? <button onClick={() => {deleteBasket()}}>Delete</button> : null}
           {who === "wishlist" ? <button onClick={() => {deleteWishlist()}}>Delete</button> : null}
           {who === "admin" ? <button onClick={() => {deleteAdmin()}}>Delete</button> : null}

       </div>
    )
}

export default Card