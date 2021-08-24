import { Component } from 'react';
import Navigation from '../Navigation';
import Logo from '../Logo';
import CurrencySwitcher from '../CurrencySwitcher';

import styles from './AppBar.module.css';

class AppBar extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Navigation />
        <Logo />
        <CurrencySwitcher />
      </header>
    );
  }
}

export default AppBar;
