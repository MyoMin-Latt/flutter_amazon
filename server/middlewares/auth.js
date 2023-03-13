const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    console.log(`middleware, auth, req > ${req.user}`);
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(401).json({ msg: "No auth token, access denied." },);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied" },);

        console.log(`middleware, auth > ${req.user} / ${verified}/ ${token}`);
        req.user = verified.id;
        req.token = token;
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = auth;