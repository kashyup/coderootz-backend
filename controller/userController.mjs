import User from '../models/User.js';
import Role from '../models/Role.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const assignRoleToUser = async (req, res) => {
  const { roleId } = req.body;
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = roleId;
    await user.save();

    res.json({ message: 'Role assigned to user successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
