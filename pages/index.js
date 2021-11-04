import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Search your image</title>
        <meta name="description" content="Search image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Search an image :)
        </h1>
      </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}

