import axios from '@/api/axios';

const getTokenAxios = () => {
  return axios.get('/token');
};

export { getTokenAxios };
