import React from 'react'
import style from './Card.module.scss'
import { FcShipped } from "react-icons/fc";

const Card = ({item}) => {
    return (
        <div className={style.main}>
            <div className={style.bor}>
                <FcShipped size={60}/>
            </div>
           <div className={style.text}>
               <p className={style.f}>{item.name}</p>
               <p className={style.s}>{item.title}</p>
           </div>
       </div>
    )
}

export default Card