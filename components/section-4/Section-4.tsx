import { CaseStudy } from '../CaseStudy/CaseStudy'
import photo1 from '../../public/images/photo_4.png'
import photo2 from '../../public/images/photo_5.png'
import photo3 from '../../public/images/photo_6.png'
import styles from './Section-4.module.css'

export function SectionFour() {
  const cases = [
    {
      name: 'Frankie',
      year: 2016,
      image: photo1,
    },
    {
      name: 'Camile',
      year: 2012,
      image: photo2,
    },
    {
      name: 'Elayne',
      year: 2018,
      image: photo3,
    },
  ]

  return (
    <div>
      <div className={styles.imagesBox}>
        {cases.map(({ name, year, image }) => (
          <div key={name}>
            <CaseStudy name={name} image={image} year={year} />
          </div>
        ))}
      </div>
      <br />
      <div className={styles.emailBox}>
        <h2>
          Learn how others are reaching their audience easier than ever before.
        </h2>
        <div className={styles.actions}>
          <input type='text' placeholder='Enter your email' />
          <button>JOIN OUR LIST</button>
        </div>
      </div>
    </div>
  )
}
