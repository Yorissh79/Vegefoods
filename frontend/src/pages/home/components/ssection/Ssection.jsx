import React from 'react'
import style from './Ssection.module.scss'
import Card from "./components/card/Card.jsx";

const Ssection = () => {
    const data = [
        {
            name: "Free Shipping",
            title: "On order over $100"
        },
        {
            name: "Always Fresh",
            title: "Product well package"
        },
        {
            name: "Superior Quality",
            title: "Quality Products"
        },
        {
            name: "Support",
            title: "24/7 Support"
        }
    ]

    return (
        <div className={style.main}>
            {data?.map((item) => <Card item={item}/>)}
        </div>
    )
}

export default Ssection