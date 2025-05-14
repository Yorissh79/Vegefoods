import React, {useEffect} from 'react'
import style from './Admin.module.scss'
import {Helmet} from "react-helmet-async";
import Backcard from "../../components/backcard/Backcard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";
import Form from "./components/form/Form.jsx";

const Admin = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Admin" />
           <Form/>
           <Backcard data={products} who={"admin"}/>

       </div>
    )
}

export default Admin