import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { pedirProductos } from "../../../helpers/pedirProductos"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirProductos()
            .then(res => {

                setItem(res.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])


    return (
        <section>
            {
                loading ? <h2> Loading...</h2>
                : <ItemDetail {...item}/>

            }
            
        </section>
    )
}

export default ItemDetailContainer
