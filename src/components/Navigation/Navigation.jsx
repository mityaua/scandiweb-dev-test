import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

import routes from '../../routes';

class Navigation extends Component {
  render() {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to={routes.home}
            className={styles.link}
            activeClassName={styles['link--active']}
          >
            clothes
          </NavLink>
        </li>

        <li className={styles.item}>
          <a href="/" className={styles.link}>
            tech
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
