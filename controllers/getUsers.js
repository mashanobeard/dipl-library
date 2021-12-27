import { getUser } from '../db/providers/users.js';

const getUsers = async (req, res) => {
  try {
    const data = await getUser();
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e.message);
  }
};
export default getUsers;
