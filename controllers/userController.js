const { generateToken } = require('../utils/jwtUtils');
const userService = require('../services/userService');


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Authenticate user (you would typically verify the user password here)
        const user = await userService.authenticateUser(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a token
        const token = generateToken({ id: user.id, email: user.email }, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
};