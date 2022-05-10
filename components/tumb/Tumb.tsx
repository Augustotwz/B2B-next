import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import styles from './Tumb.module.css'

export function Tumb({
  path,
  text,
  link,
}: {
  path: StaticImageData
  text: string
  link: string
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={path} />
      </div>
      <div className={styles.text}>
        {text}
        <br />
        <Link href={link}>
          <a>Learn More &gt;</a>
        </Link>
      </div>
    </div>
  )
}
