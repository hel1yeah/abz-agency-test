import axios from '@/api/axios';

const getUsersAxios = (page, count) => {
  return axios.get(`/users?page=${page}&count=${count}`);
};

export { getUsersAxios };
