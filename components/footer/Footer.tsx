import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import IconMailFooter from '../../public/icons/mail_footer.png'

export function Footer() {
  const links = [
    { name: 'Features', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'Partners', href: '/' },
  ]
  const util = [
    { name: 'About Us', href: '/' },
    { name: 'Tutorials', href: '/' },
    { name: 'Resources', href: '/' },
    { name: 'Help Center', href: '/' },
    { name: 'Templates', href: '/' },
    { name: 'Case Studies', href: '/' },
  ]
  const socialMedia = [
    { name: 'Medium', href: '/' },
    { name: 'Twitter', href: '/' },
    { name: 'Facebook', href: '/' },
    { name: 'Instagram', href: '/' },
    { name: 'LinkedIn', href: '/' },
  ]
  const contacts = [
    { name: 'Contact Us', href: '/' },
    { name: 'Slack', href: '/' },
    { name: 'Jobs', href: '/' },
  ]

  return (
    <footer>
      <div className={styles.footerInfo}>
        <Link href='/'>
          <a>
            <Image
              src={IconMailFooter}
              alt='NinjaMail'
              width={128}
              height={38}
            />
          </a>
        </Link>
        {/* TODO: extrair a repetição de da listagem para um novo componente */}
        <div className={styles.containerLinks}>
          <div className={styles.boxLinks}>
            <div className={styles.footerLinks}>
              {links.map(({ name, href }) => (
                <a href={href} key={name}>
                  {name}
                </a>
              ))}
            </div>
            <div className={styles.footerLinks}>
              {util.map(({ name, href }) => (
                <a href={href} key={name}>
                  {name}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.boxLinks}>
            <div className={styles.footerLinks}>
              {socialMedia.map(({ name, href }) => (
                <a href={href} key={name}>
                  {name}
                </a>
              ))}
            </div>
            <div className={styles.footerLinks}>
              {contacts.map(({ name, href }) => (
                <a href={href} key={name}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <div>
          NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
          rights reserved.
        </div>

        <div className={styles.terms}>
          <a href='#'>Terms & Conditions</a>
          <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
