import { Component } from 'react';

import styles from './Product.module.css';

import { data } from '../../product.json';
const attributes = data.product.attributes[0].items;

class Product extends Component {
  handleClick() {
    alert('Added to cart');
  }

  handleAttributes() {
    alert('Selected');
  }

  render() {
    return (
      <main className={styles.main}>
        <article className={styles.product}>
          <div className={styles.gallery}>
            {/* Preview images */}
            <div className={styles.gallery__thumbs}>
              {data.product.gallery.map(image => {
                return (
                  <img
                    src={image}
                    className={styles.gallery__thumb}
                    width="79"
                    height="80"
                    alt={data.product.name}
                    title={data.product.name}
                    key={image}
                  />
                );
              })}
            </div>

            {/* Main image */}
            <img
              src={data.product.gallery[0]}
              className={styles.gallery__main}
              width="610"
              height="511"
              alt={data.product.name}
              title={data.product.name}
            />
          </div>

          <aside className={styles.sidebar}>
            <h1 className={styles.title}>{data.product.name}</h1>

            <p className={styles.text}>size:</p>

            {/* Radiobuttons in future */}
            <div>
              {attributes.map(item => {
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

            <p className={styles.text}>price:</p>
            <p className={styles.price}>$50.00</p>

            <button
              type="button"
              className={styles.add}
              onClick={this.handleClick}
            >
              add to cart
            </button>

            <p className={styles.description}>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </aside>
        </article>
      </main>
    );
  }
}

export default Product;
