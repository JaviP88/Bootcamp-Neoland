import { useEffect, useState } from 'react';

import useAxios from '../Hooks/useAxios';

const getAnimationMovies = (URL) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await useAxios(URL);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [URL]);
  return data;
};

export default getAnimationMovies;
