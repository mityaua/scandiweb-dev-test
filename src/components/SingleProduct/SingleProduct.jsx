import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './SingleProduct.module.css';

class SingleProduct extends Component {
  addToCart() {
    toast.success('Added to cart', {
      position: 'top-center',
      autoClose: 2000,
    });
  }

  handleAttributes() {
    toast.info('Selected', {
      position: 'top-center',
      autoClose: 2000,
    });
  }

  render() {
    const product = this.props.product;

    return (
      <article className={styles.product}>
        <div className={styles.gallery}>
          <div className={styles.gallery__thumbs}>
            {product.gallery.map(image => {
              return (
                <img
                  src={image}
                  key={image}
                  className={styles.gallery__thumb}
                  alt={product.name}
                  title={product.name}
                  width="79"
                  height="80"
                  loading="lazy"
                />
              );
            })}
          </div>

          <div className={styles.cover}>
            <img
              src={product.gallery[0]}
              className={styles.cover__image}
              alt={product.name}
              title={product.name}
              width="610"
              height="511"
              loading="lazy"
            />
          </div>
        </div>

        <aside className={styles.sidebar}>
          <h1 className={styles.title}>{product.name}</h1>

          {product.attributes.length > 0 ? (
            <p className={styles.text}>size:</p>
          ) : null}

          {product.attributes.length > 0 ? (
            <div>
              {product.attributes[0].items.map(item => {
                return (
                  <button
                    type="button"
                    className={styles.radio}
                    key={item.id}
                    onClick={this.handleAttributes}
                  >
                    {item.displayValue}
                  </button>
                );
              })}
            </div>
          ) : null}

          <p className={styles.text}>
            {product.inStock ? 'price' : 'last price'}:
          </p>
          <p className={styles.price}>${product.prices[0].amount}</p>

          <button
            type="button"
            className={styles.add}
            onClick={this.addToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? 'add to cart' : 'Out of stock'}
          </button>

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
        </aside>
      </article>
    );
  }
}

export default withRouter(SingleProduct);
