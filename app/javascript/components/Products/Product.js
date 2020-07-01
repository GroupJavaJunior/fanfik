import React from "react";
import "./Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  // addCount() {
  //   fetch(`/products/${this.props.product.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       'Accept': 'application/json',
  //       "Content-Type": "application/json; charset=UTF-8"
  //     },
  //     body: JSON.stringify({ count: this.props.product.count + 1 }),
  //   });
  // }

  render() {
    return (
      <li key={this.props.product.id}>
        {this.props.product.name} {this.props.product.count}
        <button
          className="product-add-count"
          onClick={() => { this.props.updateCountHandler(this.props.product, true) }}
        >
          Add
        </button>
        <button
          className="product-add-count"
          onClick={() => { this.props.updateCountHandler(this.props.product) }}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default Product;
