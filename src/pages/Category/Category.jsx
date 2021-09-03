import { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';

import ProductsList from '../../components/ProductsList';
import Loader from '../../components/Loader';

import styles from './Category.module.css';

class Category extends Component {
  componentDidMount() {
    document.title = 'Clothes | Scandiweb Dev Test';
  }

  render() {
    const { data } = this.props;
    const { loading, error } = data;

    return (
      <main>
        <section className={styles.category}>
          {data.category && (
            <h1 className={styles.title}>{data.category.name}</h1>
          )}

          {data.category && (
            <ProductsList
              products={data.category.products}
              category={data.category.name}
            />
          )}
        </section>

        {error && <p>{JSON.stringify(data.error.message)}</p>}

        {loading && <Loader />}
      </main>
    );
  }
}

export default graphql(
  gql`
    query {
      category(input: { title: "clothes" }) {
        name
        products {
          id
          name
          inStock
          gallery
          category
          prices {
            currency
            amount
          }
        }
      }
    }
  `,
)(Category);
