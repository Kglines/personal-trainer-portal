const express = require('express');
const bcrypt = require('bcryptjs');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User, Comment, Problems, Client } = require('../../db/models');
const { validateSignup } = require('../../utils/validation.js');
const router = express.Router();

// ************************* Get Users *************************
router.get(
    '/',
    requireAuth,
    async (req, res) => {
        const users = await User.findAll();
        return res.json(users);
    }
)   

// ************************* Get One User *************************
router.get(
    '/:id',
    requireAuth,
    async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id, {
                include: {
                    model: Comment,
                    model: Client
                },
            
            });
            console.log('user === ', user)
            return res.json(user);
            
        } catch (error) {
            console.log('ERROR === ', error)
        }
    }
)

// ************************* Sign Up *************************
router.post(
    '/',
    validateSignup,
    requireAuth,
    async (req, res) => {
        const { email, password, username, firstName, lastName, profileImg, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, firstName, lastName, hashedPassword, profileImg, role });

        const safeUser = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profileImg: user.profileImg,
            role: user.role
        };
        
        await setTokenCookie(res, safeUser);

        return res.json({
            user: safeUser
        })
    }
)

// ************************* Update User Info *************************
router.put(
    '/:id',
    requireAuth,
    async (req, res) => {
        const { id } = req.params;
        const { email, username, firstName, lastName, profileImg, role} = req.body;
        const user = await User.findByPk(id);
        await user.update({ email, username, firstName, lastName, profileImg, role });

        return res.json({
            user
        })
    }
)

module.exports = router;
