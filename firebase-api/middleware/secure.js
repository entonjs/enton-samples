const jwt = require('jsonwebtoken');
const { secret } = require('../secure_info/credentials');

const secureMiddleware = (req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.json({
                    success: false,
                    message: 'Failed to authenticate token'
                })
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({
            message: 'Please provide the token'
        });
    }
};

export default secureMiddleware;
