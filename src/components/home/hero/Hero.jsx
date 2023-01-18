import React from 'react';
import * as styles from './hero.module.scss';

const Hero = () => {
  const col = 3;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={`col-${col} col-sm-6 col-md-12 ${styles.bc}`}>
            {col}
          </div>
          <div className={`col-${col} col-sm-6 col-md-12 ${styles.bc}`}>
            {col}
          </div>
          <div className={`col-${col} col-sm-6 col-md-12 ${styles.bc}`}>
            {col}
          </div>
          <div className={`col-${col} col-sm-6 col-md-12 ${styles.bc}`}>
            {col}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
