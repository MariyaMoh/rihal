import React from 'react';
import styles from './UpdateStudent.module.css';

export default function UpdateStudent() {
  return (
    <div>
      <h2 className={styles.heading} data-aos="fade-right">
        Update Student Details
      </h2>

      <div className={styles.UpdateContainer} data-aos="zoom-in">
        <h3>Enter Student ID</h3>
        <div className={styles.item}>
          <h3>ID:</h3>
          <input className={styles.b1} type="text" name="class" />
          <button className={styles.buttons}>Search</button>
        </div>
        <br />

        <div className={styles.item}>
          <h3>Name:</h3>
          <input className={styles.b1} type="text" name="class" />
        </div>

        <div className={styles.item}>
          <h3>Country:</h3>
          <input className={styles.b1} type="text" name="class" />
          <button className={styles.buttons}>Update</button>
        </div>
      </div>
    </div>
  );
}
