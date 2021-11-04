import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Gallery from "../components/Gallery";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState([]);

  const apiRequest = async (query) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}`,
      {
        headers: {
          Authorization:
            " Client-ID eK12-Io5ENa5o3-riad0DqbVnipfZFZUz-7GP8DFW5Y",
        },
      }
    );
    const apiData = await res.json();
    setData(apiData);
  };

  const receiveTopic = async (e) => {
    e.preventDefault();
    apiRequest(topic)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Search your image</title>
        <meta name="description" content="Search image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Search an image :)</h1>
        <div>
          <form onSubmit={receiveTopic}>
            <input
              type="text"
              placeholder="Type Something"
              id="name"
              onChange={(e) => setTopic(e.target.value)}
            />
            <button type="submit"> Buscar </button>
          </form>
        </div>
        <div>
          <Gallery data={data} />
        </div>
      </main>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${topic}`, {
//     headers: {
//       Authorization:' Client-ID eK12-Io5ENa5o3-riad0DqbVnipfZFZUz-7GP8DFW5Y'
//   }})
//   const data = await res.json()

//   return { props: { data } }
// }
