import { Component } from 'react';

import styles from './CurrencySwitcher.module.css';

// Mock (need $ + USD in dropdown)
const options = [
  {
    label: '$',
    value: 'USD',
  },
  {
    label: '£',
    value: 'GBP',
  },
  {
    label: '¥',
    value: 'JPY',
  },
  {
    label: 'A$',
    value: 'AUD',
  },
  {
    label: '₽',
    value: 'RUB',
  },
];

class CurrencySwitcher extends Component {
  state = {
    value: 'USD',
  };

  handleChange = event => {
    console.log(`Currency selected! ${event.target.value}`);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form>
        <select
          className={styles.select}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {options.map(option => (
            <option
              className={styles.option}
              value={option.value}
              key={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

export default CurrencySwitcher;
