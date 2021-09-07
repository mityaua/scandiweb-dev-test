import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addProductSuccess } from '../../redux/cart/cart_action';

import styles from './SingleProduct.module.css';

class SingleProduct extends Component {
  state = {
    cover: '',
  };

  componentDidMount() {
    this.setState({ cover: this.props.product.gallery[0] });
  }

  addToCart = () => {
    this.props.dispatchToCart();

    alert('Added to cart');
  };

  handleAttributes = () => {
    alert('Selected');
  };

  handleCover = event => {
    this.setState({ cover: event.target.src });
  };

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
                  onClick={this.handleCover}
                />
              );
            })}
          </div>

          <div className={styles.cover}>
            <img
              src={this.state.cover}
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
            <p className={styles.subtitle}>{product.attributes[0].name}:</p>
          ) : null}

          {product.attributes.length > 0 ? (
            <div className={styles.attributes}>
              {product.attributes[0].items.map(item => {
                return (
                  <button
                    type="button"
                    className={styles.radio}
                    key={item.id}
                    onClick={this.handleAttributes}
                    style={{ backgroundColor: `${item.value}` }}
                    title={item.displayValue}
                  >
                    {product.attributes[0].name === 'Color'
                      ? ''
                      : item.displayValue}
                  </button>
                );
              })}
            </div>
          ) : null}

          <p className={styles.subtitle}>
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

const mapDispatchToProps = dispatch => ({
  dispatchToCart: () => dispatch(addProductSuccess()),
});

export default connect(null, mapDispatchToProps)(withRouter(SingleProduct));
