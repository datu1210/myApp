import React from 'react'
import {Card, Button} from 'react-bootstrap'

import "./container.css"

export const Item = ( {id, name, price, img, description} ) => {

    return (

        <Card style={{ width: '18rem' }} className="container">
            <Card.Img variant="top" src={img} />
            <Card.Body className= "body">
                <Card.Title className="cardItem">{name}</Card.Title>
                <Card.Text className="cardItem">{description}</Card.Text>
                <Card.Text className="cardItem" id='precio'>Precio: ${price}</Card.Text>
                <Button id="buttonBuy">comprar</Button>
            </Card.Body>
        </Card>
    )
}