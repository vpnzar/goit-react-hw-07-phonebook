import axios from 'axios';

axios.defaults.baseURL = 'https://6192c7f3d3ae6d0017da82b6.mockapi.io/api/v1';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
