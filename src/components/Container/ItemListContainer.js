import React, {useState, useEffect} from 'react'
import { pedirProductos } from "../../helpers/pedirProductos"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])


    return (
        <section className="container my-5">
            {
                loading 
                    ? <h2>cargando productos...</h2>
                    : <ItemList productos={items}/>
            }
            
        </section>
    )
}