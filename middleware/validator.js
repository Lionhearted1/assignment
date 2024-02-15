const validator = require("validator");

const isValidEmail = (email) => {
    return validator.isEmail(email);
};

const isValidName = (name) => {
    return validator.isLength(name, { min: 3, max: undefined }) && validator.isAlpha(name, 'en-US', { ignore: ' ' });
};

const isValidPassword = (password) => {
    return validator.isLength(password, { min: 6 });
};

const validateAuthorRegistration = (req, res, next) => {
    const { author_id, author_name, author_email, author_password } = req.body;

    if (!author_id || !author_name || !author_email || !author_password) {
        return res.status(401).json({
            success: false,
            message: "Insufficient data",
        });
    }

    if (!isValidEmail(author_email) || !isValidName(author_name) || !isValidPassword(author_password)) {
        return res.status(401).json({
            success: false,
            message: "Invalid email, name, or password",
        });
    }

    next();
};

module.exports = {
    validateAuthorRegistration,
};
