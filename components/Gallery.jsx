import React from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const Gallery = ({ data }) => {
  const res = data.results;
  console.log(res);
  return (
    <>
      {res !== undefined ? (
        res.map((photo) => (
          <Image
            className= {styles.images}
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
            width={250}
            height={250}
          />
        ))
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Gallery;
