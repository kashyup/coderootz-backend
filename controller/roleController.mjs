import Role from '../models/Role.js';
import Menu from '../models/Menu.js';

export const createRole = async (req, res) => {
  const { name, menus } = req.body;

  try {
    const newRole = new Role({ name, menus });
    await newRole.save();

    res.status(201).json(newRole);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRole = async (req, res) => {
  const { roleId } = req.params;
  const { name, menus } = req.body;

  try {
    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }

    role.name = name;
    role.menus = menus;
    await role.save();

    res.json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find().populate('menus');
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
