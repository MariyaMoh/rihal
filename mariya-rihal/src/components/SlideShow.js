import React from 'react';
import oman from '../components/images/oman.png';
import spain from '../components/images/spain.png';
import styles from './SlideShow.module.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  //below each slide(country image) in the input text , there should be total num of students in each country
  return (
    <div className={styles.container}>
      <h2 className={styles.sctionTitle}>Countries</h2>
      <div className={styles.slideshow}>
        <div
          className={styles.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <div className={styles.slide} key={index}>
            <img className={styles.img} src={oman} alt="" />

            <input className={styles.input} type="text" name="oman" />
          </div>
          <div className={styles.slide} key={index + 1}>
            <img className={styles.img} src={spain} alt="" />
            <input className={styles.input} type="text" name="spain" />
          </div>
          <div className={styles.slide} key={index + 2}>
            <img className={styles.img} src={oman} alt="" />
            <input className={styles.input} type="text" name="oman" />
          </div>
          <div className={styles.slide} key={index + 3}>
            <img className={styles.img} src={spain} alt="" />
            <input className={styles.input} type="text" name="spain" />
          </div>
        </div>

        <div className={styles.slideshowDots}>
          {colors.map((_, idx) => (
            <div
              style={{ color: 'red' }}
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
