import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

//&rarr;
//<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

export default function Home() {
  return (
    <div>
      <Head>
        <title>ADS - UNIFASIPE</title>
        <meta name="description" content="Análise e Desenvolvimento de Sistemas - UNIFASIPE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        
        <section className={styles.introduction}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              ANÁLISE E DESENVOLVIMENTO DE SISTEMAS
            </h1>

            <div className={styles.apresentation}>
              <p> Preparando você para o mercado de trabalho com uma metodologia
                focada em <span className={styles.bold__text}>hands-on</span> e
                com muito <span className={styles.bold__text}>networking</span>.
              </p>
              <button>
                <span>saiba mais &rarr;</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
