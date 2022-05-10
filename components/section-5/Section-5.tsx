import logo1 from '../../public/images/logo_1.png'
import logo2 from '../../public/images/logo_2.png'
import logo3 from '../../public/images/logo_3.png'
import logo4 from '../../public/images/logo_4.png'
import logo5 from '../../public/images/logo_5.png'
import styles from './Section-5.module.css'
import Image from 'next/image'

export function SectionFive() {
  return (
    <div>
      <div className={styles.container}>
        <h2>All the best brands already use us.</h2>
        <div className={styles.logos}>
          <Image src={logo1} />
          <Image src={logo2} />
          <Image src={logo3} />
          <Image src={logo4} />
          <Image src={logo5} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={styles.action}>
        <h1>Get started today!</h1>
        <button className={styles.btn}>PICK A PLAN</button>
      </div>
    </div>
  )
}
