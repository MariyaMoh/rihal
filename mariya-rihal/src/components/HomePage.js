import React from 'react';
import styles from './HomePage.module.css';
import img1 from '../components/images/img1.jpg';
import img2 from '../components/images/img2.jpg';
import img3 from '../components/images/img3.jpg';
import img4 from '../components/images/img4.jpg';
import Slideshow from './SlideShow';
export default function HomePage() {
  return (
    <div className={styles.HomeCountainer} data-aos="fade-up">
      <div className={styles.topSection}>
        <div>
          {/* images with animation */}
          <img className={styles.img1Top1} src={img1} alt="" />
          <img className={styles.img1Top2} src={img2} alt="" />
          <img className={styles.img1Top3} src={img3} alt="" />
        </div>
        <div>
          <h3 className={styles.qout} data-aos="fade-down-left">
            The beautiful thing about learning is that no one can take it away
            from you.
          </h3>
        </div>
      </div>
      <div>
        <Slideshow />
      </div>
      {/*  there should be total num of students in each class (below the image-> in the input ) */}
      <div className={styles.ClassesSection}>
        <h2 className={styles.sctionTitle}>CLASSES</h2>
        <div data-aos="fade-down-left">
          <img className={styles.img1} src={img1} alt="" />
          <h3 className={styles.title1}>Front-end development</h3>
          <input className={styles.input} type="text" name="FE" />
        </div>
        <div data-aos="fade-down-right">
          <img className={styles.img2} src={img2} alt="" />
          <h3 className={styles.title2}>Interaction Desing</h3>
        </div>
        <div data-aos="fade-down-left">
          <img className={styles.img3} src={img3} alt="" />
          <h3 className={styles.title3}>Computer Science</h3>
        </div>
        <div data-aos="fade-down-right">
          <img className={styles.img4} src={img4} alt="" />
          <h3 className={styles.title4}>Data Science</h3>
        </div>
      </div>
    </div>
  );
}
