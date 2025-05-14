import React from 'react'
import style from './Fisection.module.scss'

const Fisection = () => {
    return (
       <div className={style.main}>
           <div className={style.left}>
               <p className={style.f}>Subcribe to our Newsletter</p>
               <p className={style.s}>Get e-mail updates about our latest shops and special offers</p>
           </div>
           
           <div className={style.right}>
               <input placeholder="Enter email address" name="emailAddress" type="text" />
               <button>Subscribe</button>
           </div>
       </div>
    )
}

export default Fisection