import React from 'react';
import styles from './index.module.scss';
import HomePage from './home/home';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
};

export default Home;
