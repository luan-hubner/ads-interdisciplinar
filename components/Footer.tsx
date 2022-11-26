import styles from '../styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.list}>
            <a href="">Informações</a>
            <a href="">Projetos</a>
            <a href="">News</a>
            <a href="">Blog</a>
            <a href="">Contato</a>
          </div>
          <div className={styles.list}>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">YouTube</a>
          </div>
        </div>

        <div className={styles.additional}>
          <img src="/assets/images/fasipe.png" alt="Fasipe Logo" />

          <span>
            código fonte{' '}
            <img src="/assets/images/mini-github.png" alt="GitHub Logo" />
          </span>
        </div>
      </div>
    </footer>
  )
}
