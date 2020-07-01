import React from "react";
import Product from "./Product";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }

  componentDidMount() {
    fetch("/products")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, products } = this.state;

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      );
    }
  }
}

export default Products;
