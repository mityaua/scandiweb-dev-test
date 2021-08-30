import { Component } from 'react';
import SingleProduct from '../../components/SingleProduct';

import styles from './Product.module.css';

import { data } from '../../product.json';

class Product extends Component {
  render() {
    return (
      <main className={styles.main}>
        <SingleProduct product={data} />
      </main>
    );
  }
}

export default Product;
