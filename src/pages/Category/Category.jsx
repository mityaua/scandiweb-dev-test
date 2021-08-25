import { Component } from 'react';

import ProductsList from '../../components/ProductsList';

import styles from './Category.module.css';

class Category extends Component {
  render() {
    return (
      <main>
        <section className={styles.category}>
          <h1 className={styles.title}>Clothes</h1>

          <ProductsList />
        </section>
      </main>
    );
  }
}

export default Category;
