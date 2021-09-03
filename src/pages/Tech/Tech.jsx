import { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';

import ProductsList from '../../components/ProductsList';
import Loader from '../../components/Loader';

import styles from './Tech.module.css';

class Tech extends Component {
  componentDidMount() {
    document.title = 'Tech | Scandiweb Dev Test';
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
      category(input: { title: "tech" }) {
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
)(Tech);
