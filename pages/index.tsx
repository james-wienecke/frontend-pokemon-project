import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PokemonList from '../components/PokemonList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon API Explorer</title>
        <meta name="description" content="Frontend focused simple project for exploring the Pokemon API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pokemon Explorer
        </h1>
        <PokemonList />
      </main>

      <footer className={styles.footer}>
        <a 
          href="https://github.com/james-wienecke"
          target="_blank"
          rel="noopener noreferrer"
        >
          James Wienecke (2022)
        </a>
      </footer>
    </div>
  )
}

export default Home
