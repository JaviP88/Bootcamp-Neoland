import React, { useEffect, useState } from 'react';

import { getImg } from '../../Services/getImg';

const FindImg = ({ movieName }) => {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    (async () => {
      setPhoto(await getImg(movieName));
    })();
  }, []);

  return (
    <>
      {photo.photos?.length == 0 && (
        <img
          className="imgMovieNotFound"
          src="data:image/jpeg;base64,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"
          alt="imagen generica"
        />
      )}
      {photo.photos?.map((image) => {
        return (
          photo.photos.length > 0 && (
            <div key={image.alt}>
              <img className="imgMovieFinded" src={image.src.original} alt={image.alt} />
            </div>
          )
        );
      })}
    </>
  );
};

export default FindImg;
