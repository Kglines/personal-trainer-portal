const express = require('express');
const bcrypt = require('bcryptjs');
const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { validateSignup } = require('../../utils/validation.js');
const router = express.Router();

// ************************* Sign Up *************************
router.post(
    '/',
    validateSignup,
    async (req, res) => {
        const { email, password, username, firstName, lastName, profileImg, isAdmin, isMechanic } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, firstName, lastName, hashedPassword, profileImg, isAdmin, isMechanic });

        const safeUser = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            profileImg: user.profileImg,
            isAdmin: user.isAdmin,
            isMechanic: user.isMechanic,
        };
        
        await setTokenCookie(res, safeUser);

        return res.json({
            user: safeUser
        })
    }
)

module.exports = router;
