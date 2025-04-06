export default function Auth(req, res, next) {
    if (req.headers['authorization'] != `Bearer ${process.env.API_TOKEN}`) {
        return res.sendStatus(401);
    }
    next();
}