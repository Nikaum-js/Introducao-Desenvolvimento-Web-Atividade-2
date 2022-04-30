import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.professordaniloalves.com.br/api/v1/',
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       if (error.response.data.code === 'jwt is missing!') {
//         signOut();
//       }
//     }
//   },
// );

export default api;
