import axios from '@/api/axios';

const getPositionsAxios = () => {
  return axios.get('/positions');
};

export { getPositionsAxios };
