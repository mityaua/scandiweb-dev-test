import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './ProductsItem.module.css';

import routes from '../../routes';

import { ReactComponent as EmpryCart } from '../../images/empty-cart.svg';

class ProductsItem extends Component {
  addToCart = () => {
    alert('Added to cart');
  };

  render() {
    const product = this.props.product;
    const stockStatus = product.inStock
      ? styles.item
      : `${styles.item} ${styles['item--none']}`;

    return (
      <li className={stockStatus}>
        <Link
          to={{
            pathname: `${routes.clothes}/${product.id}`,
            state: { from: this.props.location },
          }}
          className={styles.item__link}
        >
          <article>
            <div className={styles.item__thumb}>
              <img
                src={product.gallery[0]}
                className={styles.item__image}
                width="356"
                height="338"
                title={product.name}
                alt={product.name}
              />
            </div>

            {!product.inStock && (
              <p className={styles.item__out}>Out of stock</p>
            )}

            <div className={styles.item__content}>
              <h2 className={styles.item__title}>{product.name}</h2>
              <p className={styles.item__price}>${product.prices[0].amount}</p>
            </div>
          </article>
        </Link>

        {product.inStock && (
          <button
            type="button"
            className={styles.item__cart}
            onClick={this.addToCart}
            title="Add to cart"
            alt="Add to cart"
          >
            <EmpryCart />
          </button>
        )}
      </li>
    );
  }
}

export default withRouter(ProductsItem);
