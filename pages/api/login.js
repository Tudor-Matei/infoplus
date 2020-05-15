import jwt from "jsonwebtoken";
import escape from "validator/lib/escape";
import validateUserData from "../../utils/validateUserData";

export default (req, res) => {
    console.log(req.body);
    if (!req.body) return res.status(204).end();
    const validatedUserData = validateUserData(req.body, {});
};
