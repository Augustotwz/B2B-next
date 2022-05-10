import Link from 'next/link'
import Image from 'next/image'
import IconMailHeader from '../../public/icons/mail_header.png'
import styles from './Header.module.css'

export function Header() {
  const links = [
    { name: 'FEATURES', href: '/' },
    { name: 'PRICING', href: '/' },
    { name: 'SERVICES', href: '/' },
    { name: 'PARTNERS', href: '/' },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <Link href='/'>
            <a>
              <Image
                src={IconMailHeader}
                alt='NinjaMail'
                width={84}
                height={42}
              />
              <span>NinjaMail</span>
            </a>
          </Link>
        </div>
        <div className={styles.navList}>
          <ul className={styles.ul}>
            {links.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button className={styles.btn}>SIGN UP FREE</button>
        </div>
      </nav>
    </header>
  )
}
