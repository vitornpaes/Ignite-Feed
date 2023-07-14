import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

export function Avatar({ hasBorder, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder}
      src={src}
    />
  );
}

Avatar.propTypes = {
  hasBorder: PropTypes.bool,
  src: PropTypes.string.isRequired,
};