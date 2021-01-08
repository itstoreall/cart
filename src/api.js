import axios from 'axios';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const setToken = (token) => {
   axios.defaults.headers.common['Authorization'] = token;
};

export const login = userData =>
   axios.post('/users/login', userData).then(({ data }) => {
      setToken(data.token);

   return data;
});

export const logout = () => axios.post('/users/logout');

export const getContacts = () =>
   axios.get('/contacts').then(({ data }) => data);

export const addContact = payload =>
   axios.post('/contacts', payload).then(({ data }) => data);

export const deleteContact = id => axios.delete(`/contacts/${id}`);
