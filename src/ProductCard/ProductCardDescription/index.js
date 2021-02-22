import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

const ProductCardDescription = ({
  productName,
  description,
  buttonText,
  rating,
  url,
  iconButton
}) => {
  const renderButton = () => {
    if (buttonText) {
      return (
        <div className={styles['row']}>
          <a className={styles['buy-button']} href={url}>
            {buttonText}
          </a>
        </div>
      );
    } else {
      return null;
    }
  };
  const renderIcon = () => {
    if (iconButton) {
      return (
        <div className={styles['icon']}>
          <a href={url} style={{padding: '10px'}}>
            <FontAwesome name='bookmark'/>
            </a>
            <a ref={url} style={{padding: '10px'}} >
            <FontAwesome name='share-alt'/>
          </a>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className={styles['product-card-description-box']}>
      <div className={styles['product-card-name']}>{productName}</div>
      <p className={styles['product-card-description']}>{description}</p>
      {renderButton()}
      <p>{renderIcon()}</p>
    </div>
  );
};

export default ProductCardDescription;
