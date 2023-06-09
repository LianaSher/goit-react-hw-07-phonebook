import axios from 'axios';

const BASE_URL = 'https://642841be161067a83b0a56ec.mockapi.io/api';

export const getContacts = async () => {
  const data = await axios.get(`${BASE_URL}/contacts`);

  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post(`${BASE_URL}/contacts`, data);

  return result;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};
