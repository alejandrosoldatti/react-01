import { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [contadorProductos, setContadorProductos] = useState(0);

  return (
    <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setContadorProductos={setContadorProductos}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setContadorProductos={setContadorProductos}
      />
    </>
  );
}

export default App;
