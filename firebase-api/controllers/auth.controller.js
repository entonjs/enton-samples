import { Controller, Get, Middleware } from 'enton';
import secure from '../middleware/secure';

const jwt = require('jsonwebtoken');
const {
    secret,
    userName: userNameKey,
    password: passwordKey
} = require('../secure_info/credentials');

@Controller('/api/authenticate')
@Middleware(secure)
class AuthController {
    @Get('/')
    index(req, res) {
        const { userName, password } = req.body;

        if (userName === userNameKey && password === passwordKey) {
            const token = jwt.sign({ check: true }, secret, { expiresIn: 3600 });

            res.json({
                token,
                message: 'authentication successful'
            });
        } else {
            res.json({
                message: 'Credentials doesnt match'
            });
        }
    }
}

export default AuthController;