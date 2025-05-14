import React, {useEffect} from 'react'
import style from './Basket.module.scss'
import {Helmet} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import Backcard from "../../components/backcard/Backcard.jsx";
import {getBasketThunk} from "../../redux/reducers/basketSlice.js";

const Basket = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket.basket);

    useEffect(() => {
        dispatch(getBasketThunk());
    }, [])

    return (
       <div className={style.main}>
            <Helmet title="Basket" />
            <Backcard data={products} who={"basket"}/>
       </div>
    )
}

export default Basket