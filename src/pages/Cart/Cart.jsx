import { Component } from 'react';
import CartProduct from '../../components/CartProduct';

import styles from './Cart.module.css';

class Cart extends Component {
  render() {
    return (
      <main>
        <section className={styles.section}>
          <h1 className={styles.title}>Cart</h1>

          <CartProduct />
        </section>
      </main>
    );
  }
}

export default Cart;
