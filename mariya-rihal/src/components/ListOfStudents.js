import React from 'react';
import axios from 'axios';
import styles from './ListOfStudents.module.css';

export default function ListOfStudents() {
  const [students, setStudents] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3000/students/').then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div>
      {/*  by clicking the button you will get total num of student in each class */}
      <h2 data-aos="fade-right">List of Student</h2>
      <div className={styles.SearcheContainer} data-aos="zoom-in">
        <button className={styles.buttons}>Front-end development</button>
        <button className={styles.buttons}>Intraction Design</button>
        <button className={styles.buttons}>Data Sciense</button>
        {students ? (
          students.map((student) => {
            return (
              <div key={student.id}>
                <h4>{student.name} </h4>
                <h4> {student.id} </h4>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
        <input className={styles.b1} type="text" name="class" />
      </div>
    </div>
  );
}
