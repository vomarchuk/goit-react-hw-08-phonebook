import axios from 'axios';

const URL = 'http://localhost:4040';

export const getContacts = async () => {
  try {
    const { data } = await axios.get(`${URL}/contacts`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
