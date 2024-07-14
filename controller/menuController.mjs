import Menu from '../models/Menu.js';

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMenu = async (req, res) => {
  const { name, icon } = req.body;
  try {
    const newMenu = new Menu({ name, icon });
    await newMenu.save();

    res.status(201).json({ message: 'Menu created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
