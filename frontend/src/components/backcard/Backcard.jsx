import React, {useState} from 'react'
import style from './Backcard.module.scss'
import Card from "./card/Card.jsx";

const Backcard = ({data, who}) => {

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('0')

    const filteredData = data?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (filter === "asc") return Number(a.price) - Number(b.price)
            if (filter === "desc") return Number(b.price) - Number(a.price)
            if (filter === "0") return 0
        })

    return (
       <div className={style.main}>

           <div className={style.top}>
               <input placeholder="Search" value={search} onChange={(event) => setSearch(event.target.value)} />

               <button onClick={() => {setFilter("asc")}}>Az</button>
               <button onClick={() => {setFilter("desc")}}>Cox</button>
               <button onClick={() => {setFilter("0")}}>Default</button>
           </div>

           <div className={style.cards}>
               {filteredData?.map(item => <Card item={item} who={who} />)}
           </div>

       </div>
    )
}

export default Backcard