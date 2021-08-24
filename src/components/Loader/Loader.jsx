import { Component } from 'react';
import Template from 'react-loader-spinner';

import styles from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <Template type="Rings" color="#5ECE7B" height={100} width={100} />
      </div>
    );
  }
}

export default Loader;
