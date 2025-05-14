import React, {useEffect} from 'react'
import style from './Home.module.scss'
import {Helmet} from "react-helmet-async";
import Fsection from "./components/fsection/Fsection.jsx";
import Ssection from "./components/ssection/Ssection.jsx";
import Tsection from "./components/tsection/Tsection.jsx";
import Backcard from "../../components/backcard/Backcard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductThunk} from "../../redux/reducers/productSlice.js";
import Fosection from "./components/fosection/Fosection.jsx";

const Home = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    return (
       <div className={style.main}>
           <Helmet title="Home" />
           <Fsection/>
           <Ssection/>
           <Tsection/>
           <Backcard data={data} who={"home"}/>
           <Fosection/>
       </div>
    )
}

export default Home