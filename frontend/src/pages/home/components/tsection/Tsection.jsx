import React from 'react'
import style from './Tsection.module.scss'
import Card from "./components/card/Card.jsx";

const Tsection = () => {

    const dataF = [
        {
            image: "https://preview.colorlib.com/theme/vegefoods/images/category-1.jpg",
            name : "Fruits"
        },
        {
            image: "https://preview.colorlib.com/theme/vegefoods/images/category-2.jpg",
            name : "Vegetables"
        }
    ]

    const dataL = [
        {
            image: "https://preview.colorlib.com/theme/vegefoods/images/category-3.jpg",
            name : "Juices"
        },
        {
            image: "https://preview.colorlib.com/theme/vegefoods/images/category-4.jpg",
            name : "Dried"
        }
    ]

    return (
       <div className={style.main}>
           <div className={style.left}>
               {dataF.map((item) => <Card item={item} />)}
           </div>
           
           <div className={style.center}>
                <div className={style.text}>
                    <h2>Vegetables</h2>
                    <p>Protect the health of every home</p>
                    <button>Shop now</button>
                </div>
               <img src="https://preview.colorlib.com/theme/vegefoods/images/category.jpg" alt="" />
           </div>
           
           <div className={style.right}>
               {dataL.map((item) => <Card item={item} />)}
           </div>
       </div>
    )
}

export default Tsection