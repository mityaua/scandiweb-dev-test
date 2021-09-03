import { Component } from 'react';
import { connect } from 'react-redux';

import ProductsList from '../../components/ProductsList';
import { getCategories } from '../../redux/categories/categories_operations';

import styles from './Category.module.css';

// Mock
import { data } from '../../products.json';

class Category extends Component {
  componentDidMount() {
    this.props.onLoad();
    document.title = 'Clothes | Scandiweb Dev Test';
  }

  render() {
    // Mock
    const products = data.categories[0].products;
    const categoryName = data.categories[0].name;

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

export default connect(null, mapDispatchToProps)(Category);
