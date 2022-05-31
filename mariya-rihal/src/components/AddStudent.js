import React, { useState } from 'react';
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './AddStudent.module.css';

export default function AddStudent() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <h2 data-aos="fade-right">Add New Student</h2>

      <div className={styles.AddContainer} data-aos="zoom-in">
        <h3>Stuent Name :</h3> <input type="text" name="name" />
        <h3>Select Student Date of Birth</h3>
        <DataPicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
        />
        <h3>Select class :</h3>
        <select name="selectList" id="selectList">
          <option value="option 1">FE</option> 
          <option value="option 2">ID</option>
          <option value="option 2">ME</option>
        </select>
        <h3>choose country :</h3>
        <select name="selectList" id="selectList">
          <option value="option 1">FE</option> 
          <option value="option 2">ID</option>
          <option value="option 2">ME</option>
        </select>
        <br />
        <button className={styles.button1}>Insert</button>
      </div>
    </div>
  );
}
