import { Component } from 'react';

import ProductsList from '../../components/ProductsList';
import Loader from '../../components/Loader';

import styles from './Category.module.css';

class Category extends Component {
  componentDidMount() {
    document.title = 'Clothes | Scandiweb Dev Test';
  }

  render() {
    const category = this.props.category;
    const loading = this.props.loading;
    const error = this.props.error;

    return (
      <main>
        <section className={styles.category}>
          {category.name && <h1 className={styles.title}>{category.name}</h1>}

          {category && (
            <ProductsList
              products={category.products}
              category={category.name}
            />
          )}
        </section>

        {error && <p>{JSON.stringify(error.message)}</p>}

        {loading && <Loader />}
      </main>
    );
  }
}

export default Category;
