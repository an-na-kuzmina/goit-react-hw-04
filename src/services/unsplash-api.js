import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (page = 1, query = 'nature') => {
  const { data } = await axios.get('/search/photos', {
    params: {
      client_id: '5STmvl5H74ZW9wccRQc24LaB6LGJWcOHg7B0r_dY8F4',
      query,
      per_page: 16,
      page,
    },
  });
  return data;
};
