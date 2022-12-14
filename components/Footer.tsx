import { Link } from 'react-scroll'

import styles from '../styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.list}>
            <Link to="introduction" smooth={true} duration={600}>
              <a href="#">Informações</a>
            </Link>
            <Link to="projects" smooth={true} duration={600}>
              <a href="#">Projetos</a>
            </Link>
            <Link to="blog" smooth={true} duration={600}>
              <a href="#">Blog</a>
            </Link>
            <a href="#">Contato</a>
          </div>
          <div className={styles.list}>
            <a href="https://www.instagram.com/adsunifasipe/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="">Facebook</a>
            <a href="">YouTube</a>
          </div>
        </div>

        <div className={styles.additional}>
          <img src="/assets/images/fasipe.png" alt="Fasipe Logo" />

          <span onClick={() => window.open('https://github.com/luan-hubner/ads-interdisciplinar')}>
            código fonte <img src="/assets/images/mini-github.png" alt="GitHub Logo" />
          </span>
        </div>
      </div>
    </footer>
  )
}
