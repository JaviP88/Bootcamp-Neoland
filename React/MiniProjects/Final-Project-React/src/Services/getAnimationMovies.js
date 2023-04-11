import useAxios from '../Hooks/useAxios';

export const getAnimationMovies = async () => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_APP_APIKEY
    }&with_genres=16`,
  };
  return await useAxios(options);
};
