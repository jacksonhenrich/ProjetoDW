import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { isAuthenticated } from './middleware/auth.js';

import User from './models/User.js';

const router = express.Router();

class HTTPError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

router.post('/users', async (req, res) => {
    const user = req.body;

    delete user.confirmationPassword;

    const newUser = await User.create(user);

    delete newUser.password;

    res.status(201).json(newUser);
});

router.get('/users', isAuthenticated, async (req, res) => {
    const users = await User.readAll();

    res.json(users);
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const { id: userId, password: hash } = await User.readByEmail(email);

        const match = await bcrypt.compare(password, hash);

        if (match) {
            const token = jwt.sign(
                { userId },
                process.env.SECRET,
                { expiresIn: 3600 } // 1h
            );

            res.json({ auth: true, token });
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(401).json({ error: 'User not found' });
    }
});

// 404 handler
router.use((req, res, next) => {
    res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((err, req, res, next) => {
    // console.error(err.stack);
    if (err instanceof HTTPError) {
        res.status(err.code).json({ message: err.message });
    } else {
        res.status(500).json({ message: 'Something broke!' });
    }
});

export default router;