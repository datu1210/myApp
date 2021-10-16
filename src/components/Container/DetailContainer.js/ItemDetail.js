import React from "react";
import { Card, Button} from "react-bootstrap";
import { useHistory } from "react-router";



const ItemDetail = ({ id, name, price, img, description, categoria }) => {

const {goBack, push} = useHistory()

  return (
    <Card style={{ width: "18rem" }} className="containerCard">
      <Card.Img src={img} />
      <Card.Body className="body">
        <Card.Title className="cardItem">{name}</Card.Title>
        <Card.Text className="cardItem">Categoria: {categoria}</Card.Text>
        <Card.Text className="cardItem">{description}</Card.Text>
        <Card.Text className="cardItem" id="precio">
          Precio: ${price}
        </Card.Text>

          <Button onClick={() => goBack()}>volver</Button>
      
          <Button onClick={() => push("/cart")} >comprar</Button>
 

      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
