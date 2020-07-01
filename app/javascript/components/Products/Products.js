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

  updateCountHandler(product, up) {
    fetch(`/products/${product.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ count: up ? product.count + 1 : product.count - 1 }),
    })
      .then((res) => res.json())
      .then((result) => {
        let products = this.state.products.concat();
        products = products.map((product) => {
          if (product.id === result.id) {
            product = result;
          }
          return product;
        });
        this.setState({ products });
      });
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
            <Product
              key={product.id}
              product={product}
              updateCountHandler={this.updateCountHandler.bind(this)}
            />
          ))}
        </ul>
      );
    }
  }
}

export default Products;
