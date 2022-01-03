import React, { Component } from 'react';

class ProductMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
    };
  }
  onProductSelect(product) {
    this.setState({ selectedProduct: product });
  }
  renderSelectedProduct(product) {
    if (product) {
      return (
        <div className='card'>
          <img src={product.image} alt={product.name} className='cardImage' />
          <div className='cardBody'>
            <div className='productTitle'>{product.name}</div>
            <div className='productDescription'>{product.description}</div>
            <div className='productPrice'>{product.price}</div>
          </div>
        </div>
      );
    }
    return <div />;
  }
  render() {
    const menu = this.props.products.map((product) => {
      return (
        <div key={product.id} className='product'>
          {product.name}
        </div>
      );
    });
    return <div className='product-menu white-txt'>{menu}</div>;
  }
}

export default ProductMenu;
