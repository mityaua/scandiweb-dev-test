import { Component } from 'react';

import styles from './CartPreview.module.css';

import { ReactComponent as CartImage } from '../../images/cart.svg';

class CartPreview extends Component {
  // Mock
  state = {
    counter: 2,
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <CartImage className={styles.cart} title="Cart" alt="Cart" />

        {this.state.counter ? (
          <span className={styles.counter}>{this.state.counter}</span>
        ) : null}
      </div>
    );
  }
}

export default CartPreview;
