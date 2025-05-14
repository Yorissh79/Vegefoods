import React from 'react'
import style from './Fosection.module.scss'

const Fosection = () => {
    return (
       <div className={style.main}>
        
           <div className={style.text}>
               <p className={style.f}>Best Price For You</p>
               <p className={style.s}>Deal of the day</p>
               <p className={style.t}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
               <a className={style.fo}>Spinach</a>
               <a className={style.fi}><p>$10</p> now $5 only</a>
           </div>
       </div>
    )
}

export default Fosection