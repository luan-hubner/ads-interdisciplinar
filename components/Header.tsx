import { Link } from 'react-scroll'
import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="informations" smooth={true} duration={600}>
        <a href="#">Informações</a>
      </Link>
      <Link to="projects" smooth={true} duration={600}>
        <a href="#">Projetos</a>
      </Link>
      <Link to="blog" smooth={true} duration={600}>
        <a href="#">Blog</a>
      </Link>
    </header>
  )
}
