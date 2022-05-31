import React from 'react';
import styles from './DeleteStudent.module.css';
import axios from 'axios';

export default function DeleteStudent() {
  const deleteStudent = async (event) => {
    console.log(event);
    // await axios.delete(`http://localhost:3000/students/${id}`).then((e) => {
    //   console.log(e);
    // });
    console.log('Succeded ');
  };
  return (
    <div>
      <h2 data-aos="fade-right">Delete Student</h2>
      <div className={styles.DeleteContainer} data-aos="zoom-in">
        <h3>Enter Student id :</h3>
        <input type="text" name="name" />
        <button className={styles.button1} onClick={deleteStudent()}>
          Delete
        </button>
      </div>
    </div>
  );
}
