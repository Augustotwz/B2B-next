import Image, { StaticImageData } from 'next/image'
import styles from './CaseStudy.module.css'

export function CaseStudy({
  name,
  year,
  image,
}: {
  name: string
  year: number
  image: StaticImageData
}) {
  return (
    <a href='#'>
      <div className={styles.image}>
        <Image src={image} layout='responsive' />
        <div className={styles.text}>
          <div>{name}</div>
          <div className={styles.date}>Member since {year}</div>
        </div>
      </div>
    </a>
  )
}
