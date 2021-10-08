import { ItemListContainer } from "./components/Container/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo="Bienvenido a mi App"/>
    </div>
  );
}

export default App;
