import { Component } from 'react';

import styles from './Category.module.css';

class Category extends Component {
  render() {
    return (
      <main>
        <section className={styles.category}>
          <h1 className={styles.title}>Category name</h1>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default Category;
