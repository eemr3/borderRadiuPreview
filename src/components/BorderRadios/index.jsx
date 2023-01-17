import React from 'react';
import styles from './borderRadius.module.css';
export default function BorderRadios({ topLeft, topRight, bottonLeft, bottonRight }) {
  return (
    <div
      style={{
        borderRadius: `${topLeft}px ${topRight}px ${bottonRight}px  ${bottonLeft}px`,
      }}
      className={styles.borderRadiusContainder}
    ></div>
  );
}
