import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
    return (
       <div className={style.main}>

           <p className={style.f}>We serve Fresh Vegestables & Fruits</p>
           <p className={style.s}>We deliver organic vegetables & fruits</p>
           <button>View Details</button>

           <div className={style.overlay}>

           </div>

       </div>
    )
}

export default Fsection