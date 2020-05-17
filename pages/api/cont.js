export default (req, res) => {
    console.log(req.headers);
    return res.status(200).end();
};
