import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <img src={'/logoNB.png'} height="80%" width="80%" alt="Logo" />
      {/* <h4>Ann & Betty</h4> */}
    
    </div>
  );
};

export default Brand;
