import React from 'react'
import style from './Header.module.scss'
import {Link} from "react-router";
import { IoCartSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";

const Header = () => {
    return (
       <div className={style.main}>
           
           <div className={style.logo}>
               <p>Vegefoods</p>
           </div>

           <div className={style.right}>

               <div className={style.pages}>
                   <Link to='/'>Home</Link>
                   <ul>
                       Shop <MdOutlineArrowDropDown/>
                       <ul>
                           <li>Shop</li>
                           <li>Shop</li>
                           <li>Shop</li>
                           <li>Shop</li>
                           <li>Shop</li>
                       </ul>
                   </ul>
                   <Link to="/about">About</Link>
                   <Link to="/blog">Blog</Link>
                   <Link to="/contact">Contact</Link>
                   <Link to="/admin">Admin</Link>
                   <Link to="/basket">Basket</Link>
                   <Link to="/wishlist">Wishlist</Link>
               </div>

               <div className={style.icon}>
                   <IoCartSharp/> [0]
               </div>

               <div className={style.menu}>
                   <VscMenu/>
                   <p>Menu</p>
               </div>

           </div>
           
       </div>
    )
}

export default Header