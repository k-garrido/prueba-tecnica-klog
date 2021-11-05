import Head from "next/head";
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
    apiRequest(topic);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Search your image</title>
        <meta name="description" content="Search image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <form onSubmit={receiveTopic} className= {styles.form}>
            <input
              type="text"
              placeholder="Type Something"
              id="name"
              className= {styles.textField}
              onChange={(e) => setTopic(e.target.value)}
            />
            <button type="submit" className= {styles.button}> Buscar </button>
          </form>
        <div className= {styles.gallery}>
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
