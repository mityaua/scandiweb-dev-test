import { Component } from 'react';
import ProductsItem from '../ProductsItem';

import styles from './ProductsList.module.css';

class ProductsList extends Component {
  render() {
    const products = this.props.products;

    return (
      <ul className={styles.list}>
        {products.map(product => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </ul>
    );
  }
}

export default ProductsList;
