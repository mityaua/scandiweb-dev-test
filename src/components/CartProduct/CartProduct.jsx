import { Component } from 'react';
import { toast } from 'react-toastify';

import styles from './CartProduct.module.css';

// Mock data
import products from '../../products.json';

class CartProduct extends Component {
  render() {
    return (
      <ul>
        {products.map(product => {
          return (
            <li className={styles.item} key={product.id}>
              <div className={styles.product}>
                <p className={styles.product__name}>{product.name}</p>
                <p className={styles.product__price}>
                  ${product.prices[0].amount}
                </p>

                <button type="button" className={styles.product__attr}>
                  S
                </button>
                <button
                  type="button"
                  className={`${styles.product__attr} ${styles['product__attr--active']}`}
                >
                  M
                </button>
              </div>

              <div className={styles.wrapper}>
                <div className={styles.counters}>
                  <button
                    type="button"
                    className={styles.counters__button}
                    onClick={() =>
                      toast.success('Increment', {
                        position: 'top-center',
                        autoClose: 2000,
                      })
                    }
                  >
                    +
                  </button>
                  <span className={styles.counters__value}>1</span>
                  <button
                    type="button"
                    className={styles.counters__button}
                    onClick={() =>
                      toast.success('Decrement', {
                        position: 'top-center',
                        autoClose: 2000,
                      })
                    }
                  >
                    -
                  </button>
                </div>

                <div className={styles.gallery}>
                  <img
                    src={product.gallery[0]}
                    className={styles.gallery__image}
                    alt={product.name}
                    title={product.name}
                    width="141"
                    height="185"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CartProduct;
