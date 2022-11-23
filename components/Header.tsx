import styles from '../styles/components/Header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <a href="#">Informações</a>
      <a href="#">Projetos</a>
      <a href="#">Blog</a>
      <a href="#">Contato</a>
    </header>
  )
}