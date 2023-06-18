const jwt = require('jsonwebtoken');
const secret = "ahmedAshirTalha";


const jwtAuth = {
    async signToken(payload) {
        const token = await jwt.sign(payload, secret);
        return token;
    },
    async verifyToken(req, res, next) {
        const token = await req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(400).json("Provide the token");
        }
        try {
            const decoded = jwt.verify(token, secret);
            console.log(decoded)
            req.userId = decoded.userId;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }

    }


}

module.exports = jwtAuth;