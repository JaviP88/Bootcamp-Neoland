import useAxios from '../Hooks/useAxios';

export const getImg = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://api.pexels.com/v1/search',
    params: { query, per_page: 1 },
    headers: {
      authorization: '3Oazpu81UvygEtY4Qh7nMNLCVkCcLbBzzIKtlvzBcQBXRf3OAB9GaW6D',
    },
  };
  return await useAxios(options);
};
