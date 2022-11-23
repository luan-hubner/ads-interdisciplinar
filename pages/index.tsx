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
        <meta
          name="description"
          content="Análise e Desenvolvimento de Sistemas - UNIFASIPE"
        />
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
              <p>
                {' '}
                Preparando você para o mercado de trabalho com uma metodologia
                focada em <span className={styles.bold__text}>hands-on</span> e
                com muito <span className={styles.bold__text}>networking</span>.
              </p>
              <button>
                <span>saiba mais &rarr;</span>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.information}>
          <div className={styles.container}>
            <div className={styles.about__course}>
              <div className={styles.section__header}>
                <h5>/about</h5>
                <h1>POR QUE ADS?</h1>
              </div>

              <div className={styles.text}>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>

                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source.
                </p>

                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                  Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance.
                </p>

                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>

            <div className={styles.section__caller}>
              <h1>COMO ISSO ME PREPARA PARA O MERCADO DE TRABALHO?</h1>

              <div className={styles.text}>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>

                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source.
                </p>

                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                  Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics.
                </p>
              </div>

              <button className={styles.default__button}>
                <span>INSCREVA-SE</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
