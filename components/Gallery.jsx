import React from "react";
import Image from 'next/image'

const Gallery = ({ data }) => {
  const res = data.results;
  console.log(res);
  // if (res !== undefined) {
  //   return (
  //     
  //   )
  // }
  return (
    <>
    { res !== undefined
    ? ( res.map ((photo) => (
        <div key= {photo.id}>
              <Image
              src={photo.urls.small}
              alt="Picture of the author"
               width={200} 
              height={200}
            />
            </div>
    ))
    )
    : (<h2>pues no</h2>)

    }
      {/* {
      if (res !== undefined) {
        res.map((result) => (
        
          <Link
            key={room.id}
            to={"/chat/" + room.id + "/" + room.name}
            className={classes.ancla}
          >
           
          </Link>
        ))
      }
      }
       */}
    </>
  );
};

export default Gallery;
