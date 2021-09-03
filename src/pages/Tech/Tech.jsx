import { Component } from 'react';
import { connect } from 'react-redux';

import ProductsList from '../../components/ProductsList';
import { getCategories } from '../../redux/categories/categories_operations';

import styles from './Tech.module.css';

// Mock
import { data } from '../../products.json';

class Tech extends Component {
  componentDidMount() {
    this.props.onLoad();
    document.title = 'Tech | Scandiweb Dev Test';
  }

  render() {
    // Mock
    const products = data.categories[1].products;
    const categoryName = data.categories[1].name;

    return (
      <main>
        <section className={styles.category}>
          <h1 className={styles.title}>{categoryName}</h1>

          <ProductsList products={products} category={categoryName} />
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getCategories()),
});

export default connect(null, mapDispatchToProps)(Tech);
