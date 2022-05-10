import { Tumb } from '../tumb/Tumb'
import tumbImage1 from '../../public/images/photo_3.png'
import tumbImage2 from '../../public/images/photo_2.png'
import styles from './Section-3.module.css'

export function SectionThree() {
  return (
    <div className={styles.background}>
      <div className={styles.tumb + ' ' + styles.tumb1}>
        <Tumb
          link='/'
          path={tumbImage2}
          text='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.'
        ></Tumb>
      </div>
      <div className={styles.tumb + ' ' + styles.tumb2}>
        <Tumb
          link='/'
          path={tumbImage1}
          text='Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.'
        ></Tumb>
      </div>
      <div className={styles.text}>
        <h2>The source for proven, engaging email campaigns</h2>
        <div>
          Whether you’re a startup, small business, e-commerce store, or want to
          promote your app, NinjaMail has the feature set tailored for your
          business.
        </div>
      </div>
    </div>
  )
}
