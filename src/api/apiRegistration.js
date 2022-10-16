import axios from '@/api/axios';

const postRegistrationUserAxios = (token, body) => {
  axios.defaults.headers.post['Token'] = token;
  return axios.post('/users', body, {});
};

export { postRegistrationUserAxios };
