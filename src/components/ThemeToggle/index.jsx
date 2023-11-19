import clsx from 'clsx';
import Image from 'next/image';
import Switch from '../UI/Switch';
import useTheme from '@/hooks/useTheme';
import { THEME_ICON_SIZE } from './data';
import PropTypes from 'prop-types';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ classes }) => {
  const { isDark, changeTheme } = useTheme();

  return (
    <Switch
      className={clsx(styles.root, { [styles.darkToggle]: isDark, [styles.lightToggle]: !isDark }, classes)}
      onClick={changeTheme}
      onKeyDown={changeTheme}
      checked={isDark}
      ariaLabel={`Switch between light and dark theme. Currently ${isDark ? 'dark' : 'light'} theme is selected`}
    >
      <Image className={clsx(styles.icon, styles.moonIcon)} src="/moon.png" alt="moon icon" {...THEME_ICON_SIZE} />
      <span className={clsx(styles.ball, isDark ? styles.darkBall : styles.lightBall)} />
      <Image className={clsx(styles.icon, styles.sunIcon)} src="/sun.png" alt="sun icon" {...THEME_ICON_SIZE} />
    </Switch>
  );
};

ThemeToggle.propTypes = {
  classes: PropTypes.string,
};

export default ThemeToggle;
