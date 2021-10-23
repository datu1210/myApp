import React, {useContext, useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import {ItemCount} from '../itemCount/ItemCount'

const ItemDetail = ({ id, name, price, img, description, categoria, stock }) => {
  const { goBack, push } = useHistory();

  const {addToCart, isInCart}= useContext(CartContext)
  const [cantidad, setCantidad] = useState(0)

  const handleAgregar = () =>{
    const newItem ={
      id,
      name, 
      price, 
      categoria,
      cantidad
    }
    if (cantidad>0){
      addToCart(newItem)
    }
  }

  return (
    <Card style={{ width: "18rem" }} className="containerCard my-5">
      <Card.Img src={img} />

      <Card.Title className="cardItem">{name}</Card.Title>
      <Card.Text className="cardItem">Categoria: {categoria}</Card.Text>
      <Card.Text className="cardItem">{description}</Card.Text>
      <Card.Text className="cardItem" id="precio">
        Precio: ${price}
      </Card.Text>

      {isInCart(id) ? (
        <Link to="/cart" className="btn btn-success">
          Finalizar Compra
        </Link>
      ) : (
        <>
          <ItemCount cantidad={cantidad} modify={setCantidad} max={stock} />
          <button 
            className="btn btn-success my-2"
            onClick={handleAgregar}
            >
              Añadir
            </button>
        </>
      )}

      <hr />
      <div>
        <Button className="mx-3 my-2" onClick={() => goBack()}>
          volver
        </Button>
        <Button className="mx-3 my-2" onClick={() => push("/")}>
          ir al inicio
        </Button>
      </div>
    </Card>
  );
};

export default ItemDetail;
