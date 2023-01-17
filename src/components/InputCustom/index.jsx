import React from 'react';
import styles from './inputCuston.module.css';

export default function InputCustom({ id, name, label, ...rest }) {
  return (
    <div className={styles.contenLabelInput}>
      <label htmlFor={id}>{label}</label>
      <input {...rest} type="number" name={name} id={id} min="0" />
    </div>
  );
}
