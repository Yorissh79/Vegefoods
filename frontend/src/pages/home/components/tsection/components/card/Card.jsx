import React from 'react'
import style from './Card.module.scss'

const Card = ({item}) => {
    return (
       <div className={style.main}>
           <img src={item.image} alt=""/>
           <div className={style.text}>
               <a href={"/home"}>{item.name}</a>
           </div>
       </div>
    )
}

export default Card