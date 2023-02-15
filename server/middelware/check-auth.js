const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token 
        const decode = jwt.verify(req.body.token)
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed.'
        });
    }
};