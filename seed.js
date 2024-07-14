import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js';
import Role from './models/Role.js';
import Menu from './models/Menu.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const seedDatabase = async () => {
  try {
    // Wait for the database connection to be established
    await mongoose.connection.once('open', async () => {
      console.log('Database connected');

      // Clear existing data
      await User.deleteMany({});
      await Role.deleteMany({});
      await Menu.deleteMany({});

      // Create menus
      const menuNames = [
        { name: 'Dashboard', path: '/' },
        { name: 'Profile', path: '/profile' },
        { name: 'Reports', path: '/reports' },
        { name: 'Settings', path: '/settings' },
        { name: 'Help', path: '/help' },
        { name: 'User Management', path: '/user-management' },
        { name: 'Role Management', path: '/role-management' },
      ];

      const menus = await Menu.insertMany(menuNames);

      // Create roles
      const superadminRole = new Role({
        name: 'Superadmin',
        menus: menus.map(menu => menu._id),
      });

      const userRole = new Role({
        name: 'User',
        menus: menus.filter(menu => menu.name !== 'User Management' && menu.name !== 'Role Management').map(menu => menu._id),
      });

      await superadminRole.save();
      await userRole.save();

      // Create superadmin user
      const hashedPassword = await bcrypt.hash('superadminpassword', 10);

      const superadminUser = new User({
        username: 'superadmin',
        password: hashedPassword,
        role: superadminRole._id,
      });

      await superadminUser.save();

      console.log('Database seeded successfully');
      process.exit();
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
