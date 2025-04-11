import styles from './ui.module.css';
import { css } from '../../styled-system/css';
export function Ui() {
  return (
    <div className={css({ bg: 'primaryLight' })}>
      <h1>Welcome to some Ui!</h1>
    </div>
  );
}

export default Ui;
