import { Component } from 'react';

import styles from './CurrencySwitcher.module.css';
import { ReactComponent as CartImage } from '../../images/cart.svg';
import { ReactComponent as ArrowImage } from '../../images/arrow.svg';

class CurrencySwitcher extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.sign}>$</span>
        <ArrowImage className={styles.arrow} title="Currency" alt="Currency" />
        <CartImage className={styles.cart} title="Cart" alt="Cart" />
      </div>
    );
  }
}

export default CurrencySwitcher;
