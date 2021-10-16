import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { pedirProductos } from "../../../helpers/pedirProductos"
import { ItemList } from "./ItemList"
import NavProd from "./NavProd"



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    const {categoriaId} = useParams()
    console.log(categoriaId)

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {
                
                if (categoriaId){
                    setItems(res.filter(prod => prod.categoria === categoriaId))
                    
                }
               else{
                    setItems(res)
                }
                
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [categoriaId])


    return (
        <section  >
           <NavProd/>
            {
                loading 
                    ? <h2>cargando productos...</h2>
                    :
                    <>
                    
                    <ItemList productos={items}/>
                    </>
            }
            
        </section>
    )
}