import jwt from "jsonwebtoken";
import escape from "validator/lib/escape";

export default (req, res) => {
    if (!req.body) return res.status(204).end();
};
