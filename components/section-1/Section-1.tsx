import styles from './Section-1.module.css'

export function SectionOne() {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <h2>
          Create Stunning <br /> Email Campaigns
        </h2>
        <h6>
          Create and launch email campaigns that <br /> captivate your customers
          in just a few clicks.
        </h6>
        <div className={styles.actions}>
          <button>TRY NOW</button>
          <button className={styles.btnOutline}>GET A DEMO</button>
        </div>
      </div>
    </div>
  )
}
