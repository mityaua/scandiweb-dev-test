import { Component } from 'react';
import { connect } from 'react-redux';

import ProductsList from '../../components/ProductsList';
import { getCategories } from '../../redux/categories/categories_operations';

import styles from './Category.module.css';

// Mock
import products from '../../products.json';

class Category extends Component {
  componentDidMount() {
    this.props.onLoad();
    document.title = 'Category | Scandiweb Dev Test';
  }

  render() {
    return (
      <main>
        <section className={styles.category}>
          <h1 className={styles.title}>Clothes</h1>

          <ProductsList products={products} />
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = distatch => ({
  onLoad: () => distatch(getCategories()),
});

export default connect(null, mapDispatchToProps)(Category);
