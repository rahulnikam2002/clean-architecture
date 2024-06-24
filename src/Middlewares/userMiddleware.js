const validateUser = (req, res, next) => {
    const { email, password } = req.body;
    if (email && password) {
        return next();
    }

    return res.status(401).send({
        msg: "Invlaid credentials"
    });
};

module.exports = {
    validateUser
};
