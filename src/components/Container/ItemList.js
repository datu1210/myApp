import React from 'react'
import { Item } from './Item'

import "./container.css"

export const ItemList = ( {productos = []} ) => {


    return (
        <div className="container">
            <h1 className="titulo">PRODUCTOS</h1>
            <div className="row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
            </div>
        </div>
    )
}