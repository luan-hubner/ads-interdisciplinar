import Footer from '../../components/Footer'
import Header from '../../components/Header'

import styles from '../../styles/pages/Matriz.module.css'

export default function Matriz() {
  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.container}>
        <h1>
          <img src="/assets/images/arrow-back.png" alt="Voltar" />
          MATRIZ CURRICULAR
        </h1>

        <table>
          <tr className={styles.table__header}>
            <td>FASE</td>
            <td>CH</td>
            <td>TURNO NORMAL</td>
            <td>TURNO NORMAL</td>
            <td>TURNO NORMAL</td>
            <td>TURNO NORMAL</td>
            <td>TURNO NORMAL</td>
            <td>TURNO NORMAL</td>
            <td>TURNO NORMAL</td>
          </tr>

          <tbody>
            <tr>
              <td>1º</td>
              <td>REDES DE COMPUTADORES II</td>
              <td>ALGORITMOS I</td>
              <td>LINGUAGEM DE PROGRAMAÇÂO</td>
              <td>DESENVOLVIMENTO WEB</td>
              <td>PROTOTIPAÇÂO</td>
              <td>ARQUITETURA DE COMPUTADORES</td>
              <td>REDES DE COMPUTADORES I</td>
              <td>PROGRAMAÇÂO ORIENTADA A OBJETOS</td>
            </tr>
            <tr>
              <td>2º</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3º</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4º</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4º</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </main>
  )
}
