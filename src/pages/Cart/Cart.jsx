import { Component } from 'react';

import styles from './Cart.module.css';

class Cart extends Component {
  render() {
    return (
      <main>
        <section className={styles.section}>
          <h1 className={styles.title}>Cart</h1>

          <ul>
            <li>Cart</li>
            <li>Cart</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default Cart;
