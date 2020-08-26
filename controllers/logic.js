//Our function which dictates what happens when this particular route is reached - localhost:3000/
exports.getData = (req, res, next) => {
    res.status(200).json({
        name: 'Hello API World !'
    });
};