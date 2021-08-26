import { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal';

import styles from './CartPreview.module.css';

import { ReactComponent as CartImage } from '../../images/cart.svg';
import { ReactComponent as ArrowImage } from '../../images/arrow-up.svg';

import routes from '../../routes';

const body = document.querySelector('body');

class CartPreview extends Component {
  // Mock
  state = {
    counter: 2,
    showModal: false,
  };

  toggleModal = () => {
    if (body.classList.contains(styles.hidden)) {
      body.classList.remove(styles.hidden);
    } else {
      body.classList.add(styles.hidden);
    }

    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={this.toggleModal}>
          <CartImage className={styles.cart} title="My Bag" alt="My Bag" />

          {this.state.counter ? (
            <span className={styles.counter}>{this.state.counter}</span>
          ) : null}
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p className={styles.title}>
              <span className={styles.title__name}>My Bag</span>,{' '}
              {this.state.counter} items
            </p>

            {/* Products */}

            <div className={styles.product__wrapper}>
              <div>
                <p className={styles.product__name}>Apollo Running Short</p>
                <p className={styles.product__price}>$50.00</p>

                <button
                  type="button"
                  className={`${styles.square__button} ${styles.attr__button}`}
                >
                  S
                </button>
                <button
                  type="button"
                  className={`${styles.square__button} ${styles.attr__button} ${styles['square__button--disabled']}`}
                >
                  M
                </button>
              </div>

              <div className={styles.counters}>
                <button
                  type="button"
                  className={`${styles.square__button} ${styles.counters__up}`}
                >
                  +
                </button>
                <span className={styles.counters__count}>1</span>
                <button
                  type="button"
                  className={`${styles.square__button} ${styles.counters__down}`}
                >
                  -
                </button>
              </div>

              <div className={styles.product__thumb}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                  className={styles.product__image}
                  alt=""
                  width="105"
                  height="137"
                />
              </div>
            </div>

            <div className={styles.product__wrapper}>
              <div>
                <p className={styles.product__name}>Apollo Running Short</p>
                <p className={styles.product__price}>$50.00</p>

                <button
                  type="button"
                  className={`${styles.square__button} ${styles.attr__button}`}
                >
                  S
                </button>
                <button
                  type="button"
                  className={`${styles.square__button} ${styles.attr__button} ${styles['square__button--disabled']}`}
                >
                  M
                </button>
              </div>

              <div className={styles.counters}>
                <button
                  type="button"
                  className={`${styles.square__button} ${styles.counters__up}`}
                >
                  +
                </button>
                <span className={styles.counters__count}>1</span>
                <button
                  type="button"
                  className={`${styles.square__button} ${styles.counters__down}`}
                >
                  -
                </button>
              </div>

              <div className={styles.product__thumb}>
                <img
                  src="https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg"
                  className={styles.product__image}
                  alt=""
                  width="105"
                  height="137"
                />
              </div>
            </div>

            <div className={styles.total}>
              <span className={styles.total__text}>Total</span>
              <span className={styles.total__price}>$100.00</span>
            </div>

            <div className={styles.buttons}>
              <Link
                to={routes.cart}
                className={`${styles.buttons__button} ${styles.buttons__view}`}
                onClick={this.toggleModal}
              >
                View bag
              </Link>

              <Link
                to={routes.checkout}
                className={`${styles.buttons__button} ${styles.buttons__check}`}
                onClick={this.toggleModal}
              >
                Check out
              </Link>
            </div>

            <button
              type="button"
              className={styles.close}
              onClick={this.toggleModal}
            >
              <ArrowImage />
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default CartPreview;
