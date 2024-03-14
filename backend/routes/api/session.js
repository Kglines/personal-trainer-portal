const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { validateLogin } = require('../../utils/validation.js');
const router = express.Router();

// ************************* Log In *************************
router.post(
    '/',
    validateLogin,
    async (req, res, next) => {
        const { credential, password } = req.body;

        const user = await User.unscoped().findOne({
            where: {
                [Op.or]: {
                    username: credential,
                    email: credential,
                }
            }
        });

        if(!user){
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = { credential: 'The provided credentials were invalid.'};
            return next(err);
        }

        if(!bcrypt.compareSync(password, user.password.toString())){
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = { password: 'The provided password was invalid.'};
            return next(err);
        }

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
        });
    }
);

// ************************* Log Out *************************
router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);

// ************************* Restore Session User *************************
router.get(
    '/',
    (req, res) => {
        const { user } = req;
        if(user){
            const safeUser = {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profileImg: user.profileImg,
                role: user.role
            };

            return res.json({
                user: safeUser
            })
        } else return res.json({ user: null });
    }
);

module.exports = router;
