import { Component } from 'react';

import styles from './CartProduct.module.css';

// Mock data

class CartProduct extends Component {
  render() {
    return (
      <ul>
        <li className={styles.item}>
          <div className={styles.product}>
            <p className={styles.product__name}>
              Apollo <br /> Running Short
            </p>
            <p className={styles.product__price}>$50.00</p>

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
              <button type="button" className={styles.counters__button}>
                +
              </button>
              <span className={styles.counters__value}>1</span>
              <button type="button" className={styles.counters__button}>
                -
              </button>
            </div>

            <div className={styles.gallery}>
              <img
                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                className={styles.gallery__image}
                alt="Product"
                width="141"
                height="185"
              />
            </div>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.product}>
            <p className={styles.product__name}>
              Jupiter <br /> Wayfarer
            </p>
            <p className={styles.product__price}>$75.00</p>

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
              <button type="button" className={styles.counters__button}>
                +
              </button>
              <span className={styles.counters__value}>2</span>
              <button type="button" className={styles.counters__button}>
                -
              </button>
            </div>

            <div className={styles.gallery}>
              <img
                src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                className={styles.gallery__image}
                alt="Product"
                width="141"
                height="185"
              />
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default CartProduct;
