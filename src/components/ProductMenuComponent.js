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
        <div key={product.id} className='col-sm-6 col-lg-4 d-flex mb-5'>
          <div className='card'>
            <img src={product.image} alt={product.name} className='cardImage' />
            <div className='card-body text-left'>
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <div className='card-footer'>
              <a href='#' className='card-link'>
                add to cart
              </a>
              <a href='#' className='card-link'>
                customize
              </a>
            </div>
          </div>
        </div>
      );
    });
    return <div className='product-menu'>{menu}</div>;
  }
}

export default ProductMenu;
