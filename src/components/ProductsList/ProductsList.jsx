import { Component } from 'react';
import ProductsItem from '../ProductsItem';

import styles from './ProductsList.module.css';

// Mock
import products from '../../products.json';

class ProductsList extends Component {
  render() {
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
