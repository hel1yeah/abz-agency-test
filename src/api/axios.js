import axios from 'axios';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

axios.defaults.baseURL = `${BASE_URL}/`;
axios.defaults.headers.post['Token'] = '';
axios.defaults.params;

export default axios;
