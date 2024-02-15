const { body, validationResult } = require('express-validator');

const validateAuthorRegistration = [
    body('author_id').notEmpty(),
    body('author_name').isLength({ min: 3 }).trim().isAlpha('en-US', { ignore: ' ' }),
    body('author_email').isEmail(),
    body('author_password').isLength({ min: 6 }),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array(),
            });
        }

        next();
    },
];

module.exports = {
    validateAuthorRegistration,
};
