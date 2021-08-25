import { Component } from 'react';
import Modal from '../Modal';

import styles from './CartPreview.module.css';

import { ReactComponent as CartImage } from '../../images/cart.svg';
import { ReactComponent as ArrowImage } from '../../images/arrow-up.svg';

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
      <div className={styles.outer}>
        <div className={styles.inner} onClick={this.toggleModal}>
          <CartImage className={styles.cart} title="My Bag" alt="My Bag" />

          {this.state.counter ? (
            <span className={styles.counter}>{this.state.counter}</span>
          ) : null}
        </div>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p className={styles.title}>
              <span className={styles.title__name}>My Bag</span>,{' '}
              {this.state.counter} items
            </p>

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
