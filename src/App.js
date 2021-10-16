import { ItemListContainer } from "./components/Container/ListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Container/DetailContainer.js/ItemDetailContainer";
import {Home} from "./components/Home/Home"

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
        {/* <Home/> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/productos">
            <ItemListContainer />
          </Route>
          <Route exact path="/productos/:categoriaId">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/contacto">
            <h1>Vista de contacto</h1>
          </Route>
          <Route exact path="/cart">
            <h1>Carrito de compras</h1>
          </Route>
          
        </Switch>

        
      </BrowserRouter>
    </>
  );
}

export default App;
