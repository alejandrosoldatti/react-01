import { data } from "../data";

export const ProductList = ({
  allProducts,
  setAllProducts,
  contadorProductos,
  setContadorProductos,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setContadorProductos(contadorProductos + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setContadorProductos(contadorProductos + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button className="button" onClick={() => onAddProduct(product)}>
              Añadir al carrito y endeudate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
