import { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import styles from './CartPreview.module.css';

import { ReactComponent as CartImage } from '../../images/cart.svg';
import { ReactComponent as ArrowImage } from '../../images/arrow-up.svg';

import routes from '../../routes';

// Mock
import { data } from '../../products.json';

const body = document.querySelector('body');

class CartPreview extends Component {
  container = createRef();
  backdrop = createRef();

  state = {
    open: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleCartClick = () => {
    if (body.classList.contains(styles.hidden)) {
      body.classList.remove(styles.hidden);
    } else {
      body.classList.add(styles.hidden);
    }

    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });

      body.classList.remove(styles.hidden);
    }
  };

  handleClickBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    // Mock
    const products = data.categories[1].products;

    return (
      <div className={styles.wrapper} ref={this.container}>
        <button className={styles.button} onClick={this.handleCartClick}>
          <CartImage className={styles.cart} title="My Bag" alt="My Bag" />

          {products.length > 0 ? (
            <span className={styles.counter}>{products.length}</span>
          ) : null}
        </button>

        {this.state.open && (
          <div className={styles.backdrop} onClick={this.handleClickBackdrop}>
            <div className={styles.modal}>
              <p className={styles.title}>
                <span className={styles.title__name}>My Bag</span>,{' '}
                {products.length} items
              </p>

              {products.map(product => {
                return (
                  <div className={styles.product__wrapper} key={product.id}>
                    <div className={styles.product__content}>
                      <p className={styles.product__name}>{product.name}</p>
                      <p className={styles.product__price}>
                        ${product.prices[0].amount}
                      </p>

                      {/* Mock */}

                      <div>
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
                    </div>

                    <div className={styles.counters}>
                      <button
                        type="button"
                        className={`${styles.square__button} ${styles.counters__up}`}
                        onClick={() => alert('Increment')}
                      >
                        +
                      </button>
                      <span className={styles.counters__count}>1</span>
                      <button
                        type="button"
                        className={`${styles.square__button} ${styles.counters__down}`}
                        onClick={() => alert('Decrement')}
                      >
                        -
                      </button>
                    </div>

                    <div className={styles.product__thumb}>
                      <img
                        src={product.gallery[0]}
                        className={styles.product__image}
                        alt=""
                        width="105"
                        height="137"
                      />
                    </div>
                  </div>
                );
              })}

              <div className={styles.total}>
                <span className={styles.total__text}>Total</span>
                <span className={styles.total__price}>$100.00</span>
              </div>

              <div className={styles.buttons}>
                <Link
                  to={routes.cart}
                  className={`${styles.buttons__link} ${styles.buttons__view}`}
                  onClick={this.handleCartClick}
                >
                  View bag
                </Link>

                <Link
                  to={routes.checkout}
                  className={`${styles.buttons__link} ${styles.buttons__check}`}
                  onClick={this.handleCartClick}
                >
                  Check out
                </Link>
              </div>

              <button
                type="button"
                className={styles.close}
                onClick={this.handleCartClick}
              >
                <ArrowImage />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CartPreview;
