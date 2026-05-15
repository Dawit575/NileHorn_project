import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser } from '../model/userModel.js';
import db from '../config/db.js';

export const createAdmin = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  if (!user_name || !user_email || !user_password) {
    return res.status(400).json({
      message: 'All fields are required.',
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(user_password, 10);

    createUser(user_name, user_email, hashedPassword, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: 'Database Error',
          error,
        });
      }

      return res.status(201).json({
        message: 'Admin register successfully.',
        id: result.insertId,
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
      error: error.message,
    });
  }
};


export const loginAdmin = (req, res) => {
  const { user_email, user_password } = req.body;

  findUserByEmail(user_email, async (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'Database Error',
        error,
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: 'Admin not found.',
      });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(user_password, user.user_password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid credentials.',
      });
    }

    const token = jwt.sign(
      {
        id: user.user_id,
        email: user.user_email,
      },
      process.env.DB_SECRET,
      {
        expiresIn: '1d',
      }
    );

    return res.status(200).json({
      message: 'Login successful.',
      token,
      user: {
        id: user.user_id,
        email: user.user_email,
      },
    });
  });
};
