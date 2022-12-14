import React, { useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Project from '../components/Project'
import Post from '../components/Post'
import Footer from '../components/Footer'

import { Link } from 'react-scroll'
import ModalTopic from '../components/ModalTopic'
import Image from 'next/image'

//&rarr;
//<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

interface ModalData {
  title: string
  content: string
}

export default function Home() {
  const [modalTopicIsOpen, setModalTopicIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
  })

  // let modalData: ModalData =

  function handleModalTopicOpen(props?: ModalData) {
    if (props) {
      setModalContent(props)
    }
    setModalTopicIsOpen((prev) => !prev)
  }

  const studyTopics = [
    {
      title: 'WEB DEVELOPMENT',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'ALGORITHMS',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'PROGRAMMING LOGIC',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'COMPUTER ARCHITECTURE',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'DATA STRUCTURE',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'NETWORKS',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'GRAPHIC COMPUTING',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
  ]

  return (
    <div>
      <Head>
        <title>ADS - UNIFASIPE</title>
        <meta name="description" content="An??lise e Desenvolvimento de Sistemas - UNIFASIPE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalTopic handleOpen={handleModalTopicOpen} isOpen={modalTopicIsOpen} data={modalContent} />

      <main className={styles.main}>
        <Header />

        <section id="introduction" className={styles.introduction}>
          <div className={styles.container}>
            <h1 className={styles.title}>AN??LISE E DESENVOLVIMENTO DE SISTEMAS</h1>

            <div className={styles.apresentation}>
              <p>
                Preparando voc?? para o mercado de trabalho com uma metodologia focada em{' '}
                <span className={styles.bold__text}>hands-on</span> e com muito{' '}
                <span className={styles.bold__text}>networking</span>.
              </p>
              <button>
                <span>saiba mais &rarr;</span>
              </button>
            </div>
          </div>

          <Link
            className={styles.arrow__down}
            activeClass="active"
            to="information"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Image src="/assets/images/arrow-down.png" alt="Scroll Down" width={90} height={50} />
          </Link>
        </section>

        <section id="information" className={styles.information}>
          <div className={styles.container}>
            <div className={styles.about__course}>
              <div className={styles.section__header}>
                <h5>/about</h5>
                <h1>POR QUE ADS?</h1>
              </div>

              <div className={styles.text}>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old.
                </p>

                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
                  in classical literature, discovered the undoubtable source.
                </p>

                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                  of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance.
                </p>

                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
                  their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>

            <div className={styles.section__caller}>
              <h1>COMO ISSO ME PREPARA PARA O MERCADO DE TRABALHO?</h1>

              <div className={styles.text}>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old.
                </p>

                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
                  in classical literature, discovered the undoubtable source.
                </p>

                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                  of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.
                </p>
              </div>

              <button className={styles.default__button}>
                <span>INSCREVA-SE</span>
              </button>
            </div>
          </div>
        </section>

        <section id="study" className={styles.study}>
          <div className={styles.container}>
            <div className={styles.section__header}>
              <div className={styles.indicator}>
                <h5>/study</h5>
                <h1>O QUE VOU ESTUDAR?</h1>
              </div>

              <div className={styles.info}>
                <p>
                  S?? para voc?? ter um gostinho do que esse curso tem a lhe oferecer, conhe??a os principais t??picos que
                  voc?? ir?? aprender durante o nosso curso.
                </p>
                <p>
                  Se voc?? desejar conhe??a a nossa{' '}
                  <b onClick={() => (window.location.href = '/matriz')}>matriz curricular</b> completa.
                </p>
              </div>
            </div>

            <div className={styles.course__content}>
              {studyTopics.map((topic) => (
                <div className={styles.topic} onClick={() => handleModalTopicOpen(topic)}>
                  <h2>{topic.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={styles.hands__on}>
          <div className={styles.container}>
            <div className={styles.section__header}>
              <div className={styles.indicator}>
                <h5>/hands-on</h5>
                <h1>MUITA PROGRAMA????O</h1>
              </div>

              <div className={styles.info}>
                <p>
                  Nosso curso n??o exige um TCC para voc?? se formar, por??m, todo semestre, exceto no primeiro, voc?? ter??
                  que entregar um projeto interdisciplinar, ser??o 4 projetos ao longo de 4 semestres aonde voc?? mostrar??
                  na pr??tica o que aprendeu, conhe??a alguns projetos dos nossos alunos.
                </p>
              </div>
            </div>

            <div className={styles.projects}>
              <Project student="Luan Hubner" project="Website" repository="www.google.com" imageUrl="minicode.png" />
              <Project student="Luan Hubner" project="Website" repository="www.google.com" imageUrl="minicode.png" />
              <Project student="Luan Hubner" project="Website" repository="www.google.com" imageUrl="minicode.png" />
            </div>

            <button className={styles.default__button}>
              <span>VER MAIS</span>
            </button>
          </div>
        </section>

        <section id="blog" className={styles.blog}>
          <div className={styles.container}>
            <div className={styles.section__header}>
              <div className={styles.indicator}>
                <h5>/blog</h5>
                <h1>NOSSAS POSTAGENS</h1>
              </div>

              <div className={styles.info}>
                <p>
                  Usamos esse espa??o para postar algumas das atividades que realizamos durante o curso, not??cias e
                  eventos que acontecem no nosso Centro Universit??rio, venha conhecer um pouco mais de perto o nosso
                  curso.
                </p>
              </div>
            </div>

            <div className={styles.posts}>
              <Post
                id={1}
                title="Lorem Ipsum is not simply random text"
                summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                imageUrl="tech.png"
              />
              <Post
                id={1}
                title="Lorem Ipsum is not simply random text"
                summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                imageUrl="farm.png"
              />
              <Post
                id={1}
                title="Lorem Ipsum is not simply random text"
                summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                imageUrl="industry.png"
              />
            </div>

            <button className={styles.default__button}>
              <span>VER MAIS</span>
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
